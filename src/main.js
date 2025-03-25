import {
  getLocalStorageItem,
  removeLocalStorageItem,
} from "./utils/stroage.js";
import { LoginPage, attachLoginHandler } from "./login.js";
import { ProfilePage, profileConfimHandler } from "./components/ProfilePage.js";
import { HomePage } from "./components/HomePage.js";
import { NotFoundPage } from "./components/NotFoundPage.js";
import { auth } from "./store/user.js";

// 페이지 렌더링
const App = () => {
  if (location.pathname.includes("/login")) {
    return LoginPage();
  }
  if (location.pathname.includes("/profile")) {
    if (!auth.loggedIn) {
      return LoginPage();
    } else {
      return ProfilePage();
    }
  }
  if (location.pathname === "/") {
    return HomePage();
  }
  return NotFoundPage();
};

// popstate 이벤트로 뒤/앞 이동 지원
window.addEventListener("popstate", () => {
  render();
});

export const render = () => {
  const root = document.getElementById("root");
  if (!root) return;

  // ✅ 로그인 상태 동기화
  auth.loggedIn = !!getLocalStorageItem("user");

  // ✅ 페이지 렌더링
  root.innerHTML = App();

  // ✅ 모든 링크에 SPA 라우팅 적용
  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const newPath = e.target.href.replace(location.origin, "");
      history.pushState(null, "", newPath);
      render();
    });
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
      history.pushState(null, "", "/");
      render();
    });
  }
};

// 최초 렌더링
render();
