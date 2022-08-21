import { menuBar } from "./navBar";
import { mainPage } from "./landing";
import { foodPage } from "./menu";
import './style.css';

menuBar();
mainPage();

const menuBtn = document.getElementById('menu');
menuBtn.addEventListener('click', foodPage);