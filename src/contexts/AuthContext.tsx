"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type User = {
  id: string;
  email: string;
  name: string;
  company?: string;
  phone?: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name: string, company?: string) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
  isAuthenticated: boolean;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedUser = localStorage.getItem("redstone-user");
      if (savedUser) {
        try {
          setUser(JSON.parse(savedUser));
        } catch (error) {
          console.error("Error loading user from localStorage:", error);
        }
      }
      setIsLoading(false);
    }
  }, []);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (user) {
        localStorage.setItem("redstone-user", JSON.stringify(user));
      } else {
        localStorage.removeItem("redstone-user");
      }
    }
  }, [user]);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication - in production, this would call an API
    // For demo purposes, accept any email/password combination
    if (email && password) {
      const mockUser: User = {
        id: `user-${Date.now()}`,
        email,
        name: email.split("@")[0],
        company: "Demo Company",
      };
      setUser(mockUser);
      return true;
    }
    return false;
  };

  const signup = async (
    email: string,
    password: string,
    name: string,
    company?: string
  ): Promise<boolean> => {
    // Mock signup - in production, this would call an API
    if (email && password && name) {
      const newUser: User = {
        id: `user-${Date.now()}`,
        email,
        name,
        company,
      };
      setUser(newUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (updates: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...updates });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        updateProfile,
        isAuthenticated: !!user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

