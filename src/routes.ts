import { Router } from "express";

export const routes = Router()

routes.get('/', (req, res) => {
  res.json({msg: 'Rodando'})
})