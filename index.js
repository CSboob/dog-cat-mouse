var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');


var dog = new Dog('Jack');
var tom = new Cat('Tom');
var jerry = new Mouse('jerry');

dog.chase(tom);

tom.eat(jerry)

 console.log(dog);