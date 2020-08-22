//generating pin funtion

function generatePin(){
    let random = Math.round(Math.random() * 9999);
    if (random < 1000) {
        return Math.round(Math.random() * 9999);
    }
    else return random;
}



//generate pin display
document.getElementById('generate-pin').addEventListener('click', function(){
    let display = document.getElementById('generate-display');
    let random = generatePin();
    //onsole.log(random);
    display.value = random;
})