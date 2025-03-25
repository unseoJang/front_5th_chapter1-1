import { LoginPage, attachLoginHandler } from "./login.js";
import { ProfilePage, profileConfimHandler } from "./components/ProfilePage.js";
import { HomePage } from "./components/HomePage.js";
import { NotFoundPage } from "./components/NotFoundPage.js";

export const state = {
  loggedIn: localStorage.getItem("user") ? true : false,
  user: localStorage.getItem("user"),
};

// 페이지 렌더링
const App = () => {
  if (location.pathname.includes("/login")) {
    return LoginPage();
  }
  if (location.pathname.includes("/profile")) {
    if (state.loggedIn === false) {
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

// 뒤로가기, 앞으로가기
window.addEventListener("popstate", () => {
  render();
});

// 페이지 이동
export const render = () => {
  // ✅ 변경
  const root = document.getElementById("root");
  if (!root) return;

  // ✅ localStorage 기반으로 상태 동기화
  const storedUser = localStorage.getItem("user");
  state.loggedIn = !!storedUser;

  root.innerHTML = App();

  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const newPathName = e.target.href.replace(location.origin, "");
      console.log("newPathName=>", newPathName);
      history.pushState(null, "", newPathName);
      render();
    });

    // ✅ 로그인 이벤트 핸들러 연결
    if (location.pathname === "/login") {
      attachLoginHandler();
    }

    if (location.pathname === "/profile") {
      profileConfimHandler(); // ✅ 여기서 꼭 실행
    }

    // ✅ 로그아웃 버튼 이벤트 등록
    const logoutBtn = document.getElementById("logout");
    if (logoutBtn) {
      logoutBtn?.addEventListener("click", (e) => {
        e.preventDefault();
        // localStorage 및 state 초기화
        localStorage.removeItem("user");
        localStorage.removeItem("loggedIn");

        state.loggedIn = false;
        history.pushState(null, "", "/");
        render();
      });
    }
  });
};

render();
