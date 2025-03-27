import Layout from "./components/layout.js";
import {
  getLocalStorageItem,
  removeLocalStorageItem,
} from "./utils/stroage.js";
import { attachLoginHandler } from "./login.js";
import { profileConfimHandler } from "./components/ProfilePage.js";

import { auth } from "./store/user.js";
import { App } from "./app.js";

// popstate 이벤트로 뒤/앞 이동 지원
window.addEventListener("popstate", () => {
  render();
});

export const render = () => {
  const root = document.getElementById("root");
  if (!root) return;

  // ✅ 로그인 상태 동기화
  auth.loggedIn = !!getLocalStorageItem("user");
  auth.user = getLocalStorageItem("user") || null;

  // ✅ 페이지 콘텐츠 가져오기
  const pageContent = App(); // ex) LoginPage(), HomePage() 등

  // ✅ 페이지 렌더링
  root.innerHTML = Layout(pageContent);

  // ✅ 모든 링크에 SPA 라우팅 적용
  // document.querySelectorAll("a").forEach((el) => {
  //   el.addEventListener("click", (e) => {
  //     e.preventDefault();
  //     const newPath = e.target.href.replace(location.origin, "");
  //     history.pushState(null, "", newPath);
  //     render();
  //   });
  // });
  document.addEventListener("click", (e) => {
    const target = e.target.closest("a");
    if (!target || !target.getAttribute("href")) return;

    // ❗ 이벤트 전파가 막혔다면 라우팅 중단
    if (e.defaultPrevented) return;

    e.preventDefault();
    const newPath = target.getAttribute("href");
    history.pushState(null, "", newPath);
    render();
  });

  // ✅ 로그인 핸들러 연결
  if (location.pathname === "/login") {
    attachLoginHandler();
  }

  // ✅ 프로필 수정 핸들러 연결
  if (location.pathname === "/profile") {
    profileConfimHandler();
  }

  // ✅ 로그아웃 버튼 핸들러 연결
  const logoutBtn = document.getElementById("logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      removeLocalStorageItem("user");
      auth.loggedIn = false;
      auth.user = null; // ✅ 이 줄 추가!
      history.pushState(null, "", "/login");
      render();
    });
  }
};

// 최초 렌더링
render();
