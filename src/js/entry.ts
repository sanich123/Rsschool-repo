import '@babel/polyfill';
import "../index.html";
import "../less/entry.less";
import CreateGarage from './pages/create-garage';
import { getData } from './utils/data-loaders';
if (window.location.href.includes('#garage') || !window.location.href.includes('#')) {
    CreateGarage();
    getData();
}





