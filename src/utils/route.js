// utils/route.js
export const getCurrentPath = () => {
  const hash = location.hash;
  if (hash) {
    return hash.replace("#", "") || "/";
  }
  return location.pathname;
};

// 현재 라우터 방식에 따라 prefix 결정 (해시 라우터면 "#", 아니면 "")
export const pathPrefix = () => {
  return location.hash ? "#" : "";
};
