const roll = () => {
  let img;
  let dice = document.getElementById("dice");
  let d1 = Math.floor(Math.random() * 6) + 1;

  document.getElementById("dice").innerHTML = "<img src = 'assets/" + d1 + ".jpeg'/>";
};
