import { NextRequest, NextResponse } from 'next/server'
import { analyzeSpeech } from '@/utils/speechAnalysis'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const audioFile = formData.get('audio') as File
    
    if (!audioFile) {
      return NextResponse.json(
        { error: 'No audio file provided' },
        { status: 400 }
      )
    }

    // Convert File to Blob
    const audioBlob = new Blob([await audioFile.arrayBuffer()], {
      type: audioFile.type
    })

    const analysis = await analyzeSpeech(audioBlob)
    
    return NextResponse.json(analysis)
  } catch (error) {
    console.error('Analysis API error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze speech' },
      { status: 500 }
    )
  }
}
