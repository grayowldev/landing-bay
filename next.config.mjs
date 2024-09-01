/** @type {import('next').NextConfig} */

import dotenv from 'dotenv'
import path from 'path'

// Load the .env file from a custom path
dotenv.config({ path: path.resolve( './.env.local') });
const nextConfig = {
    env: {
        ABC: process.env.NEXT_PUBLIC_ABC,
        GEMINI_API_KEY: process.env.GEMINI_API_KEY
    }
};

export default nextConfig;
