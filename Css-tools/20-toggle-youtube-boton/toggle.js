let subscribeBtn = document.getElementById('subscribe');
let subscribe = false

subscribeBtn.addEventListener('click',()=>{
    if(subscribe){
        subscribeBtn.innerText = 'Suscrito';
        subscribeBtn.style = 'background-color:gray;'
        subscribe =  false;
    }else{
        subscribeBtn.innerText = 'Suscribete';
        subscribeBtn.style = 'background-color:red;'
        subscribe =  true;
    }
})
