import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'bun';
import { PostMetadata } from '../src/lib/types'

const FRONTMATTER_REGEX = /^---\s*([\s\S]*?)\s*---/;
const POSTS_DIR = path.resolve(process.cwd(), 'src/posts');

function getStagedMarkdownFiles() {
  // Roda: git diff --cached --name-only
  const { stdout } = spawnSync(['git', 'diff', '--cached', '--name-only']);
  const output = stdout.toString();
  
  // Filtra apenas arquivos que estão na pasta de posts e são .md
  const stagedFiles = output
    .split('\n')
    .map((line: string) => line.trim())
    .filter((line: string) => line.includes('src/posts') && line.endsWith('.md'));

  return stagedFiles;
}

function parseFrontmatter(content: string): PostMetadata | null {
  const match = content.match(FRONTMATTER_REGEX);
  if (!match) return null;

  const rawMeta = match[1];
  const meta: any = {};

  rawMeta.split('\n').forEach(line => {
    const [key, ...value] = line.split(':');
    if (key && value) {
      meta[key.trim()] = value.join(':').trim().replace(/['"]/g, '');
    }
  });

  return meta;
}

function validate() {
  const stagedPosts = getStagedMarkdownFiles();

  if (stagedPosts.length === 0) {
    console.log('⏩ No posts changed. Skipping.');
    process.exit(0);
  }

  if (!fs.existsSync(POSTS_DIR)) {
    console.error(`❌ Posts directory not found: ${POSTS_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
  
  const seenIds = new Map<number, string>();
  let hasError = false;

  console.log(`🔍 Checking ${files.length} posts...`);

  files.forEach(file => {
    const filePath = path.join(POSTS_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const meta = parseFrontmatter(content);

    if (!meta) {
      console.error(`❌ ERROR: Malformed metadata found in: '${file}':`);
      process.exit(1);
    }

    if (meta.id) {
      if (seenIds.has(meta.id)) {
        console.error(`❌ ERROR: Duplicated Post ID '${meta.id}' found in:`);
        console.error(`   - ${seenIds.get(meta.id)}`);
        console.error(`   - ${file}`);
        hasError = true;
      } else {
        seenIds.set(meta.id, file);
      }
    } else {
        console.warn(`⚠️  WARNING: File '${file}' does not has an ID.`);
    }
  });

  if (hasError) {
    console.error('\n🚫 Commit blocked due to duplicated post metadata.');
    process.exit(1);
  }

  console.log('✅ Check! Posts validated.');
}

validate();