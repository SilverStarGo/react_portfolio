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
      }      
      
    ],
    exImages: [hot1, top1, community1, main1],
},
{
    id: 2,
    title: "Tomcat 및 Springboot 기반 웹사이트 개발",
    thumbnail: html,        // 카드 썸네일
    skills: [tomcat, intellij, css, js, html, spring, bootstrap, java, jquery], // 기술 스킬
    shortDesc: "가구 쇼핑몰 제작", // 카드용 요약 설명
    period: "2023.06.16~2023.07.03",
    members: "5명",
    description: "1인 가구 비중이 증가하는 소형 가구 및 미니멀리즘을 반영한 가구정보 웹 제작",
    details: [
      { dtitle: "간단한 설명부분", 
        desc: ["세부적인 설명부분", "내부적인 설명부분"],
        dimage: css,
      },
      
    ],
    exImages: [css, html],
},
{
    id: 3,
    title: "Tomcat 및 Springboot 기반 웹사이트 개발",
    thumbnail: html,        // 카드 썸네일
    skills: [tomcat, intellij, css, js, html, spring, bootstrap, java, jquery], // 기술 스킬
    shortDesc: "가구 쇼핑몰 제작", // 카드용 요약 설명
    period: "2023.06.16~2023.07.03",
    members: "5명",
    description: "1인 가구 비중이 증가하는 소형 가구 및 미니멀리즘을 반영한 가구정보 웹 제작",
    details: [
      { dtitle: "간단한 설명부분", 
        desc: ["세부적인 설명부분", "내부적인 설명부분"],
        dimage: css,
      },
      
    ],
    exImages: [css, html],
},
{
    id: 4,
    title: "Tomcat 및 Springboot 기반 웹사이트 개발",
    thumbnail: html,        // 카드 썸네일
    skills: [tomcat, intellij, css, js, html, spring, bootstrap, java, jquery], // 기술 스킬
    shortDesc: "가구 쇼핑몰 제작", // 카드용 요약 설명
    period: "2023.06.16~2023.07.03",
    members: "5명",
    description: "1인 가구 비중이 증가하는 소형 가구 및 미니멀리즘을 반영한 가구정보 웹 제작",
    details: [
      { dtitle: "간단한 설명부분", 
        desc: ["세부적인 설명부분", "내부적인 설명부분"],
        dimage: css,
      },
      
    ],
    exImages: [css, html],
},
]