export type User = {
  username: string;
  password: string;
  confirmPassword: string;
}

export type UserConnected = {
  id: string;
  token: string;
}

export type BlogAuthorProps = {
  date: Date;
  name: string;
}
