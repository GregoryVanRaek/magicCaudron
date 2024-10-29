const serpentBtn = document.querySelector('#btnSerpent');
const serpentCpt = document.querySelector('#cptSerpent');
const araigneeBtn = document.querySelector('#btnAraignee');
const araigneeCpt = document.querySelector('#cptAraignee');
const chauvesourisBtn = document.querySelector('#btnChauvesouris');
const chauvesourisCpt = document.querySelector('#cptChauvesouris');
const champignonBtn = document.querySelector('#btnChampignon');
const champignonCpt = document.querySelector('#cptChampignon');
const resetBtn = document.querySelector('#btnReset');
const melangeBtn = document.querySelector('#melangeBtn');
const bgVideo1 = document.querySelector('#bgVideo1');
const bgVideo2 = document.querySelector('#bgVideo2');
const winTitle = document.querySelector('#win')
const missedTitle = document.querySelector('#missed');

let cpt1, cpt2, cpt3, cpt4;
let win = false;

function reset() {
    cpt1 = 0;
    cpt2 = 0;
    cpt3 = 0;
    cpt4 = 0;
    bgVideo1.style.opacity = 1;
    bgVideo2.style.opacity = 0;
    bgVideo1.src = './video/1.mp4'
    win = false;
    missedTitle.classList.add('hidden');
    winTitle.classList.add('hidden');
    resetBtn.classList.remove('hidden');
    melangeBtn.classList.remove('hidden')
}

function display() {
    serpentCpt.textContent = cpt1;
    araigneeCpt.textContent = cpt2;
    chauvesourisCpt.textContent = cpt3;
    champignonCpt.textContent = cpt4;
}

function init() {
    reset();
    display();
}

function checkWinCondition() {
    return cpt1 === 4 && cpt2 === 3 && cpt3 === 1 && cpt4 === 6;
}

serpentBtn.addEventListener('click', () => {
    cpt1 += 1;
    display();
});

araigneeBtn.addEventListener('click', () => {
    cpt2 += 1;
    display();
});

chauvesourisBtn.addEventListener('click', () => {
    cpt3 += 1;
    display();
});

champignonBtn.addEventListener('click', () => {
    cpt4 += 1;
    display();
});

resetBtn.addEventListener('click', () => {
    init();
});

melangeBtn.addEventListener('click', () => {
    if (checkWinCondition()) {
        bgVideo1.style.opacity = 0;
        bgVideo2.style.opacity = 1;
        resetBtn.classList.add('hidden');
        melangeBtn.classList.add('hidden')

        setTimeout(() => {
            bgVideo1.src = './video/2.mp4';
            bgVideo1.load();
            winTitle.classList.remove('hidden');
        }, 1000);

        setTimeout(() => {
            init();
        },10000)

    } else {
        missedTitle.classList.remove('hidden')
    }
});

init();
