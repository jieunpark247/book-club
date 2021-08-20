# 북클럽 Web Service (book Club)
### 기술 스택 

- **FE:**  React.js , Next.js 
- **BE:** spring boot , spring jpa , spring  security 
- **Server / DB :**  AWS,docker, postgresql
- **CI/CD:**  jenkins, gitlab

### 화면 구성 

**메인 페이지** : 모임 신청란, 모임 만들기 

**모임 신청 페이지** : 모임 신청 완료시 카톡 push 보내기 

**모임 만들기 페이지**: 결제 기능 (trans?? )

**로그인 페이지** : 카카오 로그인(BE에서 security 처리 ) /Google reCAPTCHA 적용 [권한]

**마이 페이지** : 가입자 정보 , 가입한 클럽, 만든 클럽 정보 등 

**통계페이지** : 사용자 통계 정보 확인 페이지 

** **모니터링** (elk, logstash ,?)

> 모임 등록시 자동으로 걸러주는 기능 추가 (개발 완료 후 진행 )



### 서비스 구성도 

WEB  |   WAS, git, jenkins   |   DB



### 업무 분담 

박지은: FE, WEB 서버 , CI/CD구축 

원지영 : BE, WAS 서버,  CI/CD구축 

이세영 : BE, WAS 서버, , CI/CD구축 



#### 1차 meetup 

**~ 8월 27일**

**박지은**: 1. 메인페이지 템플릿 완성

​			  2. AWS WEB 서버 환경 구축 

**원지영** : 1. Spring boot 환경 구성(+JPA)  

​			   2. 로그인 기능 추가

**이세영** : 1. AWS 서버 환경 구축 (WAS, Jenkins, gitlab) 

​			   2. slack ,google ,gitlab 대시보드 

