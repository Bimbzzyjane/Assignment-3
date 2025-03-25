import { Request, RequestHandler, Response } from "express"
import express from "express"
import connect from "./database/connect"
const app = express()
const port = 3000

//READ
app.get ('/', (req, res) => {
  res.send('Hello World!');
})

//CREATE
app.post ('/api/v1', (req, res) => {
  const [name, email] = req.body;
  res.status(201).json({name, email});// The status code for create is 201
});

//UPDATE
app.put ('/api/v1/user/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({id}); // The status code for update is 200. 200 means OK
});

//DELETE
app.delete ('/api/v1/user/:id', (req, res) => {
  const { id } = req.params;
  res.status(200).json({id}); // The status code for delete is 200. 200 means OK
});
//other status code are 400 for bad request, 404 for not found, 500 for internal server error, 403 for forbidden, 401 for unauthorized

app.get('/api/v1/user', (req, res) => {
  const { category, isActive } = req.query;
  res.status(200).json({category, isActive});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connect();
})  
export default app; //exporting the app to be used in other files
