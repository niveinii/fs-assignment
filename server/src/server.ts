import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import articles from './articles/router'
import {data} from './datasource/data'

export function runServer(port) {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.set("trust proxy", true);
  const router = express.Router();

  router.get(
      "/",
      (req, res) => {
        res.send(data);
      }
  );
  app.use('/articles/',articles)
  app.use("/", router);

  app.listen(port, () => {
    console.log(`Server listener is up on port ${port} 🚀
             _     _
           /   \\ /   \\
          |     /     |
           \\ _ / \\ _ /
    `);
  });
}
