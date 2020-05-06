import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res) => {
  return res.send('Welcome!');
});

// Test

app.get('/dev', (req, res) => {
  return res.send('testing');
});

// Ping

let ping = {
  "ok": true,
  "msg": "pong"
}

app.get('/ping', (req, res) => {
  return res.send(ping);
});

// Info

// 1. How did you approach the problem? Tell us in 5-10 sentences max.
// 2. What would you add if you have more time?
// 3. What would you remove / add in the challenge if you were in the hiring side?

let info = {
  "ok": true,
  "author": {
    "email": "laurellmccaffrey@gmail.com",
    "name": "Laurell McCaffrey"
  },
  "frontend": {
    "url": "string, the url of your frontend."
  },
  "language": "node.js",
  "sources": "string, the url of a github repository including your backend sources and your frontend sources",
  "answers": {
    "1": "string, answer to the question 1",
    "2": "string, answer to the question 2",
    "3": "string, answer to the question 3"
  }
}

app.get('/info', (req, res) => {
  return res.send(info.answers);
});

// Mutations

let mutations = {
  "2026f50e-4499-4d44-98be-6f53c48f2043": {
    "id":"2026f50e-4499-4d44-98be-6f53c48f2043",
    "mutation":"Hello there"
  }
}

app.get('/mutations', (req, res) => {
  return res.send(mutations);
});

app.post('/mutations', (req, res) => {
  const id = uuidv4();
  const mutation = {
    id,
    "author": req.body.author,
    "conversationId": req.body.conversationId,
    "data": {
      "index": req.body.data.index,
      "length": req.body.data.length,
      "text": req.body.data.text,
      "type": req.body.data.type
    },
    "origin": {
      "alice": req.body.origin.alice,
      "bob": req.body.origin.bob
    }
  }
  mutations[id] = mutation;

  return res.send(mutation);
});

// Conversations

let conversations = [
  {
  "id": "1",
  "lastMutation": "Object, The last mutation applyed on this conversation",
  "text": "hi"
  },
  {
  "id": "2",
  "lastMutation": "Object, The last mutation applyed on this conversation",
  "text": "hello"
  }
]

app.get('/conversations', (req, res) => {
  return res.send(Object.values(conversations));
});

app.delete('/conversations/:conversationId', (req, res) => {
  return res.send(
    `DELETE HTTP method on tasks/${req.params.conversationId} resource`,
  );
});

// starting

app.listen(3000, () =>
  console.log('Hello Ava team! 👋')
);
