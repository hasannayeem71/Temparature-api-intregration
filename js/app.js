// load data from api
// 
const loadData = (cityName = "gazipur") => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=fd75739370d96ca45ebf327a5581be52`
  )
    .then((res) => res.json())
    .then((data) => viewData(data));
};

// view necessary data from api
const viewData = (data) => {
  console.log(data);
  if (data.cod == 200) {
    const display = document.getElementById("display");
    display.innerHTML = `
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data?.name}</h1>
            <h5>${data.sys.country}</h5>
            <h3><span>${(data?.main?.temp )}</span>&deg;C</h3>
            <h1 class="lead">${data?.weather[0].main}</h1>
    `;
    spinnerToggle("none");
  } else {
    errorToggle("block");
    spinnerToggle("none");
  }
};

// searching call
const viewInputData = () => {
  errorToggle("none");

  const inputField = document.getElementById("inputbox");
  const inputText = inputField.value;
  inputField.value = "";
  loadData(inputText);
  spinnerToggle("block");
};

//spinner
const spinnerToggle = (displayStyle) => {
  document.getElementById("spinner").style.display = displayStyle;
};
// error toggle
const errorToggle = (displayStyle) => {
  document.getElementById("error").style.display = displayStyle;
};
// deafult call
loadData();
