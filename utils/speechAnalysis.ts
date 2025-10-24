import OpenAI from 'openai'

const openai = process.env.OPENAI_API_KEY ? new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
}) : null

export interface SpeechAnalysisResult {
  pace: number
  clarity: number
  confidence: number
  feedback: string
  suggestions: string[]
  transcript: string
}

export async function analyzeSpeechWithWhisper(audioBlob: Blob): Promise<string> {
  try {
    if (!process.env.OPENAI_API_KEY) {
          // Demo mode - return mock transcript
          const mockTranscripts = [
            "This is a sample recording for demonstration purposes. The enunciation coach app is working perfectly in demo mode and I need to slow down my speech to be more like the great orators.",
            "Hello, this is a demonstration of the speech analysis feature. The app provides detailed feedback on your speaking skills and I really need to work on slowing down and enunciating clearly like the great communicators.",
            "Welcome to the enunciation coach application. This tool helps improve speech clarity, pacing, and overall confidence in communication. I am speaking slowly and clearly, enunciating each word properly like the great orators of history.",
            "I'm practicing my speech clarity and confidence. This app provides excellent feedback to help me improve my speaking skills. I want to speak like Obama, Churchill, Reagan, and Jobs - clear, engaging, and able to be understood.",
            "The coastal clarity design creates a calming atmosphere perfect for speech coaching. The colors are inspired by ocean and coastal themes. I need to slow down and articulate each word clearly to become a better communicator."
          ]
      return mockTranscripts[Math.floor(Math.random() * mockTranscripts.length)]
    }

    const formData = new FormData()
    formData.append('file', audioBlob, 'recording.wav')
    formData.append('model', 'whisper-1')

    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: formData,
    })

    if (!response.ok) {
      throw new Error(`Whisper API error: ${response.statusText}`)
    }

    const result = await response.json()
    return result.text
  } catch (error) {
    console.error('Whisper transcription failed:', error)
    throw error
  }
}

export async function generateSpeechAnalysis(transcript: string): Promise<Omit<SpeechAnalysisResult, 'transcript'>> {
  try {
    if (!openai) {
          // Demo mode - return mock analysis with tough coaching
          const mockAnalyses = [
            {
              pace: 45,
              clarity: 62,
              confidence: 78,
              feedback: "Look, you're speaking WAY too fast and slurring your words. This isn't going to cut it if you want to communicate like Obama or Churchill. You're at 180+ words per minute when you should be at 140-160. Your clarity is suffering because you're rushing through words instead of articulating them properly.",
              suggestions: [
                "SLOW DOWN. Practice reading at 140 words per minute - use a metronome app",
                "Record yourself reading the Gettysburg Address slowly and clearly",
                "Practice the 'Power Pause' - take 2 seconds between sentences",
                "Do daily tongue twister exercises to strengthen articulation",
                "Practice the 'Churchill Method' - speak each word as if it costs money"
              ]
            },
            {
              pace: 52,
              clarity: 58,
              confidence: 82,
              feedback: "You're still rushing and mumbling. Your confidence is good, but confidence without clarity is just noise. You're speaking at 200+ words per minute - that's not communication, that's verbal diarrhea. Great speakers like Reagan and Jobs spoke slowly and deliberately.",
              suggestions: [
                "Practice the 'Obama Pause' - pause for 3 seconds before important points",
                "Read aloud for 10 minutes daily at 130 words per minute maximum",
                "Practice the 'Jobs Method' - repeat key phrases three times slowly",
                "Record yourself and count how many words you speak per minute",
                "Use the 'Churchill Technique' - speak as if addressing a large hall"
              ]
            },
            {
              pace: 38,
              clarity: 89,
              confidence: 94,
              feedback: "NOW we're talking! This is the pace and clarity of a true communicator. You're speaking at 150 words per minute with excellent articulation. This is how Churchill delivered his speeches - slow, deliberate, and powerful. Keep this up and you'll command attention like the greats.",
              suggestions: [
                "Maintain this excellent pace - you've found your rhythm",
                "Practice this pace with longer speeches (5+ minutes)",
                "Record yourself giving a 3-minute presentation at this pace",
                "Practice the 'Reagan Method' - vary your pace for emphasis",
                "Share your speaking techniques with others - you're on the right track"
              ]
            }
          ]
      
      return mockAnalyses[Math.floor(Math.random() * mockAnalyses.length)]
    }

    const prompt = `
You are an expert speech coach analyzing a transcript. Provide feedback on:
1. Pace (0-100): How well-paced was the speech?
2. Clarity (0-100): How clear was the pronunciation and articulation?
3. Confidence (0-100): How confident did the speaker sound?

Transcript: "${transcript}"

Respond in this JSON format:
{
  "pace": number,
  "clarity": number,
  "confidence": number,
  "feedback": "Encouraging, specific feedback about the speech",
  "suggestions": ["Specific suggestion 1", "Specific suggestion 2", "Specific suggestion 3"]
}

Focus on being encouraging while providing actionable feedback.
`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a supportive speech coach who provides encouraging, actionable feedback to help people improve their speaking skills.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
    })

    const responseText = completion.choices[0]?.message?.content || '{}'
    
    try {
      return JSON.parse(responseText)
    } catch (parseError) {
      // Fallback if JSON parsing fails
      return {
        pace: 75,
        clarity: 75,
        confidence: 75,
        feedback: "Great job on your recording! Keep practicing to improve your speech clarity and confidence.",
        suggestions: [
          "Try speaking a bit slower to improve clarity",
          "Take deep breaths before speaking to boost confidence",
          "Practice tongue twisters to improve articulation"
        ]
      }
    }
  } catch (error) {
    console.error('GPT analysis failed:', error)
    throw error
  }
}

export async function analyzeSpeech(audioBlob: Blob): Promise<SpeechAnalysisResult> {
  try {
    // First, transcribe the audio
    const transcript = await analyzeSpeechWithWhisper(audioBlob)
    
    // Then, analyze the transcript
    const analysis = await generateSpeechAnalysis(transcript)
    
    return {
      ...analysis,
      transcript
    }
  } catch (error) {
    console.error('Speech analysis failed:', error)
    throw error
  }
}
