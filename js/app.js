// load data from api
const loadData = (cityName) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fd75739370d96ca45ebf327a5581be52`)
    .then(res=>res.json())
    .then(data=>viewData(data));
}

// view necessary data from api
const viewData = data=>{
    const display = document.getElementById('display');
    display.innerHTML=`
            <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1>${ data.name}</h1>
            <h3><span>${(data.main.temp-273).toFixed(2)}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
    `
}
// deafult call
loadData('Gazipur');

// searching call
const viewInputData = () =>{
const inputField = document.getElementById('inputbox');
const inputText = inputField.value;
inputField.value='';
loadData(inputText)
}
