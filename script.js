const sImage = document.getElementById('showImage');
const sText =  document.getElementById('showText');
const brand =  document.getElementById('brandom');
const brese =  document.getElementById('breset');

const choice = ['kadad', 'kankei', 'kon'];

const ctranslate ={
    kadad: 'กระดาษ',
    kankei: 'กรรไกร',
    kon: 'ค้อน',
};

function getRandomChoice(){
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

brand.addEventListener('click',function(){
    const myChoice = getRandomChoice();
    const choiceT = ctranslate[myChoice];
    sImage.src = 'images/' + myChoice + '.png';
    sText.innerHTML = 'สุ่มได้อีนี่ : ' + myChoice;

    brand.style.display = 'none';
    brese.style.display = 'inline'
})

brese.addEventListener('click',function(){

    sImage.src = 'images/pop.webp';
    sText.innerHTML = 'กดปุ่ม "สุ่ม" เพื่อเลือก';

    brand.style.display = 'inline';
    brese.style.display = 'none';
    
});