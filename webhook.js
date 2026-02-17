import express from "express";
import { exec } from "child_process";

const app = express();

app.use(express.json());

app.post("/deploy", (req, res) => {
  console.log("Webhook received");

  exec("./deploy.sh", (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return res.send("Error in deployment");
    }

    console.log(stdout);
    res.send("Deployment Done");
  });
});

app.listen(3000, () => {
  console.log("Webhook running on port 3000");
});

