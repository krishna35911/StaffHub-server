const jsonServer= require('json-server')

const employeeserver = jsonServer.create()

const router = jsonServer.router('db.json')

const middleware = jsonServer.defaults()

employeeserver.use(middleware)
employeeserver.use(router)


const port = 5000 || process.env.port  

employeeserver.listen(port,()=>
{
    console.log(`employeeserver start at ${port}`);
})