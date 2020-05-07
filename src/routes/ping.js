import { Router } from 'express';

const router = Router();

const ping = {
  "ok": true,
  "msg": "pong"
}

router.get('/', (req, res) => {
  return res.send(Object.values(ping));
});

export default router;
