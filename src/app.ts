import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import router from './routes'
import dotenv from 'dotenv'

// Initialize dotenv configuration
dotenv.config()

// Create express server
const app = express() // This is new express instance
const port = process.env['APP_PORT'] || 3000 // express http port
const env = process.env['APP_ENV'] || 'dev' // application environment

// Express config
app.use(cors()) // enable cors
app.use(helmet()) // enable helmet
app.use(morgan(env)) // enable morgan

app.use(express.json()) // enable JSON body parser

// Define express routes
app.use('/', router)

// Start express server
app.listen(port, () => {
    // Callback function when server is successfully started
    console.log(`Server started at http://localhost:${port}`)
})

// Export express app
export default app