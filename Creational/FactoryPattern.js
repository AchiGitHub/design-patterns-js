function Developer(name)
{
  this.name = name
  this.type = "Developer"
}

function Tester(name)
{
  this.name = name
  this.type = "Tester"
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch(type)
    {
      case 1:
        return new Developer(name)
        break
      case 2:
        return new Tester(name)
        break
    }
  }
}

function say() {
  console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("John", 2))
employees.push(employeeFactory.create("Jamie", 1))
employees.push(employeeFactory.create("Taylor", 1))
employees.push(employeeFactory.create("Tim", 2))

employees.forEach( emp => {
  say.call(emp)
})


function Cook(name){
  this.name = name;
  this.type = "Cook";
}

function Chef(name){
  this.name = name;
  this.type = "Chef";
}

function Hotel(){
  this.create = (name, type) => {
    switch(name, type){
      case 1:
        return new Cook(name);
        break;
      case 2: 
        return new Chef(name);
        break;
    }
  }
}

const hotelFactory = new Hotel();
const workers = [];

workers.push(hotelFactory.create("John",1));
workers.push(hotelFactory.create("Patrick",2));
workers.push(hotelFactory.create("Seth",1));

workers.forEach( emp => {
  say.call(emp)
})




