import express from 'express';
import prices from './routes/prices';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/v1/', prices);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});