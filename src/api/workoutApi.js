const BASE_URL = `${import.meta.env.VITE_API_URL}/workouts`;

const getToken = () => localStorage.getItem("token");

/* =========================
   GET WORKOUT PLAN
========================= */
export async function getWorkoutPlan() {
  const res = await fetch(`${BASE_URL}/plan`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return { status: res.status, result: await res.json() };
}

/* =========================
   SAVE WORKOUT PLAN
========================= */
export async function saveWorkoutPlan(plan) {
  const res = await fetch(`${BASE_URL}/plan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify({ plan })
  });

  return { status: res.status, result: await res.json() };
}
