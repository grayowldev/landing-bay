import fs from 'fs';
import path from 'path';

export async function GET(request, { params }) {
    const { message } = params;
    let filePath = '';
    if (message && message === 'init') {
        filePath = path.join(process.cwd(), 'src', 'prompts', 'init.md');
    } else if (message && message === 'generation') {
        filePath = path.join(process.cwd(), 'src', 'prompts', 'generation.md');
    } else {
        throw new Error('Invalid message');
    }

    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return new Response(JSON.stringify({ content: fileContent }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('File not found or cannot be read:', error);
        return new Response(JSON.stringify({ error: 'File not found or cannot be read' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}