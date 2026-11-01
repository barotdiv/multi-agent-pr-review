import { Router } from "express"
import { ReviewController } from "../controllers/review.controller.js"
import { StreamController } from "../controllers/stream.controller.js"
import { WebhookController } from "../controllers/webhook.controller.js"
const router = Router()

router.post("/reviews/run", ReviewController.runReview)

router.get("/reviews", ReviewController.getAllReviews)

router.get("/reviews/:id", ReviewController.getReviewById)

router.get("/reviews/:id/stream", StreamController.streamProgress)

router.post("/webhooks/github", WebhookController.handleGitHubWebhook)

export default router