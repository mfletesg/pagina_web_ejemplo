window.addEventListener("load", function(event) {
    let fruta = '🍎';
    btnpush(fruta)
});



function btnpush(fruta){
    switch (fruta) {
        case '🍎':
            console.log('Es una manzana ' + fruta)
            break;
        case '🍏':
            console.log('Es una manzana verde ' + fruta)
            break;
        case '🥑':
            console.log('Es una aguacate ' + fruta)
            break;
        default:
            console.log('No es ninguna fruta')
            break;
    }

        /*
    if(fruta === '🍎'){
        console.log('Es una manzana ' + fruta)
    }
    else{
        console.log('No es una manzana')
    }*/


    let array = ['🍎', '🍏', '🥑', '🍉']
    for (let i = 0; i < array.length; i++) {
        if(array[i] === '🥑'){
            console.log(array[i])
            document.getElementById('emojiFruta').innerHTML = array[i];
            break;
            
        }
    }


    //console.log(array)

}