const express = require("express");
require("./db/mongoose.js");
const userRouter = require("./routes/user-route.js");
const taskRouter = require("./routes/task-route.js");

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));