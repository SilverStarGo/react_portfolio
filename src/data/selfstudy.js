
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import jquery from "../assets/img/jquery.png";
import js from "../assets/img/js.png";
import vsc from "../assets/img/vsc.png";
import vuejs from "../assets/img/vuejs.png";
import lightmode from "../assets/img/LightMode.jpg";
import darkmode from "../assets/img/DarkMode.jpg";
import calerror from "../assets/img/error.png";
import success from "../assets/img/success.jpg";
import tmain from "../assets/img/tmain.jpg";
import tdelete from "../assets/img/delete.jpg";
import whome from "../assets/img/whome.jpg";
import wsearch from "../assets/img/wsearch.jpg";
import day7 from "../assets/img/7day.jpg";
import werror from "../assets/img/werror.png";


export const selfstudyData = [
{
    id: 1,
    title: "vue.js를 활용한 계산기 앱 만들기",
    skills: [vuejs, vsc, css, js, html, jquery], // 기술 스킬
    shortDesc: "간단한 사칙연산 및 사용자 테마 적용", // 카드용 요약 설명
    description: "1인 가구 비중이 증가하는 소형 가구 및 미니멀리즘을 반영한 가구정보 웹 제작",
    github: "https://github.com/SilverStarGo/dark-mode-calculator",
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
{
    id: 2,
    title: "Vue.js 기반 Todo List 앱 만들기",
    skills: [vuejs, vsc, css, js, html, jquery],
    shortDesc: "Vue3 기반의 컴포넌트를 사용한 할일 앱 제작",
    description: "할일 등록, 완료, 완수 후 삭제까지 편리하게 사용할 수 있는 기본적인 앱",
    github: "https://github.com/SilverStarGo/todo-app",
    details: [
      { dtitle: "할 일 등록 및 삭제 기능 구현", 
        desc: [
          "할 일을 입력한 후 'Enter키' 혹은 '등록' 버튼을 클릭하면 등록완료", 
          "각 항목의 삭제 아이콘(휴지통)을 클릭하면 제거",
        ],
        dimage: tmain,
      },
      { dtitle: "탭 필터링 (전체, 완료)", 
        desc: [
          "상단에 있는 전체 혹은 완료 버튼마다 필터링이 되도록 구현", 
          "선택된 탭은 동적으로 바인딩하여 시각적으로 강조, 조건에 맞는 항목만 렌더링",
        ],
        dimage: tdelete,
      },
      { dtitle: "할 일 완료 및 상태 변경", 
        desc: [
          "각 항목에 체크박스 클릭 시 완료 상태로 전환", 
          "완료 상태가 된 항목은 글자 중심선에 줄이 그이며, 회색 배경으로 변함",
        ],
        dimage: success,
      },
    ],
    exImages: [],   
},
{
    id: 3,
    title: "Vue.js 기반 날씨 정보 앱 만들기",
    skills: [vuejs, vsc, css, js, html, jquery],
    shortDesc: "vue.js의 컴포넌트 시스템을 활용한 날씨 정보 앱",
    description: "사용자의 현재 위치에서 실시간 날씨 정보와 시간대별/주간 예보 정보를 제공하도록 제작",
    github: "https://github.com/SilverStarGo/weather-app",
    details: [
      { dtitle: "현재 위치를 기반으로 날씨 정보를 자동 조회", 
        desc: [
          "사용자 IP 주소를 활용하여 현재 위치를 자동으로 인식, 해당 지역의 날씨 데이터를 호출하는 기능 구현", 
          "위치 정보 접근에 대한 보안 이슈를 고려하여 ipify, freeipapi를 적용",
        ],
        dimage: whome,
      },
      { dtitle: "실시간 날씨 및 주간 예보를 시각화", 
        desc: [
          "Visual Crossing Weather API를 활용한 현재 온도, 체감 온도, 날씨 상태 등을 API로 받아 오는 형식으로 처리", 
          "오늘의 시간대별 예보와 중기 예보 데이터를 분리하여 날짜와 시간에 따른 온도 변화를 한눈에 알아보도록 시각적으로 표현",
        ],
        dimage: day7,
      },
      { dtitle: "Pinia 상태관리 도입으로 데이터 흐름 최적화", 
        desc: [
          "Pinia를 사용하여 날씨 데이터의 전역 상태 관리 구조를 설계함으로써 컴포넌트 간 데이터 공유와 재사용성을 높힘", 
          "computed를 활용한 시간 필터링, ref로 반응형 상태 처리",
        ],
      },
      { dtitle: "모바일 친화적인 UI", 
        desc: [
          "반응형 CSS를 통해 다양한 해상도에서 가독성이 뛰어난 모바일 뷰를 제공하도록 설계", 
          "고정된 헤더/푸터, 다크톤 배경 등을 통해 사용자 중심의 미니멀 인터페이스 구현",
        ],
      },
      { dtitle: "다중 지역 검색 및 즐겨찾기 기능", 
        desc: [
          "원하는 지역명을 검색하여 해당 지역의 날씨를 추가 조회", 
          "중복 검색 시 알림창을 통한 예외 처리",
          "즐겨찾기 기능처럼 다양한 도시의 날씨를 한눈에 비교 가능",
        ],
        dimage: wsearch,
      },
      { dtitle: "지역검색 예외 처리",
        desc: [
          "중복 검색 시 알림창을 통한 예외 처리",
        ],
        dimage: werror,
      },
      { dtitle: "라우팅 및 컴포넌트 구조화", 
        desc: [
          "vue Router를 적용하여 홈, 예보, 검색등 페이지를 분리한 SPA구조", 
          "DefaultLayout.vue, TheFooter.vue 등 공통 컴포넌트를 분리해 유지보수성과 재사용성 확보",
        ],
      },
    ],
    exImages: [],   
},
];