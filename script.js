const questions = document.getElementsByClassName('q-container');

const length = questions.length;

let activeIndex = 0;

questions[activeIndex].children[1].classList.toggle('none');

if (questions[activeIndex].children[0].children[1].src.endsWith('icon-plus.svg')) {
    questions[activeIndex].children[0].children[1].src = './assets/images/icon-minus.svg'
} else {
    questions[activeIndex].children[0].children[1].src = './assets/images/icon-plus.svg'
}

questions[activeIndex].children[1].classList.toggle('fade-in');

for (let index = 0; index < questions.length; index++) {
    const element = questions[index];



    element.addEventListener('click', () => {

        questions[activeIndex].children[1].classList.toggle('none');

        if (questions[activeIndex].children[0].children[1].src.endsWith('icon-plus.svg')) {
            questions[activeIndex].children[0].children[1].src = './assets/images/icon-minus.svg'
        } else {
            questions[activeIndex].children[0].children[1].src = './assets/images/icon-plus.svg'
        }
        questions[activeIndex].children[1].classList.toggle('fade-in');

        activeIndex = index
        questions[activeIndex].children[1].classList.toggle('none');
        questions[activeIndex].children[1].classList.toggle('fade-in');

        if (questions[activeIndex].children[0].children[1].src.endsWith('icon-plus.svg')) {
            questions[activeIndex].children[0].children[1].src = './assets/images/icon-minus.svg'
        } else {
            questions[activeIndex].children[0].children[1].src = './assets/images/icon-plus.svg'
        }
    })
}