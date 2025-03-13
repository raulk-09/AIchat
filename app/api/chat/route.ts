import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()
  const result = streamText({
    model: openai("gpt-4-turbo"),
    messages,
    system:
      "You are an AI assistant for company registration. Help users register their Private Limited company step by step. Be friendly, professional, and provide accurate information about the registration process in Delhi NCR.",
  })
  return result.toDataStreamResponse()
}

