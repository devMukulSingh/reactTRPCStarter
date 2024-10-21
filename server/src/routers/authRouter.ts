import { z } from "zod";
import { prisma } from "../lib/prisma";
import { authSchema } from "../lib/schema";
import { publicProcedure, router } from "../trpc";


export const authRouter = router({
    createUser: publicProcedure.input(authSchema).mutation(async ({ input }) => {
        const { email, name, password } = input;
        const newUser = await prisma.user.create({
            data: input
        })
        return newUser;
    }),

    getUser: publicProcedure.input(z.object({ id: z.string() })).query(async ({ input }) => {

        const user = await prisma.user.findFirst({
            where: {
                id: input.id
            }
        })

        return user;
    })
})