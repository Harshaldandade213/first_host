const button = document.querySelectorAll('.color-palate');

const blue_b=document.querySelector('.blue');
const red_b=document.querySelector('.red');
const white_b=document.querySelector('.white');


function change_b(){
    document.body.style.backgroundColor='blue';
}
function change_r(){
    document.body.style.backgroundColor='red';
}

blue_b.addEventListener('click',change_b ); 
red_b.addEventListener('click',change_r ); 

white_b.addEventListener('click', function change_w(){
        document.body.style.backgroundColor='white';
        

}
)

// /document.body.style.backgroundColor