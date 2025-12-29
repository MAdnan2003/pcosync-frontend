const BASE = `${import.meta.env.VITE_API_URL}/water`;

function getToken() {
  return localStorage.getItem("token");
}

/* =========================
   GET WATER SETTINGS
========================= */
export async function getWaterSettings() {
  const token = getToken();

  const res = await fetch(`${BASE}/settings`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return { status: res.status, result: await res.json() };
}

/* =========================
   UPDATE WATER SETTINGS
========================= */
export async function updateWaterSettings(data) {
  const token = getToken();

  const res = await fetch(`${BASE}/settings`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  return { status: res.status, result: await res.json() };
}

/* =========================
   LOG WATER INTAKE
========================= */
export async function logWater(data) {
  const token = getToken();

  const res = await fetch(`${BASE}/log`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });

  return { status: res.status, result: await res.json() };
}

/* =========================
   DAILY SUMMARY
========================= */
export async function getWaterSummary(date) {
  const token = getToken();

  const res = await fetch(`${BASE}/summary?date=${date}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return { status: res.status, result: await res.json() };
}
