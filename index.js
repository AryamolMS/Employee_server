

const jsonserver = require('json-server')

const employeeServer = jsonserver.create()

const router = jsonserver.router('db.json')

const middleware = jsonserver.defaults()

employeeServer.use(middleware)
employeeServer.use(router)

const port = 5000 || process.env.PORT

employeeServer.listen(port,()=>{
    console.log(`Employee server listening to port no ${port}`);
})