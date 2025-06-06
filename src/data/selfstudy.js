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
import lightmode from "../assets/img/LightMode.jpg";
import darkmode from "../assets/img/DarkMode.jpg";
import calerror from "../assets/img/error.png";

export const selfstudyData = [
{
    id: 1,
    title: "vue.js를 활용한 계산기 앱 만들기",
    skills: [vuejs, vsc, css, js, html, jquery], // 기술 스킬
    shortDesc: "간단한 사칙연산 및 사용자 테마 적용", // 카드용 요약 설명
    description: "1인 가구 비중이 증가하는 소형 가구 및 미니멀리즘을 반영한 가구정보 웹 제작",
    github: "https://github.com/SilverStarGo",
    details: [
      { dtitle: "계산기 기능", 
        desc: [
          "기본적인 사칙연산을 처리할 수 있도록 구현", 
          "초기화(C) 기능으로 모든 상태를 리셋",
        ],
        dimage: lightmode,
      },
      { dtitle: "중복 연산 제어 및 에러 방지", 
        desc: [
          "연속된 연산자 입력 시 예외 처리", 
          "숫자 미입력 시 예외 처리",
        ],
        dimage: calerror,
      },
      { dtitle: "사용자 편의성을 고려한 다크 모드 기능", 
        desc: [
          "toggleMode() 메서드를 통해 다크 모드 ON/OFF 전환", 
          "isDarkMode 상태 값에 따라 body 클래스 동적으로 변경",
          "버튼 내부 toggle 애니메이션 구현으로 UX향상",
        ],
        dimage: darkmode,
      },
    ],
    exImages: [],
},
];