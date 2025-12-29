const BASE = `${import.meta.env.VITE_API_URL}/meals`;

function getToken() {
  return localStorage.getItem("token");
}

/* =========================
   ADD MEAL
========================= */
export async function addMeal(data) {
  const token = getToken();

  const res = await fetch(BASE, {
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
   GET MEALS BY DATE
========================= */
export async function getMealsByDate(date) {
  const token = getToken();

  const res = await fetch(`${BASE}?date=${date}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return { status: res.status, result: await res.json() };
}

/* =========================
   DELETE MEAL
========================= */
export async function deleteMeal(id) {
  const token = getToken();

  const res = await fetch(`${BASE}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return { status: res.status, result: await res.json() };
}
