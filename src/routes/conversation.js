import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const conversations = await req.context.models.Conversation.findAll();
  return res.send(conversations);
});

router.get('/:conversationId', async (req, res) => {
  const conversation = await req.context.models.Conversation.findByPk(
    req.params.conversationId,
  );
  return res.send(conversation);
});

router.post('/', async (req, res) => {
  const id = uuidv4();
  const conversation = await req.context.models.Conversation.create({
    id,
    "text": req.body.text
  });

  return res.send(conversation);
});

router.delete('/:conversationId', async (req, res, next) => {
  const result = await req.context.models.Conversation.destroy({
    where: { id: req.params.conversationId },
  });
  return res.send(result);
});

export default router;
