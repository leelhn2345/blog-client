import { PasswordResetForm } from "./password-reset-form";
import { NewPasswordForm } from "./schema";

/**
 * error http status if token has expired.
 * returns false if no longer valid
 */
async function checkTokenValidity(resetToken: string) {
  const queryParams = new URLSearchParams({
    resetToken,
  });
  const res = await fetch(
    `${process.env.BACKEND_URL}/user/password/reset?${queryParams}`,
    {
      cache: "no-store",
    },
  );
  if (!res.ok) return false;
  return true;
}

async function submitNewPassword(resetToken: string, form: NewPasswordForm) {
  "use server";
  const queryParams = new URLSearchParams({
    resetToken,
    newPassword: form.newPassword,
  });
  const res = await fetch(
    `${process.env.BACKEND_URL}/user/password/reset-confirm?${queryParams}`,
    {
      method: "POST",
    },
  );
  if (!res.ok) {
    const err = await res.json();
    return { error: err.message as string };
  }
}

type PageProps = {
  searchParams: {
    reset: string;
  };
};

export default async function PasswordResetPage({ searchParams }: PageProps) {
  const { reset: resetToken } = searchParams;
  const valid = await checkTokenValidity(resetToken);
  return (
    <div className="container mt-20 max-w-[400px]">
      {valid ? (
        <PasswordResetForm
          resetToken={resetToken}
          submitNewPassword={submitNewPassword}
        />
      ) : (
        <div className="text-xl">link has expired</div>
      )}
    </div>
  );
}
