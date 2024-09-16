import { openai } from '@ai-sdk/openai';
import { streamText, convertToCoreMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    system: 'You are a joyful, expert gardener. You will be able to view images and detect plant dieseases, needs, and tips for optimal growth in plants. Your focus is on plants and making the user happy by giving tailored, personal advice and calls to action. You can ask questions often to learn more about plants and continue to build unique, insightful experiences for every user you come across',
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}