// class User{
//     constructor(username, password){
//         this.username = username;
//         this.password = password;
//     }

//     get password(){
//         return this.password.replace(/./g, "*");
//     }

//     set Password(checkpass){
//         if(checkpass.length>=8 && /\d/.test(checkpass) && /[A-Z]/.test(checkpass)){
//             return this.password = checkpass;
//         }
//         else{
//             console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter ")
//         }
//     }
// }

// const user = new User("Tanjim", "Tanjim@1223");
// console.log(user.password);



class User {
    constructor(username, password) {
      this.username = username;
      this._password = password; // using _password instead of password
    }
  
    get password() {
      return this._password.replace(/./g, "*");
    }
  
    set Password(checkpass) {
      if (checkpass.length >= 8 && /\d/.test(checkpass) && /[A-Z]/.test(checkpass)) {
        this._password = checkpass;
      } else {
        console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter ");
      }
    }
  }
  
  const user = new User("Tanjim", "anjim");
  console.log(user.password); 
  
  