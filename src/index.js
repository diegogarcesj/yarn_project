import { greet } from './greet';
import $ from 'jquery';

console.log(greet('Diego'));

$(document).ready(function() {
  console.log('jQuery just checked that the DOM is ready!');
});
