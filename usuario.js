window.addEventListener("load", function(event) {
    let fruta = '🍎';
    btnpush(fruta);
    getRockBands();
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


async function getRockBands(){
    const settings = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    };
    const response = await fetch('https://miguelfletes.com/api/api-bandas', settings);
    const data = await response.json();
    console.log(data);

    console.log(data.length)

    let html = '';
    for (let i = 0; i < data.length; i++) {
        // if(i === 1){
        //     console.log(data[i]);
        //     break;
        // }
        //const banda = array[i];  
        html += '<tr>\
                    <td scope="col">'+(i + 1)+'</td>\
                    <td scope="col">'+data[i].banda+'</td>\
                    <td scope="col">'+data[i].logo+'</td>\
                </tr>';
           
    }

    document.getElementById('contentTable').innerHTML = html;

    console.log(html)

}