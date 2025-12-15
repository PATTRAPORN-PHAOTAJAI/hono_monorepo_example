import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import type { UserDto } from '@repo/domain/dto'

const user : UserDto  = {
  id:1,
  email : "ddd",
  username : "xxx"
}
const app = new Hono()

app.get('/', (c) => {
  return c.json(user)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
