const a = document.querySelector('.a');
const ab = document.querySelector('.ab');
const b = document.querySelector('.b');
const abc = document.querySelector('.abc');
const bc = document.querySelector('.bc');
const ac = document.querySelector('.ac');
const c = document.querySelector('.c');

function allLightUp() {
  a.classList.add('light-up');
  ab.classList.add('light-up');
  b.classList.add('light-up');
  abc.classList.add('light-up');
  bc.classList.add('light-up');
  ac.classList.add('light-up');
  c.classList.add('light-up');
}

function allLightDown() {
  a.classList.remove('light-up');
  ab.classList.remove('light-up');
  b.classList.remove('light-up');
  abc.classList.remove('light-up');
  bc.classList.remove('light-up');
  ac.classList.remove('light-up');
  c.classList.remove('light-up');
}

function aLightsUp() {
  a.classList.add('light-up');
  ab.classList.add('light-up');
  abc.classList.add('light-up');
  ac.classList.add('light-up');
}

function aLightsDown() {
  a.classList.remove('light-up');
  ab.classList.remove('light-up');
  abc.classList.remove('light-up');
  ac.classList.remove('light-up');
}

function bLightsUp() {
  ab.classList.add('light-up');
  b.classList.add('light-up');
  abc.classList.add('light-up');
  bc.classList.add('light-up');
}

function bLightsDown() {
  ab.classList.remove('light-up');
  b.classList.remove('light-up');
  abc.classList.remove('light-up');
  bc.classList.remove('light-up');
}

function cLightsUp() {
  abc.classList.add('light-up');
  bc.classList.add('light-up');
  ac.classList.add('light-up');
  c.classList.add('light-up');
}

function cLightsDown() {
  abc.classList.remove('light-up');
  bc.classList.remove('light-up');
  ac.classList.remove('light-up');
  c.classList.remove('light-up');
}

function abLightsUp() {
  a.classList.add('light-up');
  ab.classList.add('light-up');
  b.classList.add('light-up');
}

function abLightsDown() {
  a.classList.remove('light-up');
  ab.classList.remove('light-up');
  b.classList.remove('light-up');
}

function bcLightsUp() {
  b.classList.add('light-up');
  bc.classList.add('light-up');
  c.classList.add('light-up');
}

function bcLightsDown() {
  b.classList.remove('light-up');
  bc.classList.remove('light-up');
  c.classList.remove('light-up');
}

function acLightsUp() {
  a.classList.add('light-up');
  ac.classList.add('light-up');
  c.classList.add('light-up');
}

function acLightsDown() {
  a.classList.remove('light-up');
  ac.classList.remove('light-up');
  c.classList.remove('light-up');
}

a.addEventListener('mouseover', aLightsUp);
a.addEventListener('mouseout', aLightsDown);

ab.addEventListener('mouseover', abLightsUp);
ab.addEventListener('mouseout', abLightsDown);

b.addEventListener('mouseover', bLightsUp);
b.addEventListener('mouseout', bLightsDown);

abc.addEventListener('mouseover', allLightUp);
abc.addEventListener('mouseout', allLightDown);

bc.addEventListener('mouseover', bcLightsUp);
bc.addEventListener('mouseout', bcLightsDown);

ac.addEventListener('mouseover', acLightsUp);
ac.addEventListener('mouseout', acLightsDown);

c.addEventListener('mouseover', cLightsUp);
c.addEventListener('mouseout', cLightsDown);
