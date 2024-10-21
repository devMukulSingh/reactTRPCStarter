import { z } from "zod";


export const authSchema = z.object({
    name:z.string().min(1,{
        message:'req'
    }),
    email: z.string().min(1, {
        message: 'req'
    }),
    password: z.string().min(1, {
        message: 'req'
    })
})
