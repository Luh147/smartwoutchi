let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next'); 
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let dots = document.querySelector('.indicators ul li'); 

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;


nextButton.addEventListener('click', () => {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');
    
    active = active + 1 > lastPosition ? 0 : active + 1;
    items[active].classList.add('active');
    updateDots();
});

prevButton.addEventListener('click', () => {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');
    
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    items[active].classList.add('active');
    updateDots();
});


function updateDots() {
    document.querySelectorAll('.indicators ul li').forEach((dot, index) => {
        dot.classList.toggle('active', index === active);
    });
    document.querySelector('.indicators .number').textContent = `0${active + 1}`;
}


updateDots();