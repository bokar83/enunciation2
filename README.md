# 🗣️ Enunciation Coach App

A mobile-first enunciation training app that helps users improve their speech clarity, pacing, and confidence. Built with Next.js, Tailwind CSS, and OpenAI APIs.

## Features

- 🎙️ **Voice Recording**: Record your speech with web-based audio capture
- 🧠 **AI Analysis**: Get instant feedback using OpenAI Whisper and GPT-4
- 📊 **Progress Tracking**: Monitor your improvement over time
- 🔄 **Practice Exercises**: Guided drills to improve speaking skills
- 📱 **Mobile-First**: Optimized for mobile devices and browsers
- 🎨 **Coastal Clarity Design**: Beautiful, calming color palette inspired by ocean and coastal themes

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd enunciation-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables (Optional)**
   ```bash
   cp env.example .env.local
   ```
   
   **Demo Mode**: The app works perfectly without API keys! It will show realistic mock analysis for testing.
   
   **Full Mode**: Add your API keys to `.env.local` for real AI analysis:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   AIRTABLE_API_KEY=your_airtable_api_key_here
   AIRTABLE_BASE_ID=your_airtable_base_id_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Quick Setup (Windows)
Run the setup script for automatic installation:
```bash
setup.bat
```

## Color Palette
The app uses the **Coastal Clarity** color scheme:
- **Ocean Cyan** (#00B7C2) - Primary brand color
- **Midnight Navy** (#071A2E) - Text and background anchor
- **Orange** (#FF7A00) - Accent color
- **Clay** (#B47C57) - Warm tertiary
- **Mist** (#F3F6F9) - Light neutral
- **Carbon** (#1E222A) - Dark neutral

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI Whisper API, GPT-4
- **Audio**: Web Speech API, MediaRecorder
- **Database**: Airtable (optional)

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── AudioRecorder.tsx  # Audio recording component
│   ├── AudioPlayer.tsx    # Audio playback component
│   ├── RecordingInterface.tsx # Main recording UI
│   └── SpeechAnalysis.tsx # Analysis results display
├── utils/                 # Utility functions
│   └── speechAnalysis.ts  # OpenAI integration
├── docs/                  # Documentation
└── public/               # Static assets
```

## Core Workflow

1. **Record**: User records their speech using the web microphone
2. **Transcribe**: Audio is transcribed using OpenAI Whisper
3. **Analyze**: GPT-4 analyzes the transcript for pace, clarity, and confidence
4. **Feedback**: User receives structured feedback and improvement suggestions
5. **Practice**: User can practice with guided exercises

## API Endpoints

- `POST /api/analyze` - Analyze recorded speech and return feedback

## Development

### Running Tests
```bash
npm run lint
```

### Building for Production
```bash
npm run build
npm start
```

## Deployment

The app is designed to be deployed on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For questions or issues, please open an issue on GitHub or contact the development team.
