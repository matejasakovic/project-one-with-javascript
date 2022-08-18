/*
*this is for js in index.html
*/
const openModal = () => {

    let background = document.querySelector('.cookie-background');
    let window = document.querySelector('.cookie-div');

    background.style.display = 'block';
    window.style.display = 'block';
}

const closeModal = () => {



    let background = document.querySelector('.cookie-background');
    let window = document.querySelector('.cookie-div');

    background.style.display = 'none';
    window.style.display = 'none';
}



const closediv = () => {



    let background = document.querySelector('.cookie-background');
    let window = document.querySelector('.cookie-div');

    background.style.display = 'none';
    window.style.display = 'none';
}

/*
*this js is for page-2-outlet
*/

let totalprice = 0;
function addtocart(element) {

    let main = element.closest('.single-item');
    let cart = document.querySelector('.cart-item');
    let cartTotal = document.querySelector('.cart-item .totalforpay .ptotal');
    let price = main.querySelector('.img-for-outlet span').innerText;
    price = price.substring(0, 5);
    price = parseInt(price);

    let name = main.querySelector('.img-for-outlet a ').innerText;


    totalprice += price;

    cartTotal.innerHTML = `<p style="font-size: 30px; ">${totalprice} rsd</p>`;
    cart.innerHTML += `<div class="remove-div">  <p> U korpi se nalazi *${name}*<br>
    <span>Cena : ${price} rsd</span><button onclick="removefromcart(this)">Ukloni</button><hr></p></div>`;


    element.setAttribute('disabled', 'true');
    element.innerText = 'Dodato';



}


function removefromcart(element) {

    let main = element.closest('.remove-div')

    let button = document.querySelector('.single-item button');
    let cartTotal = document.querySelector('.cart-item .totalforpay .ptotal');

    let price = main.querySelector('.remove-div span').innerText;
    let cart = document.querySelectorAll('.single-item');
    price = price.substring(7, 12);

    price = parseInt(price);

    main.remove();
    totalprice = totalprice - price;
    cartTotal.innerHTML = `<p style="font-size: 30px; ">${totalprice} rsd</p>`;



    button.innerText = 'Dodaj u korpu';
    button.removeAttribute('disabled');





}
