var ok1=false
function test(form){
    if (form.text1.value == ""){
        ok1=false
        alert("Введіть ім’я!")
        
    }else if (form.text2.value == ""){
        ok1=false
        alert("Введіть прізвище!")
        
    }else if (!form.text3.value.match(/\+\d{12}/)){
        ok1=false
        alert("Невірно введений номер")


    } else if ((form.text4.value.indexOf('@', 0)<1)||(form.text4.value.indexOf('@',
0)==form.text4.value.length-1)){
        ok1=false
        alert("Невірно введена адреса e-mail")

    }else ok1=true
        if(ok1){alert("Форма заповнена!")}

}