let var1= ["RED", "AND", "WHITE"]
const alter= (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      console.log(arr[i]);
    } else {
      console.log(arr[i].toLowerCase());
    }
  }
};
alter(var1);
