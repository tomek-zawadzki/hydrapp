import '../scss/main.scss';

// uncomment the lines below to enable PWA
import {registerSW} from './pwa.js';
registerSW();

/* place your code below */

console.log('HELLO 🚀')

const addGlass = document.querySelector('.add--js')
const removeGlass = document.querySelector('.remove--js')
const amount = document.querySelector('.amount--js')