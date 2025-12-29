// frontend/src/api/medicalDetailsApi.js

const BASE_URL = `${import.meta.env.VITE_API_URL}/medical-details`;

const getToken = () => localStorage.getItem("token");

/* =========================
   CREATE MEDICAL DETAILS
========================= */
export async function createMedicalDetails(data) {
  try {
    const token = getToken();

    if (!token) {
      return {
        status: 401,
        result: { success: false, message: "Not authenticated" }
      };
    }

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    return { status: response.status, result };

  } catch (error) {
    console.error("Error calling createMedicalDetails:", error);

    return {
      status: 500,
      result: { success: false, message: "Network error" }
    };
  }
}

/* =========================
   GET CURRENT USER DETAILS
========================= */
export async function getMyMedicalDetails() {
  try {
    const token = getToken();

    if (!token) {
      return {
        status: 401,
        result: { success: false, message: "Not authenticated" }
      };
    }

    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const result = await response.json();
    return { status: response.status, result };

  } catch (error) {
    console.error("Error calling getMyMedicalDetails:", error);

    return {
      status: 500,
      result: { success: false, message: "Network error" }
    };
  }
}
