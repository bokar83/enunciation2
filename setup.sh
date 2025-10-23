#!/bin/bash

# Enunciation App Setup Script
echo "🗣️ Setting up Enunciation Coach App..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "🔧 Creating .env.local file..."
    cp env.example .env.local
    echo "⚠️  Please edit .env.local and add your API keys:"
    echo "   - OPENAI_API_KEY=your_openai_api_key_here"
    echo "   - AIRTABLE_API_KEY=your_airtable_api_key_here (optional)"
    echo "   - AIRTABLE_BASE_ID=your_airtable_base_id_here (optional)"
fi

# Build the project
echo "🔨 Building the project..."
npm run build

echo "✅ Setup complete!"
echo ""
echo "🚀 To start the development server:"
echo "   npm run dev"
echo ""
echo "🌐 Then open http://localhost:3000 in your browser"
echo ""
echo "📝 Don't forget to add your API keys to .env.local"
