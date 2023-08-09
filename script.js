'use strict';

const diagram = document.querySelector('.venn-diagram');

function diagramInteractivity(event) {
  const classes = event.target
    .closest('.venn-diagram > div[data-interactive]')
    ?.classList.value.split(' ')
    .join(', .');

  const elements = document.querySelectorAll(`.${classes}`);
  elements.forEach((element) => {
    if (event.type === 'mouseover') element.classList.add('light-up');
    if (event.type === 'mouseout') element.classList.remove('light-up');
  });
}

diagram.addEventListener('mouseover', diagramInteractivity);
diagram.addEventListener('mouseout', diagramInteractivity);
