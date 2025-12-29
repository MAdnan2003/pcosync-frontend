const BASE_URL = `${import.meta.env.VITE_API_URL}/mood`;

const getToken = () => localStorage.getItem("token");

/* =========================
   GET MOOD BY DATE
========================= */
export async function getMoodByDate(date) {
  const token = getToken();

  const res = await fetch(`${BASE_URL}?date=${date}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const result = await res.json();
  return { status: res.status, result };
}

/* =========================
   SAVE MOOD ENTRY
========================= */
export async function saveMoodEntry(payload) {
  const token = getToken();

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  });

  const result = await res.json();
  return { status: res.status, result };
}
