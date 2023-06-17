import { Router } from "express";
import mainController from "../controllers/main";
import { logMiddleware } from '../utils/logger';
import loremController from "../controllers/lorem";

const router = Router();

// Rota principal
router.get("/", logMiddleware('completo'), mainController.principal);

// Rota sobre
router.get("/sobre", logMiddleware('completo'), mainController.sobre);

// Rota hb1
router.get("/hb1", logMiddleware('completo'), mainController.hb1);

// Rota hb2
router.get("/hb2", logMiddleware('completo'), mainController.hb2);

// Rota hb3
router.get("/hb3", logMiddleware('completo'), mainController.hb3);

// Rota hb4
router.get("/hb4", logMiddleware('completo'), mainController.hb4);

// Rota hbprofs
router.get("/hbprofs", logMiddleware('completo'), mainController.hb4profs);

// Rota lorem
router.get("/lorem", logMiddleware('completo'), loremController.serverLorem);

export default router;
