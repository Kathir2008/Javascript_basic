var pin_value = "1234"
function bankFunction(){
    var pin_data = document.getElementById('data').value;
    if(pin_data == pin_value){
        document.write('<h1>Welcome to bank page</h1>')
    }
    else{
        iziToast.warning({
            title: 'Sorry!',
            message: 'The atm pin is incorrect , plz try again .',
            position: 'topCenter'
        });
    }p  
}