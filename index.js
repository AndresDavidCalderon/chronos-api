import express from 'express';
const app = express();

const events=[{date:'2025-03-01',title:'test event'}];

app.get('/calendar/events', (req, res) => {
  const date = new Date()
  date.setTime(Date.parse(req.query.date));
  res.json(events.filter((event) => {
    const eventDate = new Date()
    eventDate.setTime(Date.parse(event.date+"T10:01"));
    return eventDate.toDateString() == date.toDateString()
  }));
})


app.listen(8000);