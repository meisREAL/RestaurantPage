import { menuBar } from "./navBar";
import { mainPage } from "./landing";
import { foodPage } from "./menu";
import { contactInfo } from "./contact";
import './style.css';

menuBar();
mainPage();

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', foodPage);
const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', mainPage);
const contact = document.getElementById('contact');
contact.addEventListener('click', contactInfo);