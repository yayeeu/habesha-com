import express from 'express';
import cors from 'cors';
import submitNotificationRouter from './api/submit-notification';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', submitNotificationRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 