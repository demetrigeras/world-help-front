import api from "./apiConfig.js";

export const getPledges = async () => {
  try {
    const response = await api.get("/pledges");
    return response.data;
  } catch (error) {
    console.error(`Failed to get pledges - error: ${error}`);
    throw error;
  }
};

export const createPledge = async (pledge) => {
    try {
      const response = await api.post("/pledges", pledge);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const updatePledge = async (id, update) => {
    try {
      const response = await api.put(`/pledges/${id}`, update);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const deletePledge = async (id) => {
    try {
      const response = await api.delete(`/pledges/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };