import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

// Create express server
const app = express(); // This is new express instance
const port = 3000; // express http port

// Express config
app.use(cors()) // enable cors
app.use(helmet()) // enable helmet
app.use(morgan('dev')) // enable morgan

// Define express routes
app.get('/', (req, res) => {
    res.send('Hello express!')
})

// Start express server
app.listen(port, () => {
    // Callback function when server is successfully started
    console.log(`Server started at http://localhost:${port}`)
})

// Export express app
export default app