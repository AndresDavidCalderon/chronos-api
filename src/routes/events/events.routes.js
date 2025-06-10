import e from 'express'
import pool from '../../db.js'

const router = e.Router()

router.get('/', async (req, res) => {
  const dateTime = req.query.date;
  
})