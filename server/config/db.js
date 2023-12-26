import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

// eslint-disable-next-line no-undef
const MONGODB_URL = process.env.MONGODB_URL || '';

async function db() {
  try {
    const con = await mongoose.connect(MONGODB_URL);
    console.log('mongodb connected to: ' + con.connection.host);
  } catch (error) {
    console.log(error);
  }
}

export default db;
