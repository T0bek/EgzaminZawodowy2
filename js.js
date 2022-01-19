let button = document.getElementById('sprawdz');
let patterngood = /^([a-z 0-9]{7,})$/;
let patternmedium = /^([a-z 0-9]{4,6})$/;
button.addEventListener('click',function(){
    let password = document.getElementById('password').value;
    if(patterngood.test(password)){
        document.getElementById("alert").innerHTML = ("Dobre!");
        document.getElementById('alert').style.color = 'green';
    }else if(patternmedium.test(password)){
        document.getElementById("alert").innerHTML = ("Średnie!");
        document.getElementById('alert').style.color = 'blue';
    }else if(password == ""){
        document.getElementById("alert").innerHTML = ("WPISZ HASŁO!");
        document.getElementById('alert').style.color = 'red';
    }else{
        document.getElementById("alert").innerHTML = ("Słabe!");
        document.getElementById('alert').style.color = 'yellow';
    }
})
