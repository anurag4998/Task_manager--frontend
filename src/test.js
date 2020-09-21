// var myclass = function (n) {
//   this.n = n;
// };

// myclass.square = function () {
//   return this.n * this.n;
// };

// var object = new myclass(4);
// console.log(object.square());

myclass = function () {
  this.a = "hello";
  this.b = "world";
};

myclass.prototype.a = "john";
myclass.prototype.c = 12;

obj = new myclass();
console.log(obj);
