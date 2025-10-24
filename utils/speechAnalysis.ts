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
        "This is a sample recording for demonstration purposes. The enunciation coach app is working perfectly in demo mode.",
        "Hello, this is a demonstration of the speech analysis feature. The app provides detailed feedback on your speaking skills.",
        "Welcome to the enunciation coach application. This tool helps improve speech clarity, pacing, and overall confidence in communication.",
        "I'm practicing my speech clarity and confidence. This app provides excellent feedback to help me improve my speaking skills.",
        "The coastal clarity design creates a calming atmosphere perfect for speech coaching. The colors are inspired by ocean and coastal themes."
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
      // Demo mode - return mock analysis
      const mockAnalyses = [
        {
          pace: 82,
          clarity: 76,
          confidence: 85,
          feedback: "Excellent work! Your pace is well-controlled and your confidence really shines through. Your clarity could use a bit more attention - try to articulate each word more distinctly.",
          suggestions: [
            "Slow down slightly to improve word clarity",
            "Practice tongue twisters to strengthen articulation",
            "Take deeper breaths to maintain steady pace"
          ]
        },
        {
          pace: 95,
          clarity: 88,
          confidence: 78,
          feedback: "Great clarity and articulation! You're speaking at a good pace, though you might benefit from slowing down just a touch to sound more confident.",
          suggestions: [
            "Reduce speaking speed by 10-15%",
            "Add more pauses between sentences",
            "Practice confident breathing techniques"
          ]
        },
        {
          pace: 68,
          clarity: 92,
          confidence: 91,
          feedback: "Outstanding confidence and crystal-clear articulation! Your pace is perfect for clear communication. This is exactly how confident speaking should sound.",
          suggestions: [
            "Maintain this excellent pace and clarity",
            "Share your speaking techniques with others",
            "Continue practicing to build consistency"
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
