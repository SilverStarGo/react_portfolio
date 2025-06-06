import android from "../assets/img/android.png";
import bootstrap from "../assets/img/bootstrap.png";
import css from "../assets/img/css.png";
import eclipse from "../assets/img/eclipse.png";
import figma from "../assets/img/figma.png";
import firebase from "../assets/img/firebase.png";
import git from "../assets/img/git.png";
import github from "../assets/img/github.png";
import html from "../assets/img/html.png";
import intellij from "../assets/img/intellij.png";
import java from "../assets/img/java.png";
import jpa from "../assets/img/jpa.png";
import jquery from "../assets/img/jquery.png";
import js from "../assets/img/js.png";
import kotlin from "../assets/img/kotlin.png";
import mybatis from "../assets/img/mybatis.png";
import mysql from "../assets/img/mysql.png";
import netlify from "../assets/img/netlify.png";
import nodejs from "../assets/img/nodejs.png";
import oracle from "../assets/img/oracle.png";
import photoshop from "../assets/img/photoshop.png";
import react from "../assets/img/react.png";
import sass from "../assets/img/sass.png";
import spring from "../assets/img/spring.png";
import tomcat from "../assets/img/tomcat.png";
import vsc from "../assets/img/vsc.png";
import vuejs from "../assets/img/vuejs.png";
import home1 from "../assets/img/1home.png";
import hot1 from "../assets/img/1hot.png";
import top1 from "../assets/img/1top.png";
import login1 from "../assets/img/1login.png";
import community1 from "../assets/img/1community.png";
import search1 from "../assets/img/1search.png";
import detailpage1 from "../assets/img/1detailpage.png";
import diagram1 from "../assets/img/1diagram.png";
import main1 from "../assets/img/1main.png";
import cart1 from "../assets/img/1cart.png";
import board1 from "../assets/img/1board.png";
import home2 from "../assets/img/2home.PNG";
import main2 from "../assets/img/2main.PNG";
import detail2 from "../assets/img/2detail.PNG";
import search2 from "../assets/img/2search.PNG";
import set2 from "../assets/img/2set.PNG";
import review2 from "../assets/img/2review.PNG";
import user2 from "../assets/img/2user.PNG";
import home3 from "../assets/img/3home.png";
import tableau from "../assets/img/tableau.PNG";
import python from "../assets/img/python.png";
import model3 from "../assets/img/3model.PNG";
import springdash3 from "../assets/img/3springdash.PNG";
import reactdash3 from "../assets/img/3reactdash.png";
import springhome3 from "../assets/img/3springdashmain.png";
import reacthome3 from "../assets/img/3reactdashmain.png";

export const projectData = [
{
    id: 1,
    title: "Tomcat 및 Springboot 기반 웹사이트 개발",
    thumbnail: home1,        // 카드 썸네일
    skills: [tomcat, intellij, css, js, html, spring, bootstrap, java, jquery], // 기술 스킬
    shortDesc: "가구 쇼핑몰 제작", // 카드용 요약 설명
    period: "2023.06.16~2023.07.03",
    members: "5명",
    description: "1인 가구 비중이 증가하는 소형 가구 및 미니멀리즘을 반영한 가구정보 웹 제작",
    github: "https://github.com/SilverStarGo",
    details: [
      { dtitle: "DB를 통한 데이터 관리", 
        desc: [
          "DB의 데이터를 Spring을 통해 웹 화면으로 제공", 
          "웹페이지에서 처리하는 데이터를 DB로 저장"
        ],
        dimage: diagram1,
      },
      { dtitle: "HOME 화면 구성", 
        desc: [
          "조회수가 높은 3가지의 상품 사진 제공 및 해당 상품 상세페이지 이동", 
          "커뮤니티 중 조회수가 가장 높은 게시글 TOP2 정보 제공"
        ],
      },
      { dtitle: "사용자 등록 및 로그인 기능", 
        desc: [
          "이메일 기준으로 로그인", 
          "Spring Security 활용",
          "유효성 검사 및 암호화",
        ],
        dimage: login1,
      },
      { dtitle: "제품 상세정보 페이지", 
        desc: [
          "가구 목록 JPA(페이징)", 
          "상품 정보 출력, 가구 재고 수 만큼 구매 가능",
        ],
        dimage: detailpage1,
      },
      { dtitle: "장바구니 및 결제 페이지",
        desc: [
          "구매를 위한 장바구니로 물품수정 및 삭제 가능",
          "주문/결제 페이지 내 입력했던 정보 확인 가능",
          "주문 완료 시 리뷰페이지로 이동되어 작성가능"
        ],
        dimage: cart1,
      },
      { dtitle: "유저 커뮤니티 게시판",
        desc: [
          "제목으로 검색 및 조회기능",
          "게시글 작성 시 이미지 첨부가능, 이미지 없이 등록 시 설정한 기본 이미지 노출",
          "제품 목록 페이징기능",
          "회원 개인이 작성한 게시물 수정 및 삭제, 관리자는 모든 게시판 삭제 및 별도의 공지 게시판 작성 가능",
          "게시물에 대한 댓글을 작성하면 작성자, 작성 시간 기록"
        ],
        dimage: board1,
      },
    ],
    exImages: [hot1, top1, community1, main1],
},
{
    id: 2,
    title: "Kotlin 기반으로 AndroidStudio 앱 개발",
    thumbnail: home2,
    skills: [kotlin, github, jpa, spring, android, intellij, mysql, firebase],
    shortDesc: "맛집들을 추천해 주고 맛집정보를 공유하는 앱",
    period: "2023.07.26~2023.08.16",
    members: "3명",
    description: "만족할 만한 식당을 찾기가 쉽지 않을 때 맛집들을 추천해 주고 쉽게 공유할 수 있는 맛집 정보제공",
    details: [
      { dtitle: "맛집 TOP5", 
        desc: [
          "서버에 데이터 요청 후 어댑터를 이용해 리사이클러뷰 저장", 
          "리사이클러뷰 activity에 데이터 바인딩",
          "이미지는 어댑터에서 글라이드 사용해 비트맵 형식으로 바인딩",
        ],
        dimage: main2,
      },
      { dtitle: "맛집 상세보기 페이지", 
        desc: [
          "조건문을 이용하여 별점이 나타날 수 있도록 출력", 
          "관리자 로그인 시에만 맛집에 대한 정보를 등록하거나 수정, 삭제 가능",
          "맛집 장소는 인텐트로 담아서 보낸 위도, 경도 값으로 표시",
        ],
        dimage: detail2,
      },
      { dtitle: "식당 등록 및 수정", 
        desc: [
          "식당에 관한 모든 항목 수정가능", 
          "이미지 변경이 있을 시 파이어베이스 스토리지에 저장된 사진 삭제처리 후 변경",
        ],
        dimage: set2,
      },
      { dtitle: "사진첨부 + 별점을 활용한 리뷰", 
        desc: [
          "리뷰 작성 시 작성한 시간을 기록",
        ],
        dimage: review2,
      },
      { dtitle: "회원가입 및 로그인 기능", 
        desc: [
          "이메일을 통해 가입처리. 이때, 중복 데이터 확인",
          "이메일로 유저를 구분하기 때문에 아이디는 변경불가"
        ],
        dimage: user2,
      },
      { dtitle: "앱 아이콘 디자인",
        desc: [
          "일러스트를 활용하여 직접 캐릭터 및 앱명을 제작"
        ],
        dimage: home2,
      },
    ],
    exImages: [main2, search2],
},
{
    id: 3,
    title: "머닝러신을 활용한 빅데이터 프로젝트",
    thumbnail: home3,
    skills: [tableau, github, python, react, spring],
    shortDesc: "112 신고 데이터 기반 범죄 안전도 예측",
    period: "2023.09.18~2023.10.23",
    members: "4명",
    description: "서울전역 위험도를 측정하고 가설을 설립하여 그에 따른 범죄위험도와 연관이 있는지 비교하기 위한 프로젝트",
    details: [
      { dtitle: "데이터 수집 및 전처리", 
        desc: [
          "데이터 전처리 및 가공",
          "Polygon 위도, 경도를 네이버 역지오코딩 API를 활용해 행정동 추출"
        ],
      },
      { dtitle: "데이터 분석 및 훈련된 모델로 산출된 예측치",
        desc: [
          "타겟 지역구 선정하여 5대 범죄에 대한 1년간 신고 데이터의 평균치와 최대치인 지구대를 비교",
          "선형회귀분석을 활용하여 데이터 간의 가중치를 찾아 독립변수와 종속변수간의 선형 관계를 알아냄",
          "선형회귀 모델 SGD를 적용 후 훈련된 모델에 훈련 데이터를 다시 대입하여 선형 회귀 분석이 잘 되었는지 검증"
        ],
        dimage: model3,
      },
      { dtitle:"스프링을 활용한 웹 대시보드 구현",
        dimage: springdash3
      },
      { dtitle:"리액트를 활용한 웹 대시보드 구현",
        dimage: reactdash3
      },      
    ],
    exImages: [springhome3, reacthome3],
},
]