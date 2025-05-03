import css from '../assets/img/css.png';
import tomcat from '../assets/img/tomcat.png';
import java from '../assets/img/java.png';
import js from '../assets/img/js.png';
import kotlin from '../assets/img/kotlin.png';
import html from '../assets/img/html.png';
import jquery from '../assets/img/jquery.png';
import react from '../assets/img/react.png';
import bootstrap from '../assets/img/bootstrap.png';
import vuejs from '../assets/img/vuejs.png';
import sass from '../assets/img/sass.png';
import nodejs from '../assets/img/nodejs.png';
import spring from '../assets/img/spring.png';
import jpa from '../assets/img/jpa.png';
import mybatis from '../assets/img/mybatis.png';
import oracle from '../assets/img/oracle.png';
import mysql from '../assets/img/mysql.png';
import firebase from '../assets/img/firebase.png';
import vscode from '../assets/img/vsc.png';
import eclipse from '../assets/img/eclipse.png';
import intellij from '../assets/img/intellij.png';
import git from '../assets/img/git.png';
import github from '../assets/img/github.png';
import android from '../assets/img/android.png';
import figma from '../assets/img/figma.png';
import photoshop from '../assets/img/photoshop.png';
import illustrator from '../assets/img/illustrator.png';

// 카테고리별 기술 스택 데이터
export const skillCategories = [
  {id: "program1", name: "언어"},
  {id: "program2", name: "프론트엔드"},
  {id: "program3", name: "백엔드"},
  {id: "program4", name: "데이터"},
  {id: "program5", name: "툴"},
  {id: "program6", name: "디자인"},
];

// 기술 아이콘 데이터
export const skillIcons = {
  program1: [
    {id: "skill1", src: java, alt: "java", title:"java"},
    {id: "skill2", src: js, alt: "java script", title:"java script"},
    {id: "skill3", src: kotlin, alt: "kotlin", title:"kotlin"},
  ],
  program2: [
    {id: "skill4", src: html, alt: "html", title: "html"},
    {id: "skill5", src: css, alt: "css", title: "css"},
    {id: "skill6", src: jquery, alt: "jquery", title: "jquery"},
    {id: "skill7", src: react, alt: "react", title: "react"},
    {id: "skill8", src: bootstrap, alt: "bootstrap", title: "bootstrap"},
    {id: "skill9", src: vuejs, alt: "vuejs", title: "vuejs"},
    {id: "skill10", src: sass, alt: "sass", title:"sass"},
  ],
  program3: [
    {id: "skill11", src: nodejs, alt: "nodejs", title:"nodejs"},
    {id: "skill12", src: spring, alt: "spring", title:"spring"},
    {id: "skill13", src: jpa, alt: "jpa", title:"jpa"},
    {id: "skill14", src: mybatis, alt: "mybatis", title:"mybatis"},
    {id: "skill15", src: tomcat, alt: "tomcat", title:"tomcat"},
  ],
  program4: [
    {id: "skill16", src: oracle, alt: "oracle", title:"oracle"},
    {id: "skill17", src: mysql, alt: "mysql", title:"mysql"},
    {id: "skill18", src: firebase, alt: "firebase", title:"firebase"},
  ],
  program5: [
    {id: "skill19", src: vscode, alt: "vscode", title:"visual Studio code"},
    {id: "skill20", src: eclipse, alt: "eclipse", title:"eclipse"},
    {id: "skill21", src: intellij, alt: "intellij", title:"intellij"},
    {id: "skill22", src: git, alt: "git", title:"git"},
    {id: "skill23", src: github, alt: "github", title:"github"},
    {id: "skill24", src: android, alt: "android", title:"android studio"},
  ],
  program6: [
    {id: "skill25", src: figma, alt: "figma", title:"figma"},
    {id: "skill26", src: photoshop, alt: "photoshop", title:"photoshop"},
    {id: "skill27", src: illustrator, alt: "illustrator", title:"illustrator"},
  ],
};
