function Dog() {
	this.catch =[];

}

Dog.prototype.chase = function(cat){
	this.catch.push(cat);
}

module.exports = Dog;