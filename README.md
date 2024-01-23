# [MCARD] 패스트캠퍼스 강의 CARD페이지 최적화

## 프로젝트 소개
고석진 강사님이 강의하신 최적화 강의
카드 신청 App을 통하여서  LayoutShift(Skeleton UI로)관리, TreeShaking, 우선순위를 활용한 로딩 속도 향상, 병목 코드 제거 을 학습

## 페이지 소개
![image](https://github.com/suhong99/OptimizeLecCard/assets/120103909/48e9c7d5-5663-40cd-ae80-8180300d6b12)

Home ,Card, Test(더미 데이터 등록), Signin, Signup

로그인 후에
Apply,ApplyDone, Mypage를 이용 가능



## 최적화 방법
 
- webpack-bundle-analyzer로 번들 사이즈 확인 후, lodash 라이브러리 TreeShaking[https://ungumungum.tistory.com/73]
  
- lightHouse로 CLS 측정 및 Skeleton UI를 활용하여 최적화 [https://ungumungum.tistory.com/74]
  
- Review 컴퍼넌트를 react-intersection-observer을 통해서 '관측될 때 랜더링하여' Card상세페이지의 초기 랜더링 속도 향상
  
-  개발자 도구의 Performance 기능을 통하여서,  병목 코드 확인  후 코드 개선 및 성능 비교 (removeHtmlTage함수) --> 문자열의 length가 368000일 경우 23.8밀리초->6.8밀리초로 감소

![image](https://github.com/suhong99/OptimizeLecCard/assets/120103909/ba42c63e-2f3b-408a-b3b8-d720a1661db9)

