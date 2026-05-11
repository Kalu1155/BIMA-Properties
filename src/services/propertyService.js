import { apiRequest } from "@/lib/api";

// GET ALL PROPERTIES
export const getProperties = async () => {
  return await apiRequest("/properties");
};

// CREATE PROPERTY
export const createProperty = async (formData) => {
  return await apiRequest(
    "/properties",
    "POST",
    formData
  );
};

// SINGLE PROPERTY
export const getSingleProperty = async (id) => {
  return await apiRequest(`/properties/${id}`);
};