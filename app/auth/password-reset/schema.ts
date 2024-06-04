import { z } from "zod";

export const passwordResetSchema = z
  .object({
    newPassword: z
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
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type NewPasswordForm = z.infer<typeof passwordResetSchema>;
