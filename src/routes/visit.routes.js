import { Router } from "express";
import { createVisit, getAllVisits, updateStatus } from "../controllers/visit.controller.js";
const router = Router();

router.get('/allVisits', getAllVisits);
router.post('/registerVisit', createVisit);
router.put('/updateVisit/:id', updateStatus)

export default router;