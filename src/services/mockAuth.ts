
// All mock/localStorage logic removed. Replace with real API calls when backend is ready.

// TODO: Implement real signup API call
export async function signup(email: string, password: string) {
  // Example placeholder
  // await fetch('/api/signup', { method: 'POST', body: JSON.stringify({ email, password }) });
  throw new Error('Signup not implemented. Connect to backend.');
}

// TODO: Implement real login API call
export async function login(email: string, password: string) {
  // Example placeholder
  // await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) });
  throw new Error('Login not implemented. Connect to backend.');
}

// TODO: Implement real Google login API call
export async function loginWithGoogle() {
  // Example placeholder
  // await fetch('/api/login/google', { method: 'POST' });
  throw new Error('Google login not implemented. Connect to backend.');
}

export function logout() {
  // TODO: Implement real logout logic
}

export function isAuthenticated() {
  // TODO: Implement real auth check
  return false;
}
