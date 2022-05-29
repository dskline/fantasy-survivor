export type User = {
  email: string;
  password: string;
};

const admin: User = {
  email: "admin@test.com",
  password: "password",
};

const developer: User = {
  email: "developer@test.com",
  password: "password",
};

const contributor: User = {
  email: "contributor@test.com",
  password: "password",
};

export type UserRole = "admin" | "developer" | "contributor";

const users: { [key in UserRole]: User } = {
  admin,
  developer,
  contributor,
};

export default users;
