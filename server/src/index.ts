import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express"
import { appRouter } from "./routers";
import cors from "cors";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true,
    
}))
app.use('/trpc', createExpressMiddleware({
    router: appRouter
}))


app.listen(8000, () => {
    console.log(`Server is running at PORT 8000`);
})

