import {z} from 'zod'

export const usernameValidation = z
.string()
.min(2,"UserName must be atleast 2 characters")
.max(20,"UserName must be no more than 20 characters")
.regex(/^[a-zA-z0-9]+$/,"Username must not contain special character")

export const signUpSchema = z.object({
    user: usernameValidation,
    email: z.string().email({message:'Invalid email address'}),
    password: z.string().min(6,{message:'password must be atleat 6 characters'})
})
