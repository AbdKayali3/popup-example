const popupHolder = document.querySelector('.popup-holder');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const clickPop = document.querySelector('.click_pop');

clickPop.addEventListener('click', function(){
    popupHolder.style.display = 'flex';
    popup.style.display = 'block';
});

close.addEventListener('click', function(){
    popupHolder.style.display = 'none';
    popup.style.display = 'none';
});

popupHolder.addEventListener('click', function(){
    popupHolder.style.display = 'none';
    popup.style.display = 'none';
});