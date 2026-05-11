import { apiRequest } from "@/lib/api";

// GET AGENTS
export const getAgents = async () => {
  return await apiRequest("/agents");
};

// CREATE AGENT
export const createAgent = async (formData) => {
  return await apiRequest(
    "/agents",
    "POST",
    formData
  );
};

// SINGLE AGENT
export const getSingleAgent = async (id) => {
  return await apiRequest(`/agents/${id}`);
};