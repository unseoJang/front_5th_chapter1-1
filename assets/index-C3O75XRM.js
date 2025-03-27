(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f=()=>{const e=location.hash;return e?e.replace("#","")||"/":location.pathname},i=()=>location.hash?"#":"",p=({loggedIn:e}={})=>{const s=f(),o=e?`
        <li>
					<a href="${i()}/profile" id="profile-route" class="${s==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a>
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
					<a href="${i()}/" id="home-route" class="${location.pathname==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a>
				</li>
        ${o}
      </ul>
    </nav>
  `},g=`
   <footer class="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 항해플러스. All rights reserved.</p>
      </footer>
`;function d(e){return JSON.parse(localStorage.getItem(e))||""}function c(e,s){return localStorage.setItem(e,JSON.stringify(s))}function h(e){return localStorage.removeItem(e)}const n={user:d("user"),isLoggedIn:!!d("user")},v=e=>{const s=e.includes('id="login-form"'),o=e.includes("404"),l=s||o;return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${l?"":p({loggedIn:n.loggedIn})}
        ${e}
        ${l?"":g}
      </div>
    </div>
  `},x=()=>{const e=document.getElementById("login-form");e&&e.addEventListener("submit",s=>{s.preventDefault();const o=e.querySelector("#username").value;if(o){const l={username:o,email:"",bio:""};c("user",l),c("loggedIn","true"),n.loggedIn=!0,n.loggedIn=!0,n.username=o,n.user=l,history.pushState(null,"","/"),a()}})},m=()=>`
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
`,y=()=>{var e;(e=document.getElementById("profile-form"))==null||e.addEventListener("submit",async s=>{s.preventDefault(),console.log("✅ 이벤트 핸들러 등록됨");const o={username:document.getElementById("username").value,email:document.getElementById("email").value,bio:document.getElementById("bio").value.trim()};console.log("🔧 저장할 user 값:",o),c("user",o),n.user={...o},history.pushState(null,"","/profile"),a(),document.body.dataset.rendered="true"})},w=()=>{const e=n.user||{username:"",email:"",bio:""};return document.body.dataset.rendered="false",`
    <main class="p-4" role="main">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
          내 프로필
        </h2>
        <form id="profile-form">
          <div class="mb-4">
            <label for="username" class="block text-gray-700 text-sm font-bold mb-2">사용자 이름</label>
            <input type="text" id="username" name="username" value="${e.username}" class="w-full p-2 border rounded" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2">이메일</label>
            <input type="email" id="email" name="email" value="${e.email||""}" class="w-full p-2 border rounded" />
          </div>
          <div class="mb-6">
            <label for="bio" class="block text-gray-700 text-sm font-bold mb-2">자기소개</label>
            <textarea id="bio" name="bio" rows="4" class="w-full p-2 border rounded">${e.bio.trim()}</textarea>
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">프로필 업데이트</button>
        </form>
      </div>
    </main>
  `},b=()=>`
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
`,I=()=>`
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
`,L=()=>{const e=f();return e==="/login"?n.loggedIn?(history.pushState(null,"","/"),b()):m():e==="/profile"?n.loggedIn?w():m():e==="/"?b():I()};window.addEventListener("popstate",()=>{a()});const a=()=>{const e=document.getElementById("root");if(!e)return;n.loggedIn=!!d("user"),n.user=d("user")||null;const s=L();e.innerHTML=v(s),document.addEventListener("click",l=>{const t=l.target.closest("a");if(!t||!t.getAttribute("href")||l.defaultPrevented)return;l.preventDefault();const r=t.getAttribute("href");history.pushState(null,"",r),a()}),location.pathname==="/login"&&x(),location.pathname==="/profile"&&y();const o=document.getElementById("logout");o&&o.addEventListener("click",l=>{l.preventDefault(),h("user"),n.loggedIn=!1,n.user=null,history.pushState(null,"","/login"),a()})};a();
