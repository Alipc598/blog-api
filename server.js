import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
