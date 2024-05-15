/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REACT_APP_API_URL:
      process.env.REACT_APP_API_URL || "http://localhost:5000/",
  },
};

export default nextConfig;
