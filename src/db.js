import { Pool } from 'pg';

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'chronos',
})

export default pool;