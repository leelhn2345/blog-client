"use server";

type UserLoginCreds = {
  username: string;
  password: string;
};

export async function loginUser({
  username,
  password,
}: UserLoginCreds): Promise<unknown> {
  try {
    console.log(username);
    console.log(password);
    const res = await fetch(`${process.env.BACKEND_URL}/login`, {
      method: "POST",
    });
    return res.json();
  } catch (_) {
    throw new Error();
  }
}

type NewUserCreds = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
};

export async function registerUser({
  username,
  password,
  firstName,
  lastName,
}: NewUserCreds): Promise<unknown> {
  try {
    console.log(username);
    console.log(password);
    console.log(firstName);
    console.log(lastName);
    const res = await fetch(`${process.env.BACKEND_URL}/register`, {
      method: "POST",
    });
    return res.json();
  } catch (_) {
    throw new Error();
  }
}
