import { Router } from 'express';

const router = Router();

const info = {
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

router.get('/', (req, res) => {
  return res.send(Object.values(info));
});

export default router;
