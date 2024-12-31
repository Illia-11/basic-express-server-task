const express = require("express");
const rootRouter = require("./routers");
const app = express();

const bodyParser = express.json();
app.use(bodyParser);

app.use(rootRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server's port: ${PORT}`);
});
