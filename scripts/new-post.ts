import fs from 'node:fs'
import path from 'node:path'
import prompts from 'prompts'

const POSTS_DIR = path.resolve(process.cwd(), 'src/posts');

const slugify = (text: string) => {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

const getId = async () => {
    const files = fs.readdirSync(POSTS_DIR);
    return (files?.length ?? 0) + 1;
}

async function createPost() {
    const response = await prompts([
        {
            type: 'text',
            name: 'title',
            message: "What is the title of the post?",
            validate: (value) => value.length > 0 ? true : 'Title is required!'
        },
        {
            type: 'text',
            name: 'slug',
            message: 'What is the slug?',
            initial: (prev) => slugify(prev),
            validate: (value) => {
                if (fs.existsSync(path.join(POSTS_DIR, `${value}.md`))) {
                    return 'Slug already taken!';
                }
                return true;
            }
        }
    ]);

    if (!response.title || !response.slug) return;
    const { title, slug } = response;
    const date = new Date().toLocaleDateString("en-CA").split('T')[0]; // en-CA uses YYYY-MM-DD
    const id = await getId();

    const lines = [
        '---',
        `id: ${id}`,
        `title: "${title}"`,
        `date: "${date}"`,
        '---',
        '',
        '> [YOUR POST HERE]'
    ]

    const content = lines.join("\n");
    const filePath = path.join(POSTS_DIR, `${slug}.md`);

    try {
        fs.writeFileSync(filePath, content);
        console.log(`\n✅ Post created!`);
    } catch(error) {
        console.error('❌ Error creating post:', error);
    }
}

createPost();