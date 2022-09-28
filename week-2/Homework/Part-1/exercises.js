/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
  content.innerHTML = arrayOfPeople.map(person => `
      <h1>${person.name}</h1>
      <h2>${person.job}</h2>
      `).join("")
}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let content = document.querySelector("#content");
  let list = document.createElement("ul");
  content.appendChild(list);

  list.innerHTML = shopping.map(product => `<li>${product}</li>`).join("")
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/

function exerciseThree(books) {
  let content = document.querySelector("#content");

  let heading = document.createElement("h1");
  heading.innerText = "Book List";

  let list = document.createElement("ul");
  list.style.listStyle = "none";
  list.style.display = "flex";
  list.style.justifyContent = "space-between";

  content.append(heading, list);

  books[0].image = "../Part-1/1.jpeg"
  books[1].image = "../Part-1/2.jpeg"
  books[2].image = "../Part-1/3.jpeg"

  list.innerHTML = books.map((book) => {
    if (book.alreadyRead) {
      return `
      <li style="background-color: green; width: 30%">
        <p style="text-align: center">${book.title} - ${book.author}</p> 
        <img style="padding: 10px" src=${book.image}>
      </li>`
    } else {
      return `
    <li style="background-color: red; width: 30%"">
      <p style="text-align: center">${book.title} - ${book.author}</p> 
      <img style="padding: 10px" src=${book.image}>
    </li>`
    }
  }).join("");
}



//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [{
    name: "Chris",
    job: "Teacher"
  },
  {
    name: "Joanna",
    job: "Student"
  },
  {
    name: "Boris",
    job: "Prime Minister"
  }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [{
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
