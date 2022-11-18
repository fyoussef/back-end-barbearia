import { Router } from "express";

export const routes = Router()

routes.get('/api/', (req, res) => {
  res.json({msg: 'Rodando'})
})