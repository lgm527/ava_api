import { Router } from 'express';

const router = Router();

const answers = {
  1: "one",
  2: "two",
  3: "three"
}

router.get('/', (req, res) => {
  return res.send(Object.values(answers));
});

export default router;
