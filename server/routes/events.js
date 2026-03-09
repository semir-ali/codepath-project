import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import EventsController from '../controllers/events.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// API endpoint to get all events with basic info (id, slug, title, date, time, location, image, summary)
router.get('/', EventsController.getEvents);

router.get('/:slug', EventsController.getEventBySlug);

export default router;