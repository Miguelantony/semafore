let CurrentColor = 0;
const vermelhoTempo = 3000;
const amareloTempo = 1000;
const verdeTempo = 3000;

function trocarCor() {
    const luzes = document.querySelectorAll('.luz');


    luzes.forEach(luz => luz.classList.remove('active'));

    if (CurrentColor === 0 ) {
        luzes[0].classList.add('active');
        setTimeout(trocarCor, vermelhoTempo);
        CurrentColor = 1;
    } else if (CurrentColor === 1) {
        luzes[1].classList.add('active');
        setTimeout(trocarCor, amareloTempo);
        CurrentColor = 2;
    } else {
        luzes[2].classList.add('active');
        setTimeout(trocarCor, verdeTempo);
        CurrentColor = 0;
    }
}

trocarCor();