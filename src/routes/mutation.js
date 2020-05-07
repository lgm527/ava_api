import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const mutations = await req.context.models.Mutation.findAll();
  return res.send(mutations);
});

router.post('/', async (req, res) => {
  const id = uuidv4();
  const mutation = await req.context.models.Mutation.create({
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
  });

  return res.send(mutation);
});

export default router;
