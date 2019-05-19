import AppModel from './AppModel';

function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

let currentPositionX = null;

function lock(e) {
  currentPositionX = unify(e).clientX;
}
let countTranslate = 0;
function move(e) {
  const resultDiv2 = document.getElementsByClassName('article');
  const differentPositionX = unify(e).clientX - currentPositionX;
  const directionOfMove = Math.sign(differentPositionX);
  if ((countTranslate > 0 || directionOfMove < 0) && (countTranslate < 15 || directionOfMove > 0)) {
    for (let j = 0; j < 15; j += 1) {
      resultDiv2[j].style.setProperty('--i', countTranslate - directionOfMove);
    }
    const numberPage = document.querySelectorAll('.number-btn');
    const btnPagingControl = document.querySelector('.paging-control').children;

    for (let i = 0; i < 4; i += 1) {
      numberPage[i].innerHTML = `${countTranslate - directionOfMove + i + 1}`;
      btnPagingControl[i].setAttribute('tooltip', countTranslate - directionOfMove + i + 1);
    }
    countTranslate -= directionOfMove;
  }
  currentPositionX = null;
}

export default class App {
  constructor() {
    this.state = {
      MAXRESULT: 15,
      APIKEY: 'AIzaSyDlHpAg-P7WklthADmGMUppxeAa229PlHs',
      // 'AIzaSyCttWdVyalxCfJCtGhTgRqpcxb_deqCruA'
    };
  }

  start() {
    const model = new AppModel(this.state);
    window.document.body.querySelector('.search-btnsubmit').addEventListener('click', () => {
      if (document.querySelector('.article')) {
        model.remove();
      }
      const data = document.querySelector('.search-input').value;

      model.getClip(data);
    });

    const resultDiv = window.document.body.querySelector('.articles');
    resultDiv.addEventListener('mousedown', lock);
    resultDiv.addEventListener('touchstart', lock);
    resultDiv.addEventListener('mouseup', move);
    resultDiv.addEventListener('touchend', move);
    resultDiv.addEventListener('touchmove', (e) => { e.preventDefault(); }, false);

    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('focus', () => { searchInput.value = ''; });
  }
}
