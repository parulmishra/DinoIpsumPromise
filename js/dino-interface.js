// var apiKey = require('./../.env').apiKey;

$(document).ready(function(){

  $("#dino").click(function(){
    let value1 = $("#paragraphs").val();
    let value2 = $("#words").val();

    let promise = new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url =
      `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${value1}&words=${value2}`;
      request.onload = function()
      {
        if(this.status === 200)
        {
          resolve(request.response);
        }
        else
        {
          reject(Error(request.statusText));
        }
      };
      request.open("GET",url,true);
      request.send();
    });

    promise.then(function(response){
      let body = JSON.parse(response);
      console.log(body);
      $(".showdinos").text(`Your dinos ${body}`);
    }, function(error)
    {
      $(".showerrors").text(`There was an error processing your request: ${error.message}`);
    });
  });
});
