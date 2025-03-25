//Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
// Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
// Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world. 
//npm make use of package.json file to manage the dependencies of the project.
//npm init is used to create a new package.json file.
//npm install is used to install dependencies.
//npm start is used to start the server.
//npm test is used to run tests.
//npm run build is used to build the project.
//npm run dev is used to run the project in development mode.
//npm run prod is used to run the project in production mode.
//express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

import { Request, Response } from "express"
import { ServerResponse } from "http"
import { RestTypeNode } from "typescript"

//HTTP means hypertext transfer protocol. It is a protocol used to transfer data over the web. It is the foundation of any data exchange on the Web.
//HTTP is a client-server protocol: requests are sent by one entity, the user-agent (or a proxy on its behalf). Most of the time, the user-agent is a web browser, but it can be anything, like a command-line tool or a service.
//The server answers the request using the same protocol. The answer is sent back to the user-agent, but it can also be sent to an intermediate service, which can process the data and send it back to the user-agent.
//Get, Post, Put, Delete are the four most common HTTP methods.
//GET requests data from a specified resource
//POST submits data to be processed to a specified resource
//PUT updates a specified resource 
//DELETE deletes a specified resource

//express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: Request, res:Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})