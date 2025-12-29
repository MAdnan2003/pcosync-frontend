const API_BASE = `${import.meta.env.VITE_API_URL}/forum`;

function getToken() {
  return localStorage.getItem("token");
}

/* =========================
   LIST POSTS
========================= */
export async function listPosts({ q = "", tag = "" } = {}) {
  const token = getToken();

  const params = new URLSearchParams();
  if (q) params.append("q", q);
  if (tag) params.append("tag", tag);

  const res = await fetch(`${API_BASE}/posts?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const result = await res.json();
  return { status: res.status, result };
}

/* =========================
   CREATE POST
========================= */
export async function createPost(payload) {
  const token = getToken();

  const res = await fetch(`${API_BASE}/posts`, {
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

/* =========================
   GET SINGLE POST
========================= */
export async function getPost(postId) {
  const token = getToken();

  const res = await fetch(`${API_BASE}/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const result = await res.json();
  return { status: res.status, result };
}

/* =========================
   ADD COMMENT
========================= */
export async function addComment(postId, payload) {
  const token = getToken();

  const res = await fetch(`${API_BASE}/posts/${postId}/comments`, {
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
