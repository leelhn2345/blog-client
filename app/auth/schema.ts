import { z } from "zod";

export const loginFormSchema = z.object({
  username: z.string().email("Invalid email format"),
  password: z.string(),
  staysLoggedIn: z.boolean(),
});

export type LoginCreds = z.infer<typeof loginFormSchema>;

export const newUserFormSchema = z
  .object({
    username: z.string().email("Invalid email format"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(20, "Password must be at most 20 characters long")
      .regex(
        /[!@#$%^&*~(),.?":{}|<>]/,
        "Password must contain at least one special character",
      )
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
    confirmPassword: z.string(),
    firstName: z.string().min(1, "first name is required"),
    lastName: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type NewUserCreds = z.infer<typeof newUserFormSchema>;
