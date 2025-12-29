const API_URL = import.meta.env.VITE_API_URL;
const BASE_URL = `${API_URL}/cycles`;

const getToken = () => localStorage.getItem("token");

/* =========================
   GET USER LOGS
========================= */
export async function getCycleLogs() {
  const res = await fetch(BASE_URL, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return res.json();
}

/* =========================
   CREATE / UPDATE LOG
========================= */
export async function saveCycleLog(data) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

/* =========================
   GET CYCLE STATS
========================= */
export async function getCycleStats() {
  const res = await fetch(`${BASE_URL}/stats`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return res.json();
}
