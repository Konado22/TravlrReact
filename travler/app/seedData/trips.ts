//seed initial database 
import bcrypt from 'bcryptjs';
import { db } from '@vercel/postgres';
const client = await db.connect();

