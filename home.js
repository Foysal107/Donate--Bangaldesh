


// card 1 
const cardbtn1 = document.getElementById('donate-now-btn1')
    .addEventListener('click', function () {
        const cardbutton1 = parseFloat(document.getElementById('donate-ammout1').value);
        // console.log(cardbutton1)
        const currentammount = parseFloat(document.getElementById('currentAmountnouakhali').innerText);
        // console.log(currentammount)
      const newammount = cardbutton1 + currentammount;
      document.getElementById('currentAmountnouakhali').innerText=newammount; 
    });

// card 2

const cardbtntwo = document.getElementById('donate-now-btn2')
    .addEventListener('click', function () {
        const cardbuttontwo = parseFloat(document.getElementById('ammount2').value);
        console.log(cardbuttontwo);
const currnetammount2 =parseFloat(document.getElementById('currentammountforcard2').innerText);
console.log(currnetammount2);
const card2newblance = cardbuttontwo + currnetammount2;
// console.log(card2newblance)
document.getElementById('currentammountforcard2').innerText=card2newblance;
    });

// card 3

    const cardthree = document.getElementById('donate-now-btn3')
    .addEventListener('click', function () {
        const cardbuttonthree = parseFloat(document.getElementById('donate-ammount3').value);
        // console.log(cardbuttonthree);
        const currnetammount3 =parseFloat (document.getElementById('currentammountforcard3').innerText);
        // console.log(currnetammount3)
        const card3newblance = cardbuttonthree+currnetammount3;
        document.getElementById('currentammountforcard3').innerText=card3newblance;
        
const yourblance = parseFloat(document.getElementById('yourblance').innerText);
const currentblance = cardbuttonthree - yourblance;
document.getElementById('yourblance').innerText=currentblance

    });

    const historytab = document.getElementById('historytab')
    historytab.addEventListener('click',function(){
        historytab.classList.add('')

    })



