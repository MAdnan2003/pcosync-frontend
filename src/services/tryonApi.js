import axios from "axios";

/**
 * Use environment backend URL in production
 * Fallback to localhost for development
 */
const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const virtualTryOn = async (userImageUrl, clothingImageUrl) => {
  const res = await axios.post(`${API_BASE}/tryon`, {
    userImageUrl,
    clothingImageUrl
  });

  return res.data.resultUrl;
};
