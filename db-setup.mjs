import postgres from 'postgres';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: '.env.local' });

console.log('DATABASE_URL:', process.env.DATABASE_URL); // For debugging

const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' });
const schema = readFileSync(resolve('schema.sql'), 'utf8');

async function setup() {
  try {
    console.log('Running schema...');
    await sql.unsafe(schema);
    console.log('Schema loaded successfully.');
  } catch (error) {
    console.error('Error loading schema:', error);
  } finally {
    await sql.end();
  }
}

setup();
