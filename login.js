document.addEventListener("DOMContentLoaded",()=>{

  const form=document.getElementById("loginForm");
  const error=document.getElementById("error");

  form.addEventListener("submit",(e)=>{
    e.preventDefault();

    error.textContent=
      "Username and/or password does not exist.";
  });

});
