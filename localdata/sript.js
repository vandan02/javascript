let form=document.querySelector("form")
form.addEventListener("submit",(e) => {
    let name=e.target.name.value;
    let email=e.target.email.value;
    let number=e.target.number.value;
    console.log(name,email,number);
    e.preventDefault();
alert("hello")
});