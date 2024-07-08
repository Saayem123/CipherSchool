// .children will return alln the children elements  
const appleList = document.querySelector(".apple-list");
if (appleList) {
  console.log(appleList.children); // Correctly access children property of the element
} else {
  console.log("No element found with class 'apple-list'");
}

const btn1 = document.querySelector(".btn-1");
if (btn1) {
  console.log(btn1.closest("main")); // Correctly call closest on a single element
} else {
  console.log("No element found with class 'btn-1'");
}
