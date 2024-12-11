export type UserRole = 'user' | 'officer' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface SignUpData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}