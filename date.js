window.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    let today = new Date();
    let rToday = today.toLocaleString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Europe/London"
    });
    document.getElementById("london-time").textContent = rToday;
  }, 1000);
});

/*
fetch(
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=metric&include=current&key=6LAYSG7XBAAS3UTJGPCCQWYZ8&contentType=json",
  {
    method: "GET",
    headers: {}
  }
)
  .then((response) => {
    if (!response.ok) {
      throw response; //check the http response code and if isn't ok then throw the response as an error
    }

    return response.json(); //parse the result as JSON
  })
  .then((response) => {
    //response now contains parsed JSON ready for use
    console.log(response.currentConditions.temp);
    document.querySelector(
      "#temp"
    ).textContent = `${response.currentConditions.temp}ºC`;
    //processWeatherData(response);
  })
  .catch((errorResponse) => {
    if (errorResponse.text) {
      //additional error information
      errorResponse.text().then((errorMessage) => {
        //errorMessage now returns the response body which includes the full error message
      });
    } else {
      //no additional error information
    }
  });

  */

fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true",
  {
    method: "GET",
    headers: {}
  }
)
  .then((response) => {
    if (!response.ok) {
      throw response; //check the http response code and if isn't ok then throw the response as an error
    }

    return response.json(); //parse the result as JSON
  })
  .then((response) => {
    //response now contains parsed JSON ready for use
    console.log(response);

    document.querySelector(
      "#temp"
    ).textContent = `${response.current_weather.temperature}ºC`;
    //processWeatherData(response);
  })
  .catch((errorResponse) => {
    if (errorResponse.text) {
      //additional error information
      errorResponse.text().then((errorMessage) => {
        //errorMessage now returns the response body which includes the full error message
      });
    } else {
      //no additional error information
    }
  });
