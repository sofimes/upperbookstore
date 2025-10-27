import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "password must be 8 characters and more"),
});

export const signUpSchema = z.object({
  fullName: z.string(),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be 8 characters and more"),
});
