type User = {
  id: string;
  email: string;
  password: string;
};

const USERS_KEY = "some";
const TOKEN_KEY = "123456789";

function getUsers(): User[] {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

function saveUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

// GLOBAL ACCOUNT VARIABLE
export let account: number | undefined = undefined;

export function signup(email: string, password: string) {
  // Only allow the test email
  if (email !== "anybodypass@gmail.com") {
    throw new Error("Only 'anybodypass@gmail.com' is allowed for signup");
  }
  if (password !== "123456789") {
    throw new Error("Password must be '123456789'");
  }
  // Set global account for this user
  account = 1000.0;
  localStorage.setItem("account", account.toString());

  const users = getUsers();
  if (users.find(u => u.email === email)) {
    throw new Error("User already exists");
  }
  const user = {
    id: crypto.randomUUID(),
    email,
    password,
  };
  users.push(user);
  saveUsers(users);
  localStorage.setItem(TOKEN_KEY, "mock-jwt-token");
  return user;
}

export function login(email: string, password: string) {
  // Only allow the test email
  if (email !== "anybodypass@gmail.com" || password !== "123456789") {
    throw new Error("Invalid credentials");
  }
  // Set global account for this user
  account = 1000.0;
  localStorage.setItem("account", account.toString());

  const users = getUsers();
  const user = users.find(
    u => u.email === email && u.password === password
  );
  if (!user) {
    throw new Error("Invalid credentials");
  }
  localStorage.setItem(TOKEN_KEY, "mock-jwt-token");
  return user;
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {
  return Boolean(localStorage.getItem(TOKEN_KEY));
}
