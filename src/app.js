import express from 'express';
import visitRoutes from './routes/visit.routes.js'

const app = express();

app.use(express.json())

app.use(visitRoutes)

export default app;