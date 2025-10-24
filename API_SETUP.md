# API Setup Guide

## Setting up your ChatGPT API Key

To use the real AI analysis instead of demo mode, you need to set up your OpenAI API key as an environment variable.

### Option 1: Create a .env.local file (Recommended)

1. Create a file named `.env.local` in the root directory of your project
2. Add the following content:

```
OPENAI_API_KEY=your_openai_api_key_here
```

### Option 2: Set environment variable in your terminal

**Windows (PowerShell):**
```powershell
$env:OPENAI_API_KEY="your_openai_api_key_here"
```

**Windows (Command Prompt):**
```cmd
set OPENAI_API_KEY=your_openai_api_key_here
```

### Option 3: Set environment variable in your IDE

If you're using VS Code or another IDE, you can set the environment variable in your IDE's settings.

## What happens when you set the API key:

- ✅ **With API Key**: You'll see "🤖 AI Analysis Mode" and get real-time analysis of your speech using ChatGPT
- ❌ **Without API Key**: You'll see "🎭 Demo Mode" and get mock analysis for testing

## Security Note

The `.env.local` file is automatically ignored by git, so your API key won't be pushed to GitHub. This is the recommended approach for local development.

## Testing

1. Set up your API key using one of the methods above
2. Restart your development server (`npm run dev`)
3. Go to the record page and make a recording
4. You should see "🤖 AI Analysis Mode" and get real AI feedback on your speech!

## Features with Real API:

- **Real Speech Transcription**: Your actual words will be transcribed
- **AI-Powered Analysis**: Get personalized feedback on pace, clarity, and confidence
- **Tough Coaching**: Direct, actionable feedback referencing great speakers like Obama, Churchill, Reagan, and Jobs
- **Specific Exercises**: Custom recommendations based on your actual speech patterns
