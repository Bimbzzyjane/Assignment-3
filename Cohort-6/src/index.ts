import { Request, RequestHandler, Response } from "express"
import express from "express"
import connect from "./database/connect"
import cors from "cors"
import router from "./routes"
const app = express()
const port = 3000

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
//app.use(morgan("tiny ")) // logging middleware
app.disable("x-powered-by") // disable x-powered-by header
app.use("/api/v1", router) // use the router for all routes that start with /api/v1

/*READ
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
});*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connect();
});
// export default app; (removed duplicate export)

var corOptions = {
  origin : "'",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  setHeaders: function (res:Response, path:string, stat:any) {
    res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  },
}
app.use(cors(corOptions))
export default app;
// This code sets up an Express.js server with CORS (Cross-Origin Resource Sharing) support. 
// It listens on port 3000 and connects to a MongoDB database using Mongoose. The server is configured to handle JSON and
//  URL-encoded request bodies, and it uses a router for API versioning. The CORS options allow specific HTTP methods and headers, 
// and set cache control headers for responses.