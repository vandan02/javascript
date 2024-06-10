let form=document.querySelector("form")
form.addEventListener("submit",(e) => {
    e.preventDefault();
    let name=e.target.name.value;
    let email=e.target.email.value;
    let number=e.target.number.value;

});