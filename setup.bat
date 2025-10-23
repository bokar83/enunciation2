@echo off
echo 🗣️ Setting up Enunciation Coach App...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ first.
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm first.
    pause
    exit /b 1
)

echo ✅ Node.js and npm are installed

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Create environment file if it doesn't exist
if not exist .env.local (
    echo 🔧 Creating .env.local file...
    copy env.example .env.local
    echo ⚠️  Please edit .env.local and add your API keys:
    echo    - OPENAI_API_KEY=your_openai_api_key_here
    echo    - AIRTABLE_API_KEY=your_airtable_api_key_here (optional)
    echo    - AIRTABLE_BASE_ID=your_airtable_base_id_here (optional)
)

REM Build the project
echo 🔨 Building the project...
npm run build

echo ✅ Setup complete!
echo.
echo 🚀 To start the development server:
echo    npm run dev
echo.
echo 🌐 Then open http://localhost:3000 in your browser
echo.
echo 📝 Don't forget to add your API keys to .env.local
pause
