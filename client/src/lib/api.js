import axios from "axios";

const trimTrailingSlash = (value) => value.replace(/\/+$/, "");
const ensureLeadingSlash = (value) =>
  value.startsWith("/") ? value : `/${value}`;

const fallbackHost =
  typeof window !== "undefined"
    ? `${window.location.protocol}//${window.location.hostname}`
    : "http://localhost";

const apiOrigin = trimTrailingSlash(
  import.meta.env.VITE_API_URL || `${fallbackHost}:5001`
);
const socketOrigin = trimTrailingSlash(
  import.meta.env.VITE_SOCKET_URL || apiOrigin
);
const uploadsOrigin = trimTrailingSlash(
  import.meta.env.VITE_UPLOADS_URL || apiOrigin
);

export const API_ORIGIN = apiOrigin;
export const API_BASE_URL = `${apiOrigin}/api`;
export const SOCKET_URL = socketOrigin;
export const UPLOADS_BASE_URL = uploadsOrigin;

export const buildApiUrl = (path) => `${API_BASE_URL}${ensureLeadingSlash(path)}`;
export const buildUploadUrl = (path) =>
  `${UPLOADS_BASE_URL}${ensureLeadingSlash(path)}`;
export const buildProfilePictureUrl = (filename) =>
  filename
    ? buildUploadUrl(`/uploads/profile-pictures/${filename}`)
    : "/default-avatar.png";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
});
