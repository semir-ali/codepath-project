import { pool } from '../config/database.js'

const getEvents = async (requestAnimationFrame, res) => {
    try {
        const queryResult = await pool.query('SELECT * FROM events ORDER BY id ASC')
        res.status(200).json(queryResult.rows)
    } catch (err) {
        console.error('Error fetching gifts:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
}

export default {
    getEvents
}