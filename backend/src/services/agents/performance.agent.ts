import { BaseAgent } from "./base.agent.js"
import { AgentType } from "../../types/index.js"
import { PERFORMANCE_AGENT_SYSTEM_PROMPT } from "../../prompts/performance.prompt.js"

export class PerformanceAgent extends BaseAgent {
    readonly agentType: AgentType = "Performance"

    getSystemPrompt(): string {
        return PERFORMANCE_AGENT_SYSTEM_PROMPT
    }
}
