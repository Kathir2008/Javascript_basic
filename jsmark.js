function tamilmark(){
    console.log("       Your Marks       ")
    var tamil_data = document.getElementById('Tamil').value;
    console.log("Your Tamil mark  " + tamil_data)
    var eng_data = document.getElementById('English').value;
    console.log("Your English mark  " + eng_data)
    var math_data = document.getElementById('Maths').value;
    console.log("Your Maths mark  " + math_data)
    var sci_data = document.getElementById('Science').value;
    console.log("Your Science mark  " + sci_data)
    var soc_data = document.getElementById('Social').value;
    console.log("Your Social mark  " + soc_data)
    alert("See your mark in console page ;")
if(tamil_data >= 100  || eng_data >= 100 || math_data >= 100 || sci_data >= 100 || soc_data >= 100){
    alert("Sorry your mark is invalid :(")
}
else if(tamil_data >= 35  && eng_data >= 35 && math_data >= 35 && sci_data >= 35 && soc_data >= 35){
    alert('good you are pass :) your tamil mark: ' + tamil_data + ' English mark : ' + eng_data + ' Maths mark : ' + math_data + ' Science mark :' + sci_data + ' Social mark :' + soc_data)
}
else{
    alert("Sorry you are fail :( try to pass next time")
}
}