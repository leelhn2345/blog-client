export class AuthRequiredError extends Error {
  constructor(message = "Authentication is required.") {
    super(message);
    this.name = "AuthRequiredError";
  }
}

export class UnknownError extends Error {
  constructor(message = "Unknown Error") {
    super(message);
    this.name = "UnknownError";
  }
}
