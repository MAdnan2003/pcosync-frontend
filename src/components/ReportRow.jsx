export default function ReportRow({ report, refresh }) {
  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const token = localStorage.getItem("token");

  const statusStyles = {
    pending: "bg-pink-100 text-pink-900",
    reviewing: "border border-pink-400 text-pink-600",
    resolved: "bg-green-100 text-green-700",
  };

  const priorityStyles = {
    high: "bg-red-500 text-white",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-pink-100 text-gray-900",
  };

  const authHeaders = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const setReview = async () => {
    await fetch(`${API_URL}/reports/${report._id}/review`, {
      method: "PUT",
      headers: authHeaders,
    });
    refresh();
  };

  const resolveReport = async () => {
    await fetch(`${API_URL}/reports/${report._id}/resolve`, {
      method: "PUT",
      headers: authHeaders,
    });
    refresh();
  };

  const deleteReport = async () => {
    await fetch(`${API_URL}/reports/${report._id}`, {
      method: "DELETE",
      headers: authHeaders,
    });
    refresh();
  };

  return (
    <tr className="border-b border-pink-100">
      <td className="py-4">{report.type}</td>
      <td>{report.reportedBy}</td>
      <td>{report.content}</td>

      <td>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[report.status]}`}
        >
          {report.status}
        </span>
      </td>

      <td>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityStyles[report.priority]}`}
        >
          {report.priority}
        </span>
      </td>

      <td>{new Date(report.date).toLocaleString()}</td>

      <td className="text-right space-x-3">
        <button
          onClick={setReview}
          className="px-4 py-2 rounded-lg border border-pink-200 bg-pink-50 text-gray-800"
        >
          Review
        </button>

        <button
          onClick={resolveReport}
          className="px-4 py-2 rounded-lg bg-[#E92063] text-white"
        >
          Resolve
        </button>

        <button
          onClick={deleteReport}
          className="px-4 py-2 rounded-lg bg-red-500 text-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
