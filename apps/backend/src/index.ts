import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import type { UserDto } from '@repo/domain/dto/user.dto.js'
import { openAPIRouteHandler } from "hono-openapi";
import api from "./api/index.js";
import {swaggerUI} from "@hono/swagger-ui";

type D1Database = any;

const app = new Hono<{ Bindings: { DB: D1Database } }>()

app.get('/license', async (c) => {
  const { results } = await c.env.DB.prepare('SELECT * FROM Licenses').all()
  return c.json(results)
})

app.post('/license', async (c) => {
  const body = await c.req.json()
  await c.env.DB.prepare(
    'INSERT INTO Licenses (LicenseNumber, IssueDate, ExpiryDate, Type) VALUES (?, ?, ?, ?)'
  ).bind(body.LicenseNumber, body.IssueDate, body.ExpiryDate, body.Type).run()
  return c.json({ message: 'Created' }, 201)
})

export default app
