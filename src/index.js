import 'bootstrap';
import { cube } from './math.js';

function component() {
  var element = document.createElement('pre');

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  element.classList.add('bg', 'bg-primary');

  return element;
}

document.body.appendChild(component());