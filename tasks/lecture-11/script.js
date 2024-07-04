let array = [];

//6 step to show in ui so make a funstion
const uimaker = () => {
  //7 step clear previos dat to use innerhtml
  document.getElementById("printui").innerHTML = "";
  //8 step make a lopp and creat alement and recive data and last uppend all data
  array.map((ele) => {
    let name = document.createElement("p");
    name.innerHTML = ele.name
    let course = document.createElement("p");
    course.innerHTML = ele.course;
    let grid = document.createElement("h1");
    grid.innerHTML = ele.grid;
    document.getElementById("printui").append(name,course,grid)
  });
};


// 2 step make a function
const std = (e) => {
  // 3 step hold screen so use  e.preventDefault(); e is given paramiter in function
  e.preventDefault();
  // 4 step make object
  let student = {
    name: document.getElementById("name").value,
    course: document.getElementById("course").value,
    grid: document.getElementById("grid").value,
  };
  //5 step make a array and take data from object(student) note:only show in console
  array.push(student);
  // 9 step call secfunction (uimaker)
  uimaker();
};


// 1 stap
document.getElementById("stddata").addEventListener("submit", std);
