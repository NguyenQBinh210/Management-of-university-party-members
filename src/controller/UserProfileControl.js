import { supabase } from "../model/supabase";

// Lấy thông tin cá nhân
export const getUserProfile = async (ma_dang_vien) => {
  return await supabase.from("dang_vien").select("*").eq("ma_dang_vien", ma_dang_vien).single();
};

// Lấy danh hiệu/giải thưởng
export const getUserGiaiThuong = async (ma_dang_vien) => {
  return await supabase.from("giai_thuong").select("*").eq("ma_dang_vien", ma_dang_vien);
};

// Lấy thông tin chi bộ
export const getUserChiBo = async (ma_dang_vien) => {
  const { data: dv } = await supabase.from("dang_vien").select("ma_chi_bo").eq("ma_dang_vien", ma_dang_vien).single();
  if (!dv) return { data: null, error: "Không tìm thấy chi bộ" };
  return await supabase.from("chi_bo").select("*").eq("ma_chi_bo", dv.ma_chi_bo).single();
};

// Lấy lịch trình của chi bộ
export const getLichTrinhByChiBo = async (ma_chi_bo) => {
  return await supabase.from("lich_trinh").select("*").eq("ma_chi_bo", ma_chi_bo);
}; 