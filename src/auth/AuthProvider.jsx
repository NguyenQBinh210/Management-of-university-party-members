import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../model/supabase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Khi ứng dụng tải, kiểm tra xem có thông tin người dùng trong localStorage không
    try {
      const userString = localStorage.getItem("app_user");
      if (userString) {
        const userData = JSON.parse(userString);
        setUser(userData);
        setRole(userData.role);
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      setUser(null);
      setRole(null);
      localStorage.removeItem("app_user");
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    const { data, error } = await supabase
      .from("users")
      .select("user_id, username, role, password")
      .eq("username", username)
      .single();

    if (error) {
      console.error("Error fetching user", error);
      throw new Error("Tài khoản hoặc mật khẩu không đúng.");
    }

    if (data && data.password === password) {
      const userData = {
        user_id: data.user_id,
        username: data.username,
        role: data.role,
      };
      localStorage.setItem("app_user", JSON.stringify(userData));
      setUser(userData);
      setRole(data.role);
      return userData;
    } else {
      throw new Error("Tài khoản hoặc mật khẩu không đúng.");
    }
  };

  const signOut = () => {
    localStorage.removeItem("app_user");
    setUser(null);
    setRole(null);
  };

  const value = {
    user,
    role,
    loading,
    login,
    signOut,
  };

  // Không render gì cho đến khi kiểm tra localStorage xong
  if (loading) {
    return <div>Loading...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}; 