import api from "./apiConfig.js";

export const getCharities = async () => {
  try {
    const response = await api.get("/charity");
    return response.data;
  } catch (error) {
    console.error(`Failed to get charities - error: ${error}`);
    throw error;
  }
};

export const getCharity = async (id) => {
  try {
    const response = await api.get(`/charity/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get charity - error: ${error}`);
    throw error;
  }
}

export const createCharity = async (charity) => {
  try {
    const response = await api.post("/charity", charity);
    return response.data;
  } catch (error) {
    throw error;
  }
};
