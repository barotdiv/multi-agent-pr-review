import { BaseAgent } from "./base.agent.js"
import { AgentType } from "../../types/index.js"
import { QUALITY_AGENT_SYSTEM_PROMPT } from "../../prompts/quality.prompt.js"

export class QualityAgent extends BaseAgent {
    readonly agentType: AgentType = "Quality"

    getSystemPrompt(): string {
        return QUALITY_AGENT_SYSTEM_PROMPT
    }
}
