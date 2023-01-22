let button = document.getElementById("myBtn");
let div = document.getElementById("result");

let planetsButton = document.getElementById("planetsButton");
let divPlanets = document.getElementById("planetsDiv");

function getSwapiPeople(){
    $.ajax({
        url: "https://swapi.dev/api/people",
        method: "GET",

        success: function(response){
            console.log(response);
            console.log("Results retrieved");
            printResults(response.results);
        },

        error: function(error){
            console.error(error)
        }
    })
}


button.addEventListener("click", function(){
    getSwapiPeople()
})

function printResults(charactersArray){
    console.log(charactersArray);
    div.innerHTML = "";

    div.innerHTML += `
      <h3>Character Name is: ${charactersArray[0].name} <br/>
      Character height : ${charactersArray[0].height} <br/>
      Character mass: ${charactersArray[0].mass} <br/>
      Character hair color: ${charactersArray[0].hair_color} </h3>
      `
  
    
  }

  function getSwapiPlanets(){
    $.ajax({
        url: "https://swapi.dev/api/planets",
        method: "GET",

        success: function(response){
            console.log(response)
            console.log("Results retrieved")
            getPlanets(response.results)

        },

        error: function(error){
            console.error(error)
        }
    })
  }
 planetsButton.addEventListener("click", function(){
    getSwapiPlanets()
 });

function getPlanets(planetsArray){
    console.log(planetsArray)
    divPlanets.innerHTML = ""

    // divPlanets.innerHTML = JSON.stringify(planetsArray)

    for(let i = 0; i < planetsArray.length; i++){
        divPlanets.innerHTML += `
    <h3>Planet name is: ${planetsArray[i].name} </h3>
    `
    }
}
//Didnt understand if we should print just the planets (like just the names) or all the info from the planets