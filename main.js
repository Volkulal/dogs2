let dog = document.querySelector('.dog')
let table = document.querySelector('table')
table.addEventListener('click', function(elem) {
    let target = elem.target;
    if (target != dog) {
      while (target.tagName != 'TR') {
        if (target.tagName == 'TD') {
          target.appendChild(dog);
          break;
        }
        target = target.parentElement;
      }
    }
  })