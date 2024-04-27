//selector

let button = document.getElementById('button');
let hTag = document.getElementById('hTag');


//event
button.addEventListener('click', buttonClick);


function buttonClick(event){
    console.log(button);
    axios.request({
        url: 'https://api.openbrewerydb.org/breweries/random',
        params: {
            s:'brewery'

        }
    }).then(getSuccess).catch(getFailure)
}


//success function
function getSuccess(response){
    if(response.status === 200){
    console.log(response);
    let data = response.data
    for(let i = 0; i < data.length; i++){
        let datas = data[i]
        console.log(datas);
        hTag.insertAdjacentHTML('beforeend', `
        Bewery: ${datas.brewery_type}
        Address: ${datas.address_1}
        `)
      

    }
 }
}

//failure function
function getFailure(error){
    console.log(error);
    document.body.insertAdjacentHTML('beforeend', '<h3>THERE IS AN ERROR</h3>')
}






//selector
let button_one = document.getElementById('btn');

//event
button_one.addEventListener('click', clickButton);


function clickButton(event){
    console.log(button_one);

    axios.request({
        url: 'https://api2.binance.com/api/v3/ticker/24hr',
        params: {
            s: 'symbol'
        }
    }).then(successFunction).catch(failureFunction)
}


function successFunction(response){
    console.log(response)
    if(response.status === 200){
        let data = response.data
        for(let i = 0; i < data.length; i++){ 
            let data_one = data[i]
            console.log(data_one);

        }

    }
}


function failureFunction(error){
    console.log(error);
    document.body.insertAdjacentHTML('beforeend', '<h2 style="color:red" >THERE IS AN ERROR</h2>')
}