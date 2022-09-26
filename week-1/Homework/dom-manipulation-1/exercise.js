/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node
    

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

console.log(document.querySelectorAll("p"))
console.log(document.querySelector(".site-header"))
console.log(document.querySelector("#jumbotron-text"))
console.log(document.querySelectorAll(".primary-content p"))


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

document.querySelector("#alertBtn").addEventListener("click", () =>{
 alert("Thanks for visiting Bikes for Refugees!")
})


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
// document.querySelector("#bgrChangeBtn").addEventListener("click", () => {
//     document.body.style.backgroundColor = "green"
// })


/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
// */
document.querySelector("#addTextBtn").addEventListener("click", () => {
    let article = document.createElement("article");
    article.classList.add("article");

    let text = document.createElement("p");
    text.classList.add("article-lead");
    text.innerText = "Many refugees";
    text.style.color= "red"
    article.appendChild(text);

     document.querySelector("#mainArticles").appendChild(article)
     
})



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
document.querySelector("#largerLinksBtn").addEventListener("click", () => {
    document.querySelector(".facebook-link").style.fontSize= "xx-large";
    document.querySelectorAll(".nav-link").forEach((link)  =>{link.style.fontSize= "xx-large" })   
})


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

document.querySelector("#addArticleBtn").addEventListener("click", () => {
    let article = document.createElement("article");
    article.classList.add("article");

    let text = document.createElement("p");
    text.classList.add("article-lead");
    text.style.color= "green";
    text.innerHTML =document.querySelector(".addArticle").value;
    
    article.appendChild(text);
    document.querySelector("#mainArticles").appendChild(article);

     document.querySelector(".addArticle").value= "";
})

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

document.querySelector("#bgrChangeBtn").addEventListener("click", changecolor)

function changecolor() {
    let color = ["green", "red", "grey", "white", "brown"]
    let i = color.indexOf(document.body.style.backgroundColor)
    document.body.style.backgroundColor = color[(i+1) % color.length]

}

