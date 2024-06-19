# 🍎 식품 및 생활용품 이커머스 플랫폼 Market Place
 

<img src="https://private-user-images.githubusercontent.com/122145341/316298965-d3600fc0-15c6-4e01-b3be-f0e702eb4c74.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTg4MDkwODcsIm5iZiI6MTcxODgwODc4NywicGF0aCI6Ii8xMjIxNDUzNDEvMzE2Mjk4OTY1LWQzNjAwZmMwLTE1YzYtNGUwMS1iM2JlLWYwZTcwMmViNGM3NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYxOVQxNDUzMDdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03MDQyZTE2ZmNiNWE5YTRkMGY4N2ZkZDEzMDhkYjg1MWU4YzQ0MGI2Mjk0ZjhjMTcxMTJkNTQxMTYxYzNiODYwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.OPJoFFwIvd0hJsQD6dNTCoUyYhUTwzI0Z1r-XcuJado" width="40%" height="500px" alt="RubberDuck"></img>

[서비스 링크](https://marketplace-asac-3rd.vercel.app/recommendations)

<br>
<br>




## 프로젝트 소개
- 모바일 화면 기반 식품 및 생활용품 이커머스 플랫폼입니다. 
- 실제 이커머스 플랫폼과 유사한 기능 구현을 목적으로 제작했습니다.
- sns로그인, 결제 프로세스, 후기 작성 등 기능을 사용할 수 있습니다.

<br>
<br>

## 프로젝트 개요
> ASAC T아카데미 풀스택 과정 팀프로젝트
> 
> 기간 : 2023-12 ~ 2024-02 (약 3**개월**)
> 
> 
>
> **인원** : 프론트엔드(3명) : 현승재, 변재정, 이윤지 / 백엔드(1명) : 신준영


<br>
<br>

### 역할 분담

**이윤지(프론트엔드)**
- **레이아웃 및 디자인 시스템 적용** : App Routing 의 레이아웃 개발 및 Typography 및 Color 테마 적용
- 각 페이지의 공통 **헤더 및 푸터 + 네비게이션 바 컴포넌트 개발** : App Routing URL 별 정의
- 카테고리 결과, 검색 결과, 홈 페이지에서 사용될 **상품 리스트 컴포넌트** 구현 : **필터링 및 동적 렌더링 설계**
- 상품 리스트를 선택된 옵션에 따라 필터링하는 **필터 컴포넌트** 구현
- **마이페이지**, **상품상세 페이지**, **리뷰 페이지** 및 **위시리스트**, **장바구니 추가를 위한 하단 버튼 탭 구현**
- 팀원과 함께 **Vercel** + Github Repository 연동을 통한 프론트엔드 **배포**

<br>

**변재정(프론트엔드)**
- 어플리케이션 **프로젝트 파일 구조 관리** : /types, /utils, /components, /store, /assets 등
- React Hook Form + Zod 통한 **리뷰 작성 이미지, 글 FormData 구현** 및 **PresignedURL을 이용한 S3 이미지 업로드**
- React Hook Form + Zod 통한  **유효성 검사 및 회원가입 및 개인정보 수정** , 
- 추천 및 급상승 & 자동완성 API 활용해 **상품 검색 및 검색어 자동완성**
- 주문 페이지 배송 주소 입력을 위해서 **daum post api** 사용
- **Portone API**을 활용한 **카카오페이 결제 기능 구현**
- 팀원과 함께 **Vercel** + Github Repository 연동을 통한 프론트엔드 **배포**

<br>

**현승재(프론트엔드)**
- **기술 스택 및 라이브러리** 선정 : 러닝커브 혹은 재사용성을 고려하여 라이브러리 선정 및 초기 설정
- 카카오 **소셜 로그인 구현**
- **OAuth2 의 JWT 토큰 기반 로그인 구현을 위한 HTTP Cookie 활용**
- **Middleware** 기반 HTTP Cookie 의 JWT 토큰 기반으로 **페이지 접근 제한** : Protected Routes
- **Portone API**을 활용한 카카오페이 결제 기능 구현
- **장바구니, 주문서, 주문완료, 주문내역, 주문상세 페이지 구현** : **Zustand 를 통한 비지니스 로직 격리**

 <br>

 **신준영(백엔드)**
- **비즈니스 로직 추가 설계** : 와이어프레임 및 화면설계서에 누락된 비즈니스 로직들을 같이 상의하고 설계
- **ERD 및 엔티티 설계** : JPA를 이용하여 데이터베이스와의 효율적인 상호작용을 위한 엔티티 설계 및 구현
- **JPA, QueryDSL 활용하여 API 개발 및 관리** : 서비스에 필요한 다양한 API 개발 및 지속적인 관리
    - **일반 회원가입 API** : 스프링 시큐리티와 JWT를 활용하여 사용자의 가입 프로세스를 처리
    - **신상품 API** : 메인 페이지 내 최신 상품을 표시하기 위해 복잡 쿼리는 QueryDSL 활용 구현
    - **필터 API** : 사용자가 원하는 상품을 찾을 수 있도록 QueryDSL 기반의 필터 기능 제공
    - **주말특가 및 마감세일 API** : 특정 시즌이나 이벤트에 맞춰 할인 상품 정보를 제공
    - **회원 관리 API 예외 처리 및 리팩토링** : 회원 관련 기능의 안정성 향상을 위한 예외 처리 및 리팩토링
    - **검색 API** : 사용자가 원하는 상품을 쉽게 찾을 수 있는 검색 기능 API 개발
    - **검색 키워드 자동 완성 API** : PostgreSQL 의 TRGM 으로 사용자 검색 편의성을 높이는 자동 완성
    - **결제하기 API** : 결제 및 주문을 각각 다른 사람이 맡아 개발하며 트랜잭션 관리 방법에 대한 협업
    - **회원 로그아웃 API** : 사용자 로그아웃 기능 구현
- **JWT 구현 및 관리** : 사용자 인증 및 보안을 강화하기 위해 Spring Security 통한 JWT 구현 및 관리
- **배포 아키텍처** : AWS VPC 네트워크 구성에서 NAT, 터널링 및 CI/CD 를 위한 CodePipeline 구축
    - **NAT 인스턴스 활용** : 프라이빗 서브넷에서 인터넷 액세스를 위해 NAT 인스턴스 사용 (요금 절감)
    - **로드 밸런서 구성** : 2개 프라이빗 서브넷을 통한 인스턴스 이중화와 로드 밸런서 연결로 트래픽 분산
    - **RDS 연결** : 프라이빗 서브넷 내 RDS 인스턴스 구축 및 데이터베이스 관리
    - **CI/CD 파이프라인** : AWS CodePipeline 전 스테이지 정의 = **소스 - 빌드 - 배포**
        1. **소스 스테이지** : AWS CodeCommit 을 통한 버전 관리
        2. **빌드 스테이지** : AWS CodeBuild 를 통한 도커 이미지 빌드 후 AWS ECR 내 업로드
        3. **배포 스테이지** : ElasticBeanstalk 내 인스턴스 및 ELB 정의 후 애플리케이션 배포
     
 ---





<br>
<br>


### Stacks(프론트엔드)
`Next.JS`

- 다양한 rendering 패턴(CSR, SSR, ISR, SSG)을 제공하며 프로젝트 협업에 적합
- CSR SSR ISR SSG등 다양한 rendering 패턴을 제공하는 React framework로 프로젝트 협업에 적합
- 폴더 기반 라우팅, SEO, 확장된 fetch caching, Middleware Cookie 등 다양한 기능 지원


 `Typescript`

 - 안정적인 개발과 높은 수준의 코드 품질을 유지
 - 손쉽게 버그를 예방할 수 있는 
 - 강력한 타입 시스템 기반 컴파일, 버그 예방 및 손쉬운 디버깅
 - 높은 생산성과 호환성


`Shadcn/ui`

- Radix UI와 ARIA design system으로 Web Accessibility 제공 가능
- 기본 스타일 제공 및 디자인 시스템, 스타일 커스텀 적용 가능
- 필요한 UI 컴포넌트만 설치하여 번들 사이즈 최적화



 `Zustand`
 
- 작은 번들 사이즈 
- 여타 다른 전역 상태관리 라이브러리 대비 적은 보일러 플레이드 코드로 팀의 러닝 커브를 낯추어 빠르게 도입 가능
- provider 가 필요하지 않아 불필요한 리렌더링 방지
- redux devtools 적용 가능

 
 `Vercel`
 
- Nextjs 배포에 최적화된 배포 플랫폼
- 빌트인 CI/CD, Live Preview, Analytics, 사이트 성능 측정 제공


 
 `react-hook-form + zod`

- 런타임 환경에서 각각의 폼에 대한 스키마구성 및 동적 타입 검증 가능
- 각 Form마다 구조적인 검증 Schema 관리 필요
- 비제어 컴포넌트 기반 폼으로 리렌더링 최소화
- 번들 사이즈가 매우 작고 지속적인 업데이트 중

`tailwind`

 - Shadcn/ui가 Tailwind CSS를 사용하여 한번 더 재가공해서 제공하기 때문에 채택
 - 제로 런타임으로 동작하며 속도, 유연성. 생산성의 이점
 - 추상화 수준 제공으로 코드 길이 감소 및 커스터마이징 용이

<br>
<br>


### Stacks(백엔드)
`Spring Boot - WAS 프레임워크`
- **Spring Security - OAuth2, JWT** : 상태 유지 인증, 필요한 정보 자체적으로 포함
- **Spring Data JPA + QueryDSL + Hibernate** : 복잡한 데이터베이스 쿼리 간소화, 코드 재사용, 객체와 관계형 데이터베이스 간의 매핑
- **Lombok** : 반복되는 getter, setter, toString과 같은 메소드를 어노테이션을 통해 자동으로 생성함으로써 코드의 간소화
  
`PostgresQL - RDBMS 관계형 데이터베이스`

`AWS`
- 배포 아키텍처 : AWS VPC 네트워크 구성에서 NAT, 터널링 및 CI/CD 를 위한 CodePipeline 구축
    - **NAT 인스턴스 활용** : 프라이빗 서브넷에서 인터넷 액세스를 위해 NAT 인스턴스 사용 (요금 절감)
    - **로드 밸런서 구성** : 2개 프라이빗 서브넷을 통한 인스턴스 이중화와 로드 밸런서 연결로 트래픽 분산
    - **RDS 연결** : 프라이빗 서브넷 내 RDS 인스턴스 구축 및 데이터베이스 관리
    - **CI/CD 파이프라인** : AWS CodePipeline 전 스테이지 정의 = **소스 - 빌드 - 배포**
        1. **소스 스테이지** : AWS CodeCommit 을 통한 버전 관리
        2. **빌드 스테이지** : AWS CodeBuild 를 통한 도커 이미지 빌드 후 AWS ECR 내 업로드
        3. **배포 스테이지** : ElasticBeanstalk 내 인스턴스 및 ELB 정의 후 애플리케이션 배포*/
     

<br>

### 서비스 아키텍쳐
![image](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/7c6736f8-de6b-4237-a23f-277510163dd2)

<br>
<br>

### 와이어프레임 및 화면설계서


- 본 프로젝트 개발에 앞서 기획자와 디자이너로부터 정리된 와이어프레임과 화면설계서를 전달받은 후 개발을 진행했습니다. [피그마 링크](https://www.figma.com/file/jKT3ZuSmjl9qmYqNRZb3mk/%5B%EA%B7%B8%EB%A6%BF%EC%A7%80%ED%85%8C%EC%8A%A4%ED%8A%B8%5D%EB%A7%88%EC%BC%93%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4-%EB%A7%88%EC%BC%93%EC%BB%AC%EB%A6%AC?type=design&node-id=24-1283&mode=design&t=qcmZLPG54BEtTvvf-0s)
- 디자인 시스템 및 Typography 글자 및 배경 색깔, 모달, 글씨 크기 등 → CSS 공통화 작업
- 화면설계서를 통한 Userflow 정의

<br><br>

<details>

<summary>디자인 시스템 & 화면 설계서</summary>

<div markdown="1">

**디자인 시스템**

<br>

![image](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/18baabe8-a0b2-40da-8b7c-b0f1b43f13d8)

<br>
<br>

**화면설계서 : Userflow 정의**
<br>
![image](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/60079642-6e34-4ed3-a41b-b4a06d3966f5)


<br>

![image](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/2aa89cbf-9c21-45fb-8e58-cc17308c70f6)



<br>


</div>

</details>


<br>
<br>

### Key Features

- **로그인** : 일반로그인, 소셜로그인
- **회원가입**
- **홈 화면** : 추천 탭, 카테고리, 카테고리 세부
- **검색하기**
- **상품 상세페이지**
- **후기 조회** - **후기 작성**
- **장바구니** - **주문서** - **주문 완료** - **주문 내역**
- **마이마켓** : 찜한 상품, 상품 문의, 1:1 문의
- **개인정보 수정**
- **로그아웃**
  





<br>

<details>

<summary>ERD 다이어그램</summary>

<div markdown="1">

![image](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/5dd08587-7c19-4e87-9d6d-c3f53afe2c2f)

</div>

</details>






<br>
<br>


## 화면 구성 및 주요 기능 시현 영상 및 설명

### 회원가입 및 로그인
- 일반 이메일 회원가입
- 회원가입 시 많은 입력 폼에 React Hook Form 비제어 컴포넌트로 리렌더 감소, Zod 통한 런타임 타입 검증
- 로그인이 필요한 페이지 및 API 사용 시 Middleware 를 통해 쿠키 내 로그인 토큰 존재여부로 접근 제한

![회원가입 및 로그인 구현 gif](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/ce7a8022-7fd3-43ac-865d-c5e5ed3b7d6d)


<br>


### SNS 로그인 
- OAuth2 인증을 통한 카카오 계정 로그인 구현
- OAuth2 인증 및 추가 정보만으로, 일반 이메일 계정을 카카오 계정과 바로 연동 가능
- **OAuth Cookie 설정** : 일반 로그인 시 백엔드가 프론트엔드한테 JWT를 QueryString 으로 넘긴 다음에 프론트엔드 미들웨어에서 QueryString으로 전달된 JWT를 추출하고 브라우저 Cookie 에 저장하여 “인증이 필요한 API” 호출 시 해당 JWT값 제공.

![카카오 로그인 gif](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/ce647a09-e28c-4a19-86b9-99bedd8e1624)



<br>

### 홈 탭을 통해 원하는 상품군 조회 가능
- 네비게이터 : 추천, 신상품, 베스트 상품으로 바로 이동 가능한 메뉴 나열 (레이아웃과 페이지를 분리)
- *Next.js - App Routing (Layout / Page) 활용*
- 이벤트 배너 및 가로 스크롤을 통해 **다양한 상품 큐레이션**
- **Intersection Observer** 를 통한 **Viewport 위치를 추적**하여 상품 리스트 검색 결과를 **무한 스크롤**로 구현
![Marketplace-feature2online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/BoubleJ/ASAC_Market_Place/assets/122145341/44920fd0-8255-4da5-8f16-f0c637eae60b)




<br>


### 카테고리 탭을 통해 카테고리 별 상품군 조회 가능
- [ **대분류 카테고리 → 소분류 카테고리 → 브랜드, 가격 등의 필터** ] **3 계층**을 통해 상세 검색 및 조회 지원
- *shadcn/ui - Accordion 컴포넌트 및 Next.js - Dynamic Routes 활용*
- 하단 메뉴 이동 탭 내 useSelectedLayout 로 App Route Group 값 기반의 현재 위치한 메뉴 아이콘 표기

![Marketplace-feature3online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/BoubleJ/ASAC_Market_Place/assets/122145341/e81d0b81-7a91-48dd-a6bc-c854e00080a1)





<br>


###  상품 상세페이지 내 찜하기, 리뷰조회 가능
- 상품 상세페이지 내 해당 상품을 구매한 이들의 **리뷰와 리뷰가 얼마나 도움이 되었는지 여부 판단 가능**
- 상품 상세페이지에 관심이 있는 경우 **찜하기를 통해 추후 구매 고려 및 관련 상품 추천받기 가능**
- 장바구니 및 찜 버튼을 레이아웃으로 분리하여 하단에 고정
- 개인화된 작업 수행의 경우 쿠키 내 인증 토큰을 활용하여, 회원에 한하여 기능 사용 가능하도록 제약
- *Next.js - App Routing (Layout / Page) 및 HTTP Cookie 활용*

![Marketplace-feature6online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/BoubleJ/ASAC_Market_Place/assets/122145341/7fc84db6-17bb-4495-9a39-5b9ec9081d20)





<br>

### 상품리스트 필터링 조회
- shadcn/ui 의 accordion 컴포넌트를 사용해 대분류 카테고리 클릭시 아코디언으로 소분류 카테고리를 노출시켜 편리하게 카테고리별로 조회 가능
- 카테고리 결과페이지 접근 시 next.js 의 Dynamic Routes를 사용해 원하는 카테고리 클릭 시 동적으로 라우트를 생성할 수 있도록 했습니다.
- 필터 또는 세부필터 버튼을 터치하면 나타나는 바텀시트를 활용하여 필터 구현
- 각 필터종류별로 원하는 옵션을 선택하여 적용 시 URL 파라미터를 통해 상품을 필터링하고, 버튼을 통해 적용된 필터를 시각적으로 표시하며 이를 클릭 시 해당 옵션 제거할 수 있도록 했습니다.
- **브랜드, 가격 등의 필터와 바텀시트**를 통해 상세 검색 및 조회 지원
- *Next.js - Dynamic Routes 활용*
  
![상품리스트 필터링 gif](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/c0562d84-ca03-4552-857e-01b74f7566f2)



<br>


### 검색 탭을 통해 원하는 상품 조회 가능
- **검색어 입력 시 자동완성 API 연결**을 통해 (지연시간 최소화) **빠른 검색 가능**
- **추천 검색어 & 급상승 검색어**를 통해 많은 사람들이 찾는 상품에 대한 접근 가능
- *Next.js - Dynamic Routes 활용 (**검색어에 따른 URL 변경** → 예시를 통해 확인 가능)*
  

![Marketplace-feature4online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/BoubleJ/ASAC_Market_Place/assets/122145341/b348b5c9-109c-4aa7-a8ff-d9b0ed24ff8b)



  




<br>


### 마이페이지 내 개인정보수정, 주문내역 조회 및 리뷰작성 가능
- 로그인 여부를 판단하여, **회원가입 유도 버튼 노출** 혹은 마이메뉴 페이지 노출 및 개인정보 수정 가능
- 개인화된 작업 수행의 경우 **쿠키 내 인증 토큰을 활용**하여, 회원에 한하여 기능 사용 가능하도록 제약
- *shadcn/ui - Form 컴포넌트 및 HTTP Cookie 활용*
- **찜한 상품 조회 및 삭제 가능**
- **결제 완료 후 주문내역 내 기간 별 주문내역 조회 및 필터링 가능**
- *Next.js - Dynamic Routes 활용 (**세부 필터에 따른 URL 변경** → 예시를 통해 확인 가능)*
- 주문내역 내 특정 주문한 상품에 대해 **이미지 및 글 작성을 통해 리뷰 작성 가능**
- *AJAX 호출 시 Formdata 활용*
 
![Marketplace-feature8online-video-cutter com-ezgif com-video-to-gif-converter](https://github.com/BoubleJ/ASAC_Market_Place/assets/122145341/d78eb393-a2d3-41de-9186-3595f9673b3c)


 <br>


### 주소입력 및 결제
- **장바구니를 통해 잠재적 구매 상품에 대한 수량 조절 및 선택적 결제 가능**
- *Intl 라이브러리 포맷을 통해 i18n 시간 및 화폐 표현*
- *Zustand 전역 상태 관리 라이브러리를 통한 장바구니 및 구매하기 상품 저장*
- 주문 페이지 배송 주소 입력을 위해서 **daum post api** 사용
- **결제하기 내 주문서 기입** - 주문상품 및 구매자 정보 확인 및 최종 결제 가능
- 외부 API **Portone**을 활용한 카카오페이 결제 기능 구현
  
![결제 프로세스 gif](https://github.com/BoubleJ/ASAC_Market_Place_Epik/assets/122145341/5f62b81a-1c18-4806-941f-86ecd8898cf4)


<br>
<br>
<br>



## 트러블 슈팅
- 아이콘 사용시 react icon을 사용했으나 **번들사이즈 축소**를 위해 **svgr로 마이그레이션**
  **8.15 MB (react-icons)  334.5KB (svgr)의 번들링 사이즈 개선**을 달성
- 렌딩 페이지 배너 이미지를 lazy-loading 방식에서 **preload 방식**으로 변경
   **라이트하우스 성능 메트릭 78점 -> 97점 개선 달성**
- [트러블 슈팅 과정 기록 노션 링크](https://supreme-gram-307.notion.site/b609d241afe34994b9776ed29b7db2d3)

