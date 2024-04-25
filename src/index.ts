import { Hono } from 'hono'

const app = new Hono()


async function validate(c: any, next: any){
   const body = await c.req.json();
   const token  = await c.req.header("Authorization");
   console.log(body.name + " " + body.password);
   
  if(body.name=="Santosh" && body.password=="secret"){
   if(token==12345){
    return next();
   }
  }
    return c.text("Bad Authentication");
}

app.get('/', validate, async (c) => {
  const name =  await c.req.json();

  return c.text('Login successful, Hello '+ name.name);
})

app.get('/login', validate, async (c) => {
  const name =  await c.req.json();

  return c.text('Login successful, Hello '+ name.name);
})

export default app
