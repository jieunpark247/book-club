# 북클럽 Web Service (book Club)
### 기술 스택 

- **FE:**  React.js , Next.js 
- **BE:** spring boot , spring jpa , spring  security 
- **Server / DB :**  AWS,docker, postgresql
- **CI/CD:**  jenkins, gitlab

### 화면 구성 

- **메인 페이지** 
  - 북클럽 등록 페이지
  - 북클럽 가입 페이지
  - 북클럽 리스트

- **로그인/ 회원가입**
- **마이 페이지** 
  - 가입자 정보
  - 내가 등록한 북클럽
  - 내가 신청한 북클럽

### 기능 

- 북클럽 가입 페이지
  - 모임 신청 완료시 카톡 push 보내기 
  - 결제 기능 (카카오 페이 연동?)
- 로그인 회원가입
  - 카카오 로그인(BE에서 security 처리 ) 
  - Google reCAPTCHA 적용 [권한] 

- HTTPS (let's encrypt)
- 스켈레톤 ui 
- next.js
- 단위테스트 (react testing library, react-hooks-testing-library ,jest,  msw 선택하기 ) 
- 테스트 자동화 > 테스트 완료되면 배포되게
- git 배포 > jenkins 빌드 > aws 코드 디플로이 


### web 서비스 구성도 





### 처리해보기

- es6로 개발

- Vue .js 세팅 ? Cli 사용 ? 빌드? 버전? 확인
- 뷰던 리액트건 캐싱처리
- webpack  최적화 어떻게 함? 
- Promise 1000번 호출할때 api 어떻게 마지막인지 알지? 처리 어떻게 ?
  - 비동기로 호출을 하게되면 비동기로 호출하는시간이 다 다를텐데 pure하게 어떻게 처리할까? 
- 함수 실행할때 지연시켜서 실행하는 방법 
- 특정 버튼 연타해서 api여러번 날릴때 문제 해결
- 버튼이 클릭되는 카운트를 알고싶은데 ///      storage나 네트워크 쓰지말고 어떻게 구현?
- 데이터 받아올때 이전에 요청했던게 나중에오면 다시 보내주거나? 어떻게 처리해줄건가? 새 요청을 하고 이전요청 캔슬할거야?
- 옵셔널 체이닝 사용하기
- 운영/ 개발에서 차이로 인해 발생했던 문제?
- 보안을 위해 해본것? Js 파일 이미지같은거 접근 방지
- 백엔드에서 이미지 접근 막기위해? url 크롤링할때 방지하기
- 헤더확인/ 어떤정보 있는지 어떻게 사용하는지 확인 