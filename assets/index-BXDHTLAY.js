(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const l of e)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const l={};return e.integrity&&(l.integrity=e.integrity),e.referrerPolicy&&(l.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?l.credentials="include":e.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(e){if(e.ep)return;e.ep=!0;const l=s(e);fetch(e.href,l)}})();const b=()=>"/front_5th_chapter1-1/".replace(/\/$/,""),f=()=>{const t=location.hash;return t?t.replace("#","")||"/":location.pathname.replace(b(),"")||"/"},i=()=>location.hash?"#":b(),g=({loggedIn:t}={})=>{const o=f(),s=t?`
        <li>
					<a href="${i()}/profile" id="profile-route" class="${o==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a>
				</li>
        <li>
					<a href="${i()}/" id="logout" class="text-gray-600">로그아웃</a>
				</li>
      `:`<li><a href="${i()}/login" id="login-route" class="text-gray-600">로그인</a></li>`;return`
    <header class="bg-blue-600 text-white p-4 sticky top-0">
      <h1 class="text-2xl font-bold">항해플러스</h1>
    </header>

    <nav class="bg-white shadow-md p-2 sticky top-14">
      <ul class="flex justify-around">
        <li>
					<a href="${i()}/" id="home-route" class="${location.pathname==="/"||location.pathname==="/front_5th_chapter1-1/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a>
				</li>
        ${s}
      </ul>
    </nav>
  `},h=`
   <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`;function u(t){const o=localStorage.getItem(t);if(!o)return null;try{return JSON.parse(o)}catch{return null}}function m(t,o){return localStorage.setItem(t,JSON.stringify(o))}function v(t){return localStorage.removeItem(t)}const r={user:u("user"),isLoggedIn:!!u("user")},x=t=>{const o=t.includes('id="login-form"'),s=t.includes("404"),n=o||s;return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${n?"":g({loggedIn:r.loggedIn})}
        ${t}
        ${n?"":h}
      </div>
    </div>
  `},y=()=>{const t=document.getElementById("login-form");t&&t.addEventListener("submit",o=>{o.preventDefault();const s=t.querySelector("#username").value;if(s){const n={username:s,email:"",bio:""};m("user",n),m("loggedIn","true"),r.loggedIn=!0,r.loggedIn=!0,r.username=s,r.user=n,history.pushState(null,"","/"),d()}})},p=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
      <form id="login-form">
        <div class="mb-4">
          <input type="text" id="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
        </div>
        <div class="mb-6">
          <input type="password" id="password" placeholder="비밀번호" class="w-full p-2 border rounded">
        </div>
        <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
      </form>
      <div class="mt-4 text-center">
        <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
      </div>
      <hr class="my-6">
      <div class="text-center">
        <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
      </div>
    </div>
  </main>
`,w=()=>{var t;(t=document.getElementById("profile-form"))==null||t.addEventListener("submit",async o=>{o.preventDefault(),console.log("✅ 이벤트 핸들러 등록됨");const s={username:document.getElementById("username").value,email:document.getElementById("email").value,bio:document.getElementById("bio").value.trim()};console.log("🔧 저장할 user 값:",s),m("user",s),r.user={...s},history.pushState(null,"","/profile"),d(),document.body.dataset.rendered="true"})},I=()=>{const t=r.user||{username:"",email:"",bio:""};return document.body.dataset.rendered="false",`
    <main class="p-4" role="main">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
          내 프로필
        </h2>
        <form id="profile-form">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
            <input type="text" id="username" name="username" value="${t.username}" class="w-full p-2 border rounded" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
            <input type="email" id="email" name="email" value="${t.email||""}" class="w-full p-2 border rounded" />
          </div>
          <div class="mb-6">
            <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
            <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">${t.bio.trim()}</textarea>
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
        </form>
      </div>
    </main>
  `},c=()=>`
			<main class="p-4">
				<div class="mb-4 bg-white rounded-lg shadow p-4">
					<textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
					<button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
				</div>

				<div class="space-y-4">

					<div class="bg-white rounded-lg shadow p-4">
						<div class="flex items-center mb-2">
							<img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
							<div>
								<p class="font-bold">홍길동</p>
								<p class="text-sm text-gray-500">5분 전</p>
							</div>
						</div>
						<p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
						<div class="mt-2 flex justify-between text-gray-500">
							<button>좋아요</button>
							<button>댓글</button>
							<button>공유</button>
						</div>
					</div>

					<div class="bg-white rounded-lg shadow p-4">
						<div class="flex items-center mb-2">
							<img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
							<div>
								<p class="font-bold">김철수</p>
								<p class="text-sm text-gray-500">15분 전</p>
							</div>
						</div>
						<p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
						<div class="mt-2 flex justify-between text-gray-500">
							<button>좋아요</button>
							<button>댓글</button>
							<button>공유</button>
						</div>
					</div>

					<div class="bg-white rounded-lg shadow p-4">
						<div class="flex items-center mb-2">
							<img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
							<div>
								<p class="font-bold">이영희</p>
								<p class="text-sm text-gray-500">30분 전</p>
							</div>
						</div>
						<p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
						<div class="mt-2 flex justify-between text-gray-500">
							<button>좋아요</button>
							<button>댓글</button>
							<button>공유</button>
						</div>
					</div>

					<div class="bg-white rounded-lg shadow p-4">
						<div class="flex items-center mb-2">
							<img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
							<div>
								<p class="font-bold">박민수</p>
								<p class="text-sm text-gray-500">1시간 전</p>
							</div>
						</div>
						<p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
						<div class="mt-2 flex justify-between text-gray-500">
							<button>좋아요</button>
							<button>댓글</button>
							<button>공유</button>
						</div>
					</div>

					<div class="bg-white rounded-lg shadow p-4">
						<div class="flex items-center mb-2">
							<img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
							<div>
								<p class="font-bold">정수연</p>
								<p class="text-sm text-gray-500">2시간 전</p>
							</div>
						</div>
						<p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
						<div class="mt-2 flex justify-between text-gray-500">
							<button>좋아요</button>
							<button>댓글</button>
							<button>공유</button>
						</div>
					</div>
				</div>
			</main>
`,L=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,S=()=>{const t=f();return console.log("path",location.origin),t==="/front_5th_chapter1-1/"?c():t==="/login"?r.loggedIn?(history.pushState(null,"","/"),c()):p():t==="/profile"?r.loggedIn?I():p():t==="/"?c():L()};window.addEventListener("popstate",()=>{d()});const d=()=>{const t=document.getElementById("root");if(!t)return;r.loggedIn=!!u("user"),r.user=u("user")||null;const o=S();t.innerHTML=x(o);const s=f();console.log("path=>",s),s==="/login"&&y(),s==="/profile"&&w(),document.addEventListener("click",e=>{const l=e.target.closest("a");if(!l||!l.getAttribute("href")||e.defaultPrevented)return;const a=l.getAttribute("href");a.startsWith("#")?(e.preventDefault(),location.hash=a):a.startsWith(i())&&(e.preventDefault(),history.pushState(null,"",a),d())});const n=document.getElementById("logout");n&&n.addEventListener("click",e=>{e.preventDefault(),v("user"),r.loggedIn=!1,r.user=null,history.pushState(null,"",i()+"/login"),d()})};d();
