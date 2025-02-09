const user = {
  name: "Md Ehtesham",
  greet: function (){
    return `Hello, ${this.name}`
  }
}

console.log(user.greet());