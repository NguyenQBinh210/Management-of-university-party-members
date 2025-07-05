// src/controllers/supabaseControl.js
import { supabase } from "../model/supabase";

// ---- ĐẢNG VIÊN ----
export const getDangVien = async (page, pageSize, search = "") => {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;
  const query = supabase
    .from("dang_vien")
    .select("*", { count: "exact" })
    .range(from, to);

  if (search) {
    query.ilike("ho_ten", `%${search}%`);
  }
  const { data, error, count } = await query;
  return { data, error, count };
};

export const deleteDangVien = async (id) => {
  // Xóa đảng viên
  const { error } = await supabase
    .from("dang_vien")
    .delete()
    .eq("ma_dang_vien", id);
  // Xóa luôn tài khoản user tương ứng
  await supabase.from("users").delete().eq("username", id);
  return error;
};

export const updateDangVien = async (maDangVien, dangVienData) => {
  const { data, error } = await supabase
    .from("dang_vien")
    .update(dangVienData)
    .eq("ma_dang_vien", maDangVien)
    .select();
  return { data, error };
};

export const addDangVien = async (dangVienData) => {
  const { data: dangVienResult, error: dangVienError } = await supabase
    .from("dang_vien")
    .insert([dangVienData])
    .select()
    .single();

  if (dangVienError) {
    console.error("Error adding party member:", dangVienError);
    return { data: null, error: dangVienError };
  }

  if (dangVienResult) {
    const newUser = {
      username: dangVienResult.ma_dang_vien,
      password: "12345",
      role: "user",
      ma_dang_vien: dangVienResult.ma_dang_vien,
    };

    const { error: userError } = await supabase.from("users").insert([newUser]);
    if (userError) {
      console.error("Error creating user:", userError);
      await supabase
        .from("dang_vien")
        .delete()
        .eq("ma_dang_vien", dangVienResult.ma_dang_vien);
      return { data: null, error: userError };
    }
  }

  return { data: dangVienResult, error: null };
};

export const getLastDangVienId = async () => {
  const { data, error } = await supabase
    .from("dang_vien")
    .select("ma_dang_vien")
    .order("ma_dang_vien", { ascending: false })
    .limit(1);

  if (error || !data || data.length === 0) return "DV001";

  const lastId = data[0].ma_dang_vien;
  const number = parseInt(lastId.replace("DV", "")) + 1;
  return `DV${number.toString().padStart(3, "0")}`;
};

// ---- CHI BỘ ----
export const getChiBo = async (page = 1, pageSize = 9999, search = "") => {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const query = supabase
    .from("chi_bo")
    .select("*", { count: "exact" })
    .range(from, to);

  if (search) {
    query.ilike("ten_chi_bo", `%${search}%`);
  }

  const { data, error, count } = await query;
  return { data, error, count };
};

export const addChiBo = async (chiBoData) => {
  const { data, error } = await supabase
    .from("chi_bo")
    .insert([chiBoData])
    .select();
  return { data, error };
};

export const updateChiBo = async (maChiBo, chiBoData) => {
  const { data, error } = await supabase
    .from("chi_bo")
    .update(chiBoData)
    .eq("ma_chi_bo", maChiBo)
    .select();
  return { data, error };
};

export const deleteChiBo = async (maChiBo) => {
  const { error } = await supabase
    .from("chi_bo")
    .delete()
    .eq("ma_chi_bo", maChiBo);
  return error;
};

export const getLastChiBoId = async () => {
  const { data, error } = await supabase
    .from("chi_bo")
    .select("ma_chi_bo")
    .order("ma_chi_bo", { ascending: false })
    .limit(1);

  if (error || !data || data.length === 0) return "CB001";

  const lastId = data[0].ma_chi_bo;
  const number = parseInt(lastId.replace("CB", "")) + 1;
  return `CB${number.toString().padStart(3, "0")}`;
};

// ---- LỊCH TRÌNH ----
export const getLichTrinh = async (page = 1, pageSize = 9999, search = "") => {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const query = supabase
    .from("lich_trinh")
    .select(
      `
      *,
      chi_bo:ma_chi_bo (ten_chi_bo)
    `,
      { count: "exact" }
    )
    .range(from, to);

  if (search) {
    query.ilike("tieu_de", `%${search}%`);
  }

  const { data, error, count } = await query;
  return { data, error, count };
};

export const addLichTrinh = async (lichTrinhData) => {
  const { data, error } = await supabase
    .from("lich_trinh")
    .insert([lichTrinhData]).select(`
      *,
      chi_bo:ma_chi_bo (ten_chi_bo)
    `);
  return { data, error };
};

export const updateLichTrinh = async (lichTrinhId, lichTrinhData) => {
  const { data, error } = await supabase
    .from("lich_trinh")
    .update(lichTrinhData)
    .eq("lich_trinh_id", lichTrinhId)
    .select();
  return { data, error };
};

export const deleteLichTrinh = async (lichTrinhId) => {
  const { error } = await supabase
    .from("lich_trinh")
    .delete()
    .eq("lich_trinh_id", lichTrinhId);
  return error;
};

export const getLastLichTrinhId = async () => {
  const { data, error } = await supabase
    .from("lich_trinh")
    .select("lich_trinh_id")
    .order("lich_trinh_id", { ascending: false })
    .limit(1);

  if (error || !data || data.length === 0) return "LT001";

  const lastId = data[0].lich_trinh_id;
  const number = parseInt(lastId.replace("LT", "")) + 1;
  return `LT${number.toString().padStart(3, "0")}`;
};

// ---- GIẢI THƯỞNG ----
export const getGiaiThuong = async (page = 1, pageSize = 9999, search = "") => {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const query = supabase
    .from("giai_thuong")
    .select("*", { count: "exact" })
    .range(from, to);

  if (search) {
    query.ilike("noi_dung", `%${search}%`);
  }

  const { data, error, count } = await query;
  return { data, error, count };
};

export const addGiaiThuong = async (giaiThuongData) => {
  const { data, error } = await supabase
    .from("giai_thuong")
    .insert([giaiThuongData])
    .select();
  return { data, error };
};

export const updateGiaiThuong = async (giaiThuongId, giaiThuongData) => {
  const { data, error } = await supabase
    .from("giai_thuong")
    .update(giaiThuongData)
    .eq("giai_thuong_id", giaiThuongId)
    .select();
  return { data, error };
};

export const deleteGiaiThuong = async (giaiThuongId) => {
  const { error } = await supabase
    .from("giai_thuong")
    .delete()
    .eq("giai_thuong_id", giaiThuongId);
  return error;
};

export const getLastGiaiThuongId = async () => {
  const { data, error } = await supabase
    .from("giai_thuong")
    .select("giai_thuong_id")
    .order("giai_thuong_id", { ascending: false })
    .limit(1);

  if (error || !data || data.length === 0) return "GT001";

  const lastId = data[0].giai_thuong_id;
  const number = parseInt(lastId.replace("GT", "")) + 1;
  return `GT${number.toString().padStart(3, "0")}`;
};

// ---- ĐÁNH GIÁ TỔNG HỢP ----
export const getDanhGiaTongHop = async (page = 1, pageSize = 9999, search = "") => {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const query = supabase
    .from("danh_gia_tong_hop")
    .select(
      `
      *,
      dang_vien:ma_dang_vien (ho_ten)
    `,
      { count: "exact" }
    )
    .range(from, to);

  if (search) {
    query.ilike("dang_vien.ho_ten", `%${search}%`);
  }

  const { data, error, count } = await query;
  return { data, error, count };
};

export const addDanhGiaTongHop = async (danhGiaData) => {
  const { data, error } = await supabase
    .from("danh_gia_tong_hop")
    .insert([danhGiaData])
    .select(`
      *,
      dang_vien:ma_dang_vien (ho_ten)
    `);
  return { data, error };
};

export const updateDanhGiaTongHop = async (danhGiaId, danhGiaData) => {
  console.log("Updating danh gia with ID:", danhGiaId);
  console.log("Update data:", danhGiaData);
  
  const { data, error } = await supabase
    .from("danh_gia_tong_hop")
    .update(danhGiaData)
    .eq("danh_gia_id", danhGiaId)
    .select();
    
  if (error) {
    console.error("Supabase update error:", error);
  }
  
  return { data, error };
};

export const deleteDanhGiaTongHop = async (danhGiaId) => {
  const { error } = await supabase
    .from("danh_gia_tong_hop")
    .delete()
    .eq("danh_gia_id", danhGiaId);
  return error;
};

export const getLastDanhGiaId = async () => {
  const { data, error } = await supabase
    .from("danh_gia_tong_hop")
    .select("danh_gia_id")
    .order("danh_gia_id", { ascending: false })
    .limit(1);

  if (error || !data || data.length === 0) return "DG001";

  const lastId = data[0].danh_gia_id;
  const number = parseInt(lastId.replace("DG", "")) + 1;
  return `DG${number.toString().padStart(3, "0")}`;
};
