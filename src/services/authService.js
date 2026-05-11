import { apiRequest } from "@/lib/api";

// LOGIN
export const loginMerchant = async (formData) => {
  return await apiRequest(
    "/merchants/login",
    "POST",
    formData
  );
};

// REGISTER
export const registerMerchant = async (formData) => {
  return await apiRequest(
    "/merchants",
    "POST",
    formData
  );
};