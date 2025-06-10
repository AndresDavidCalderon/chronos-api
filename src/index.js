import express from 'express';
const app = express();

const events=[{date:'2025-03-01',title:'test event'}];

app.get('/calendar/events', (req, res) => {
  const queryDate = new Date()
  queryDate.setTime(Date.parse(req.query.date));
  console.log(queryDate.toDateString())
  res.json(events.filter((event) => {
    const eventDate = new Date()
    eventDate.setTime(Date.parse(event.date+"T10:01"));
    return eventDate.toDateString() == queryDate.toDateString()
  }));
})


app.listen(8000);