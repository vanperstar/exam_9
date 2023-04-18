import express from "express"
import "./utils/sequalize.js"
import "./utils/sync.js"
import centerRouter from "./router/center.routes.js"
import adminRouter from "./router/admin.routes.js"
import depRouter from "./router/department.routes.js"
import dirRouter from "./router/directions.routes.js"
import posRouter from "./router/position.routes.js"
import grRouter from "./router/group.routes.js"
import userRouter from "./router/user.routes.js"
import checkRouter from "./router/check.routes.js"
import incRouter from "./router/incomes.routes.js"
import outRouter from "./router/outlay.routes.js"
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(centerRouter)
app.use(depRouter)
app.use(dirRouter)
app.use(posRouter)
app.use(grRouter)
app.use(userRouter)
app.use(checkRouter)
app.use(incRouter)
app.use(outRouter)
app.use("/admin",adminRouter)



app.listen(5000, () => console.log("server stardet 5000..."))