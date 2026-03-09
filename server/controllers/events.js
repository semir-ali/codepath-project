import { pool } from '../config/database.js';

const EventsController = {
  getEvents: async (req, res) => {
    try {
      const result = await pool.query('SELECT id, name, title, date, time, location, image, summary FROM events ORDER BY id');
      const list = result.rows.map(r => ({ id: r.id, slug: r.name, title: r.title, date: r.date, time: r.time, location: r.location, image: r.image, summary: r.summary }));
      res.json(list);
    } catch (err) {
      console.error('DB error fetching events', err);
      res.status(500).json({ error: 'Database error' });
    }
  },

  getEventBySlug: async (req, res) => {
    const { slug } = req.params;
    try {
      const result = await pool.query('SELECT * FROM events WHERE name = $1 LIMIT 1', [slug]);
      if (result.rows.length === 0) return res.status(404).json({ error: 'Event not found' });
      res.json(result.rows[0]);
    } catch (err) {
      console.error('DB error fetching event by slug', err);
      res.status(500).json({ error: 'Database error' });
    }
  }
};

export default EventsController;
