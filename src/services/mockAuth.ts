
// All mock/localStorage logic removed. Replace with real API calls when backend is ready.

export async function signup(email: string, password: string) {
  const res = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    if (res.status === 409) {
      throw new Error('Email already exists. Please try to log in.');
    }
    const errorData = await res.json();
    throw new Error(errorData.errors?.email || errorData.errors?.password || 'Signup failed');
  }
  return await res.json();
}

export async function login(email: string, password: string) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    if (res.status === 404) {
      throw new Error('User not found. Please sign up.');
    }
    if (res.status === 401) {
      throw new Error('Incorrect password.');
    }
    const errorData = await res.json();
    throw new Error(errorData.message || 'Login failed');
  }
  return await res.json();
}

// TODO: Implement real Google login API call
export async function loginWithGoogle() {
  // Example placeholder
  // await fetch('/api/login/google', { method: 'POST' });
  throw new Error('Google login not implemented. Connect to backend.');
}

export async function logout() {
  await fetch('/api/auth/logout', { method: 'POST' });
}

export function isAuthenticated() {
  return document.cookie.includes('authToken');
}
