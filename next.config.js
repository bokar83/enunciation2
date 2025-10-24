/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY || '',
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID || '',
  },
}

module.exports = nextConfig
