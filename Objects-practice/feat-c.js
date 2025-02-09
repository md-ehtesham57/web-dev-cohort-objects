const user = {
  name: "Md Ehtesham",
  greet: function (){
    return `Hello, ${this.name}`
  }
}

// console.log(user.greet());

const laptop = {
  brand: "HP",
  series: "Gaming",
  processor: "i7",
  price: 56000,
  gpu: "GTX1650",
  battery: "Li-Po",
  origin: "China",

  describe: function (){
    return "This is a Dell XPS 16GB laptop"
  }
}

console.log(laptop.describe());