let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below


// adding a updating the object(fuel type) value from Turbo fuel to avocado oil
function greenEnergy(obj){
  obj ['Fuel Type'] = 'avocado oil'
}

// adiing a new object value
function remotelyDisable(objP){
  objP.disabled = true
  }

  //calling the two function
greenEnergy(spaceship);
remotelyDisable(spaceship)


//logging to the console spaceship with the new objects added
console.log(spaceship)
