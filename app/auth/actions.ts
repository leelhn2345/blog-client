"use server";

type UserLoginCreds = {
  username: string;
  password: string;
};

export async function loginUser(userLoginCreds: UserLoginCreds) {
  const res = await fetch(`${process.env.BACKEND_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLoginCreds),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }
}

type NewUserCreds = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
};

export async function registerUser(newUserCreds: NewUserCreds) {
  const z = {
    accountDetails: {
      username: newUserCreds.username,
      password: newUserCreds.password,
    },
    firstName: newUserCreds.firstName,
    lastName: newUserCreds.lastName,
  };
  const res = await fetch(`${process.env.BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(z),
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message);
  }
}
