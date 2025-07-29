import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("accessToken");
  const currentPath = window.location.pathname;

  if (token && !currentPath.includes("dashboard")) {
    window.location.href = "/dashboard/dashboard.html";
  } else if (!token && !currentPath.includes("login")) {
    window.location.href = "/login/login.html";
  }
});
