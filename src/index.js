import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

// Ping

let ping = {
  "ok": true,
  "msg": "pong"
}

app.get('/ping', (req, res) => {
  return res.send(ping);
});

// Users

let users = {
  1: {
    id: '1',
    username: 'Bob',
  },
  2: {
    id: '2',
    username: 'Alice',
  },
};

app.get('/users', (req, res) => {
  return res.send(Object.values(users));
});

app.get('/users/:userId', (req, res) => {
  return res.send(users[req.params.userId]);
});

app.post('/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});

app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});

// Tasks

let tasks = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  }
}

app.get('/tasks', (req, res) => {
  return res.send(Object.values(tasks));
});

app.get('/tasks/:taskId', (req, res) => {
  return res.send(tasks[req.params.taskId]);
});

app.post('/tasks', (req, res) => {
  return res.send('POST HTTP method on tasks resource');
});

app.put('/tasks/:taskId', (req, res) => {
  return res.send(
    `PUT HTTP method on tasks/${req.params.taskId} resource`,
  );
});

app.delete('/tasks/:taskId', (req, res) => {
  return res.send(
    `DELETE HTTP method on tasks/${req.params.taskId} resource`,
  );
});

// starting

app.listen(3000, () =>
  console.log('Hello Ava team!'),
);
