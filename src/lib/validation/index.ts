import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Name is too short!'}),
    username: z.string().min(2, { message: 'Please choose a Username over 2 characters'}),
    email: z.string().email({ message: 'Email Address is too short, please use a valid email address'}),
    password: z.string().min(8, { message: 'Password too short, please use a minimum of 8 characters'}),
  })