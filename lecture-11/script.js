let array = [];

const uimaker = () => {
  document.getElementById("s").innerHTML = "";
  array.map((ele) => {
    let name = document.createElement("p");
    name.innerHTML = ele.name;
    let course = document.createElement("p");
    course.innerHTML = ele.course;
    let grid = document.createElement("p");
    grid.innerHTML = ele.grid;
    document.getElementById("s").append(name,course,grid)
  });
};

const std = (e) => {
  e.preventDefault();
  let student = {
    name: document.getElementById("name").value,
    course: document.getElementById("course").value,
    grid: document.getElementById("grid").value,
  };
  array.push(student);
  uimaker();
};

document.getElementById("stddata").addEventListener("submit", std);
