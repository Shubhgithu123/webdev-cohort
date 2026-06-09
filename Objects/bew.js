let user = {
   name: "Shubham",
   greet(){
      console.log("Hello")
   }
}

let cloned = {
   ...structuredClone(user),
   greet: user.greet
}