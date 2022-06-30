import 'regenerator-runtime'; /* for async await transpile */
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/js/dist/carousel';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app.js';
import swRegister from './utils/sw-register';

const app = new App({
    button: document.querySelector('#menu'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
