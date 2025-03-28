## 과제 체크포인트

### 배포 링크

https://unseoJang.github.io/front_5th_chapter1-1/

<!--
배포 링크를 적어주세요
예시: https://<username>.github.io/front-5th-chapter1-1/

배포가 완료되지 않으면 과제를 통과할 수 없습니다.
배포 후에 정상 작동하는지 확인해주세요.
-->

### 기본과제

#### 1) 라우팅 구현:

- [x] History API를 사용하여 SPA 라우터 구현
  - [x] '/' (홈 페이지)
  - [x] '/login' (로그인 페이지)
  - [x] '/profile' (프로필 페이지)
- [x] 각 라우트에 해당하는 컴포넌트 렌더링 함수 작성
- [x] 네비게이션 이벤트 처리 (링크 클릭 시 페이지 전환)
- [x] 주소가 변경되어도 새로고침이 발생하지 않아야 한다.

#### 2) 사용자 관리 기능:

- [x] LocalStorage를 사용한 간단한 사용자 데이터 관리
  - [x] 사용자 정보 저장 (이름, 간단한 소개)
  - [x] 로그인 상태 관리 (로그인/로그아웃 토글)
- [x] 로그인 폼 구현
  - [x] 사용자 이름 입력 및 검증
  - [x] 로그인 버튼 클릭 시 LocalStorage에 사용자 정보 저장
- [x] 로그아웃 기능 구현
  - [x] 로그아웃 버튼 클릭 시 LocalStorage에서 사용자 정보 제거

#### 3) 프로필 페이지 구현:

- [x] 현재 로그인한 사용자의 정보 표시
  - [x] 사용자 이름
  - [x] 간단한 소개
- [x] 프로필 수정 기능
  - [x] 사용자 소개 텍스트 수정 가능
  - [x] 수정된 정보 LocalStorage에 저장

#### 4) 컴포넌트 기반 구조 설계:

- [x] 재사용 가능한 컴포넌트 작성
  - [x] Header 컴포넌트
  - [x] Footer 컴포넌트
- [x] 페이지별 컴포넌트 작성
  - [x] HomePage 컴포넌트
  - [x] ProfilePage 컴포넌트
  - [x] NotFoundPage 컴포넌트

#### 5) 상태 관리 초기 구현:

- [x] 간단한 상태 관리 시스템 설계
  - [x] 전역 상태 객체 생성 (예: 현재 로그인한 사용자 정보)
- [x] 상태 변경 함수 구현
  - [x] 상태 업데이트 시 관련 컴포넌트 리렌더링

#### 6) 이벤트 처리 및 DOM 조작:

- [x] 사용자 입력 처리 (로그인 폼, 프로필 수정 등)
- [x] 동적 컨텐츠 렌더링 (사용자 정보 표시, 페이지 전환 등)

#### 7) 라우팅 예외 처리:

- [x] 잘못된 라우트 접근 시 404 페이지 표시

### 심화과제

#### 1) 해시 라우터 구현

- [x] location.hash를 이용하여 SPA 라우터 구현
  - [x] '/#/' (홈 페이지)
  - [x] '/#/login' (로그인 페이지)
  - [x] '/#/profile' (프로필 페이지)

#### 2) 라우트 가드 구현

- [x] 로그인 상태에 따른 접근 제어
- [x] 비로그인 사용자의 특정 페이지 접근 시 로그인 페이지로 리다이렉션

#### 3) 이벤트 위임

- [x] 이벤트 위임 방식으로 이벤트를 관리하고 있다.

## 과제 셀프회고

<!-- 과제에 대한 회고를 작성해주세요 -->

1. 기본과제에 대한 회고
   - 주말에 시간 외 근무로 일정이 빠듯했지만 끝까지 과제를 마무리했다는 점에서 의미 있는 도전이었다.
   - 기초 지식이 부족한 걸 뼈저리게 느꼈고, 발제 당시 줌 녹화본을 반복해서 시청하며 기존 프레임워크가 어떻게 구성되어 있는지 구조적으로 접근하려 노력했다.
   - 이번 과제를 통해 SPA의 라우팅 흐름, 상태 관리 방식, DOM 이벤트 처리 방식 등을 실제로 구현해보면서 개념이 체득되었다.
2. 심화과제에 대한 회고
   - 생각보다 시간을 많이 잡아 먹었다. 실제로 테스트를 해봤는지 안해봤는지 테스트 코드도 한번씩 살펴보라고 함정 코드도 한두개씩 섞어넣은거 보고 한참 헤맸던 내 자신에 대해서 반성했다.
   - 뭔가 원리를 알고 진행한다기 보다는 일딴 만들어보자 라는 생각이 더 컸던 것 같다.
   - 처음에는 location.hash와 pathname을 동시에 처리해야 하는 부분에서 경로 파싱에 혼란이 있었고, render() 호출 시점이나 이벤트 위임이 정상적으로 작동하지 않는 문제도 발생했다. 특히 테스트에서 예상치 못하게 textarea에 값이 두 번 들어가는 문제를 디버깅하는 데 꽤 시간이 걸렸다.
   - 무엇보다 단순히 작동만 하는 것이 아니라, 테스트를 기반으로 코드를 점검하고 수정해 나가는 과정을 통해 기능 구현 → 테스트 실패 → 원인 분석 → 수정 → 테스트 통과의 루틴을 몸에 익힐 수 있었던 것이 이번 과제에서 가장 큰 수확이었다.

### 기술적 성장

- Vanilla JS로 직접 라우팅 구현을 하면서 라우팅 흐름과 동작 원리를 깊이 있게 이해하게 되었다.
- 상태 관리를 `store/user.js`로 분리하고, `localStorage` 동기화를 따로 추상화해서 유틸로 관리한 것은 작은 규모의 상태 관리 시스템 구현을 연습할 수 있는 좋은 기회였다.
- 이메일이나 전화번호를 입력하고 패스워드 입력하는 곳에서 테스트 코드가 통과되지 않길래 한참을 해맸다, 결국...괜한 유효성 검사를 넣어놔서 통과를 못하고 있었다. 내가 구성한 로직이든 test 코드든 남의 코드를 제대로 확인하는 법을 길러야 한다고 생각했다.
- 테스트 코드가 실패했을 때, 유효성 검사의 작은 조건 하나가 전체 흐름을 막을 수 있다는 걸 체감했고, 테스트 기반 개발의 중요성과 디버깅 스킬의 필요성을 절감했다.
- localStorage 저장/불러오기 시 JSON 파싱 처리나 key의 유무 체크, 공백 제어 등에 있어서 정교한 예외처리와 데이터 가공 능력이 중요하다는 걸 배웠다.
- history.pushState, popstate, location.hash 등을 이용한 브라우저 기반 라우팅의 내부 작동 방식을 직접 구현하며 이해하게 되었음
- pushState()는 화면을 바꾸지 않는다는 점도 직접 테스트를 통해 학습함
- 테스트 기반 개발(TDD)에 가까운 디버깅 경험
- Playwright 테스트에 맞춰 기능을 구현하면서, 스냅샷 기반 테스트와 렌더링 로직의 관계를 이해
- 특히 expect.toMatchAriaSnapshot() 에러 분석을 반복하면서 접근성 기반 스냅샷 테스트에 대한 경험을 쌓음

### 코드 품질

<!-- 예시
- 특히 만족스러운 구현
- 리팩토링이 필요한 부분
- 코드 설계 관련 고민과 결정
-->

✅ utils로 로직을 분리한 점은 앞으로의 확장성 측면에서 유리하며, 반복되는 코드도 줄여서 가독성과 유지보수성을 높였다.

✅ Header와 Footer를 컴포넌트화한 후 Layout 컴포넌트로 통합하는 구조는 좋은 시도였고, 이는 프레임워크에서의 Layout 개념과도 유사하여 좋은 연습이 되었다.

✅ 다만 textarea value 값에 대한 공백 처리(trim() 등)나 DOM 렌더링 시점의 핸들러 연결 타이밍 등은 좀 더 안정성 있게 짜면 더 좋을 것 같다.

✅ 상태 객체와 localStorage 간의 싱크(동기화)를 좀 더 명확하게 묶어내는 구조 (예: setter를 통해 상태와 localStorage를 한 번에 관리)로 개선해볼 수 있다.

✅ Footer와 Header를 분명 하나로 합쳐 좀더 효율적으로 운영할수 있는 컴포넌트 관리방법이 있다. 해당건은 심화작업에서 적용할 예정이다.

⚠️ 인증이 필요한 페이지 접근 제어 미들웨어화

⚠️ 페이지 진입 시 애니메이션 효과

⚠️ navigate()에 대한 단위 테스트 추가

⚠️ render() 함수 최적화 (비효율 렌더 제거)

### 학습 효과 분석

- 라우팅, 상태관리, 이벤트 처리가 프레임워크 없이도 가능하다는 걸 직접 구현하면서 알게 됨.

- 기존 프레임워크에서 자동으로 처리되던 것들이 내부적으로 어떤 흐름으로 동작하는지 명확히 알 수 있었고, 이는 실무에서 디버깅하거나 커스터마이징 할 때 큰 도움이 될 것이다.

- 상태 관리, 모듈 분리, 이벤트 위임 등 프레임워크의 추상화 아래에 있던 개념들을 구현 레벨에서 경험했다는 것이 이번 과제의 가장 큰 수확이 아닐까 싶다.

### 과제 피드백

- 과제 안내가 비교적 명확해서 전체적인 구현 방향은 잘 이해할 수 있었음.

- 다만, 테스트 코드의 동작 타이밍(렌더링 이후 DOM이 바로 안 잡히는 문제)이나 유효성 조건이 디버깅 난이도를 높이는 원인이 됐고, 에러 로그를 읽고 빠르게 의심 범위를 좁히는 연습이 더 필요하다고 느낌.

- 컴포넌트 간 의존성 관리, 예: state, render와 같이 여러 곳에서 호출되는 전역 함수/객체가 많을 때 생기는 side effect나 상태 꼬임을 막기 위한 구조 개선 고민이 있었으면 더 좋았을 것 같음.

- github 배포 관련해서는..좀더 친절해도 되지 않을까 라는 생각이 든다...

## 리뷰 받고 싶은 내용

-> 상태 관리와 localStorage 동기화 흐름이 지금 구조에서 적절한지, 혹은 더 구조적으로 관리할 수 있는 방식이 있다면 피드백 부탁드립니다.

-> Layout 컴포넌트 구조 도입은 좋은 시도였다고 생각하는데, 구조를 더 개선하거나 프레임워크처럼 확장 가능하게 만들 수 있는 방향이 있을지 궁금합니다.

-> 현재는 DOM 렌더링 후 매번 이벤트 핸들러를 다시 등록하는 방식인데, 이런 방식이 퍼포먼스나 구조상 괜찮은지, 개선 포인트가 있다면 조언 부탁드립니다.

-> 라우팅 방식 자동 감지와 강제 사용 방식 분리 여부

-> 랜더링 최적화를 위한 좋은 패턴

-> 현재 해시 라우터 / 기본 라우터를 동시에 지원하려고 getCurrentPath에서 조건 분기를 두었는데, 이런 방식이 좋은 구조인지 궁금합니다.

-> pathPrefix() 함수가 암묵적으로 hash 여부를 판단하는 방식인데, 이보다 더 명확한 방식이 있을까요?

-> Layout 컴포넌트에서 로그인/404 페이지인지 판단할 때 content 문자열 내부에서 id나 텍스트를 검사하고 있습니다.
  이런 방식이 유지보수 측면에서 괜찮을지, 더 나은 방법이 있을지 궁금합니다.

-> auth 객체를 전역으로 import하여 상태를 관리하고 있습니다. localStorage와 함께 쓰다 보니 동기화 코드가 중복되는 느낌도 드는데,
  이보다 더 나은 상태 관리 방식이 있을지 궁금합니다. (예: observer 패턴, context-like 구조 등)

-> render 함수 안에서 라우팅 판단, auth 상태 초기화, DOM 렌더링, 이벤트 핸들러 연결까지 모두 하고 있습니다.
  이걸 기능별로 나누는 게 더 나을지, 어떤 기준으로 분리하는 게 좋을지 궁금합니다.



## 밑에 캡쳐본은...항해쪽에 밀어넣으니 자꾸 test 통과가 안되서...캡쳐해서 넣습니다 ㅜㅜ 로컬에선 true 값 잘 떠요

<img width="1205" alt="스크린샷 2025-03-27 오후 10 58 51" src="https://github.com/user-attachments/assets/7a896d95-56d0-46df-a7a1-dc8be413ec87" />
<img width="1016" alt="스크린샷 2025-03-27 오후 10 53 24" src="https://github.com/user-attachments/assets/59ed3e9a-b8ba-4e5b-b948-5a2ff67de4a1" />
<img width="1017" alt="스크린샷 2025-03-27 오후 10 53 16" src="https://github.com/user-attachments/assets/83e24618-6365-4c62-a51b-6c810019a4d7" />
<img width="291" alt="스크린샷 2025-03-27 오후 9 30 15" src="https://github.com/user-attachments/assets/dc8bf5b0-bed1-4caf-8d2c-2ae62c856255" />
