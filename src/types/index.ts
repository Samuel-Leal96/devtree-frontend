export type User = {
  handle: string;
  name: string;
  email: string;
};

export type RegisterFormData = Pick<User, "handle" | "name" | "email"> & {
  password: string;
  password_confirmation: string;
};
