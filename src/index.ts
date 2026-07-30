import { 
  AIChatAgent, 
  routeAgentRequest 
} from "@cloudflare/ai-chat";

export interface Env {
  AI: Ai;
  ChatAgent: DurableObjectNamespace;
}

export class ChatAgent extends AIChatAgent<Env> {
  async onMessage(message: string) {
    return `You said: ${message}. I am now a fully capable agent!`;
  }
}

export default {
  async fetch(request, env): Promise<Response> {
    return routeAgentRequest(request, env) ?? new Response("Not found", { status: 404 });
  },
} satisfies ExportedHandler<Env>;