import { BaseAgent } from "./base.agent.js"
import { AgentType } from "../../types/index.js"
import { BUG_AGENT_SYSTEM_PROMPT } from "../../prompts/bug.prompt.js"

export class BugAgent extends BaseAgent {
    readonly agentType: AgentType = "Bug"

    getSystemPrompt(): string {
        return BUG_AGENT_SYSTEM_PROMPT
    }
}
