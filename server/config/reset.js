import { pool } from './database.js'
import './dotenv.js'
import eventData from '../data/events.js'

const createEventsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            location VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            summary TEXT NOT NULL,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 events table created successfully')
    } catch (err) {
        console.error('⚠️ error creating events table', err)
    }
}

const seedEventsTable = async () => {
    await createEventsTable()

    eventData.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO events (name, title, date, time, location, image, summary, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)'
        }

        const values = [
            event.name,
            event.title,
            event.date,
            event.time,
            event.location,
            event.image,
            event.summary,
            event.submittedBy,
            event.submittedOn
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err)
                return
            }
            console.log(`✅ ${event.name} added successfully`)
        })
    })
}

seedEventsTable()