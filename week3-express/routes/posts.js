import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({
    status: "success",
    data: [],
  });
});

export default router;
