import { BaseAgent } from "./base.agent.js"
import { AgentType } from "../../types/index.js"
import { SECURITY_AGENT_SYSTEM_PROMPT } from "../../prompts/security.prompt.js"

export class SecurityAgent extends BaseAgent {
    readonly agentType: AgentType = "Security"

    getSystemPrompt(): string {
        return SECURITY_AGENT_SYSTEM_PROMPT
    }
}
