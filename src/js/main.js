document.documentElement.classList.add('js-enabled');
let seconds = settings.maxTime;

for (let i = 0; i < 9; i++) {
    document.getElementById('app').insertAdjacentHTML('beforeend', `<li class="grid__item"></li>`);
}

const p1 = new Player('Georges (1)');
const p2 = new Player('Jacques (2)');

function time() {
    setInterval(() => {
        if (seconds === 0) {
            document.querySelector('.timer').textContent = `00:${seconds}`;
            document.querySelector('.result').insertAdjacentHTML('afterend', `<form class="play-again-template_form" method="get">
                                                                                            <p class="play-again-template_form__message">Le jeu est perdu</p>
                                                                                            <input class="btn play-again-template_form__submit" type="submit" value="Jouer à nouveau !">
                                                                                             </form>`);
        } else {
            document.querySelector('.timer').textContent = `00:${seconds--}`;
        }
    }, 1000);
}

time();

const JSResultItem = document.querySelector('.result_item--js');
const LoveResultItem = document.querySelector('.result_item--love');
let currentPlayer = 0;
let jeu = [
    ['0', '0', '0'],
    ['0', '0', '0'],
    ['0', '0', '0']];


JSResultItem.textContent = `${p1.name} : ${p1.score}`;
LoveResultItem.textContent = `${p2.name} : ${p2.score}`;
document.querySelector('.grid').classList.add('js');
document.querySelectorAll('.grid__item').forEach(item => {
    item.addEventListener('click', (e) => {
        if (currentPlayer === 0) {
            if (item.classList.contains('grid__item--js' || 'grid__item--love')) {
                p1.score--;
            } else {
                e.currentTarget.classList.add('grid__item--js');
                p1.updateScore();
                document.querySelector('.grid').classList.remove('js');
                document.querySelector('.grid').classList.add('love');
                currentPlayer = 1;
            }
        } else {
            if (item.classList.contains('grid__item--js' || 'grid__item--love')) {
                p2.score--;
            } else {
                e.currentTarget.classList.add('grid__item--love');
                p2.updateScore();
                document.querySelector('.grid').classList.remove('love');
                document.querySelector('.grid').classList.add('js');
                currentPlayer = 0;
            }
        }
        JSResultItem.textContent = `${p1.name} : ${p1.score}`;
        LoveResultItem.textContent = `${p2.name} : ${p2.score}`;
    });
});

