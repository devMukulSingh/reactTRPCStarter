import { prisma } from "../lib/prisma";
import { publicProcedure, router } from "../trpc";


export const userRouter = router({
    userList: publicProcedure.query(async () => {
        const users = await prisma.user.findMany();
        return users
    })
})

export type AppRouter = typeof userRouter;
