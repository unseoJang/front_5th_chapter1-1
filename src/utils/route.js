// utils/route.js
export const getCurrentPath = () => {
  const hash = location.hash;

  if (hash.startsWith("#/")) {
    return hash.slice(1); // "/login", "/profile"
  }

  // GitHub Pages base path에서도 "/"로 인식되도록
  const isGitHubBase =
    location.pathname === "/front_5th_chapter1-1/" ||
    location.pathname === "/front_5th_chapter1-1/index.html";

  if (isGitHubBase && !hash) {
    return "/";
  }

  // 잘못된 경로 → 라우터에선 404로 처리
  return null;
};

// 현재 라우터 방식에 따라 prefix 결정 (해시 라우터면 "#", 아니면 "")
export const pathPrefix = () => {
  return location.hash ? "#" : "";
};
