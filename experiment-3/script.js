const loginform =
 document.getElementById("loginform");
 loginform.addEventListener(
    "submit",
   function(event){
    event.preventDefault();
   const email =
   document.getElementById("email").value.trim();
   const password =
   document.getElementById("password").value;
   
   if (email ===""){
    alert("please enter your email,");
      return;
   }
   if(email.includes(" ")){
    alert("email should contain spaces,");
    return;
   }
   if(!email.includes("@")){
    alert("email must contain @ syambol,");
    return;
   }
   if(!email.includes(".")){
    alert("email must contain a dot,");
    return;
   }
   if (password===""){
     alert("please enter the password,");
    return;
   }
   if(!password.length<6){
     alert("password should contain atleast 6 characters,");
    return;
   }
   if(!password.length>15){
     alert("password cannot exceed  15 characters,");
    return;
   }
   if(password.includes(" ")){
    alert("password should not contain spaces,");
    return;
   }
   if(!/[A-Z]/.test(password)){
    alert("password must contain atleast one capital character,");
    return;
   }
   if(!/[a-z]/.test(password)){
    alert("password must contain lower letter,");
    return;
   }
   if(!/[0-9]/.test(password)){
    alert("password must contain atleast one number,");
    return;
   }
   if(!/[!@#$%&^*]/.test(password)){
    alert("password must contain atleast one special character,");
    return;
   }
    alert("login successfull!");
  }
 );

