let form=document.querySelector("form")
form.addEventListener("submit",(e) => {
    let name=e.target.name.value;
    let emial=e.target.email.value;
    let number=e.target.number.value;
    console.log(name,emial,number);
    e.preventDefault();
alert("hello")

});