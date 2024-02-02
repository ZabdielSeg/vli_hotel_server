import 'dotenv/config'
import express from 'express';
import cors from 'cors'
import visitRoutes from './routes/visit.routes.js'

const app = express();

app.use(express.json());
app.use(cors())

app.use(visitRoutes)

export default app;