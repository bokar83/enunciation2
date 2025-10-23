import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

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
