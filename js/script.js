const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};
// Call the function to check it works
cat.complain();

// Question 2

let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");
// Check if class was added correctly
console.log(heading); //or console.dir(heading);

// Question 5

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6

let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p> New paragraph </p>`;
resultsContainer.style.backgroundColor = "yellow";

// Question 7

function myCatsList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

myCatsList(cats);

// Question 8

function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let catAge = "Age unknown";

    if (cats[i].age) {
      catAge = cats[i].age;
    }
    html += `<div>
               <h5>${cats[i].name}</h5>
               <p>${catAge}</p>
               </div>`;
  }
  return html;
}

let newCats = createCats(cats);

let newContent = document.querySelector(".cat-container");
newContent.innerHTML = newCats;
