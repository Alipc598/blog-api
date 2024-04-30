import dotenv from 'dotenv';
dotenv.config();

console.log(`Database URI: ${process.env.POSTGRES_URI}`);
