const express = require('express');
const app = express();
const path = require('path');
const { syncAndSeed, Student, Campus } = require('./server/db');

const port = process.env.PORT || 3000;

app.get('/app.js', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'dist', 'main.js'))
);

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

syncAndSeed().then(() =>
  app.listen(port, () => console.log(`listening on port ${port}`))
);

app.get('/api/students', (req, res, next) => {
  Student.findAll()
    .then(students => res.send(students))
    .catch(next);
});

app.get('/api/campuses', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next);
});

// app.get('/api/campuses/:id', (req, res, next) => {
//   Campus.findByPk(req.params.id)
//     .then(campus => res.send(campus))
//     .catch(next);
// });

// app.get('/api/students/:id', (req, res, next) => {
//   Student.findByPk(req.params.id)
//     .then(student => res.send(student))
//     .catch(next);
// });
