import { userRouter } from "./userRouter";
import { authRouter } from "./authRouter";
import { router } from "../trpc";

export const appRouter = router({
    authRouter,
    userRouter
})


export type AppRouter = typeof appRouter;