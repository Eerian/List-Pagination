/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
//Select all students by class name.
const students = document.getElementsByClassName('student-item');


// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

const showPage = (list, page) => {
    // loop over items in the list parameter
    for (let i = 0; i < list.length; i++) {
        // if the index of a list item is >= the index of the first item that should be shown on
        //the page, && the list item index is <= the index of the last item that should be shown on
        //the page, show it. Else hide them.
        // console.log(1 * 10 + ' and ' + ((2 * 10) + (10)));
        if (i >= page * 10 && i <= ((page * 10) + (9))) {
            list[i].style.display = 'block';
        } else {
            list[i].style.display = 'none';
        }
    }
}


// Create and append the pagination links - Creating a function that can do this is a good approach

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here



const appendPageLinks = (list) => {
        // if pagination already exists, remove it
        // determine how many pages are needed for the list by dividing the total number
        //of list items by the max number of items per page
        let pages = Math.floor(list.length / 10) + 1;
        // create a div, give it the “pagination” class, and append it to the .page div
        let newDiv = document.createElement('div');
        newDiv.className = 'pagination';
        let pageDiv = document.getElementsByClassName('page');
        pageDiv.appendChild(newDiv);
        // add a ul to the “pagination” div

        // for every page

        // add li and a tags with the page number text
        // add an event listener to each a tag, or add an event listener to the pagination div,
        //and use event delegation to target the a tags to define what happens they are clicked
        // calls the showPage function to display the appropriate page
        // loop over pagination links to remove active class from all
        // add the active class to the link that was just clicked, otherwise known as the
        //event.target
        //
    }
    // appendPageLinks(students);




// for (let i = 0; i < students.length; i++){
//   students[i].style.display =  'none';
// }


let pagess = Math.floor(students.length / 10) + 1;

let pageDiv = document.querySelector('.page');
let paginationDiv = document.createElement('div');
paginationDiv.className = 'pagination';
pageDiv.appendChild(paginationDiv);
let pageNumbersUL = document.createElement('UL');
paginationDiv.appendChild(pageNumbersUL);
let listNumbers = 1;
for (let i = 0; i < pagess; i++) {
    let pageNumbersLI = document.createElement('LI');
    let pageNumbersLink = document.createElement('a');
    pageNumbersLink.textContent = listNumbers;
    pageNumbersLink.setAttribute('href', '#');
    pageNumbersUL.appendChild(pageNumbersLI);
    pageNumbersLI.appendChild(pageNumbersLink);
    listNumbers++;

};


let allLinks = document.querySelectorAll('a');
for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click', (event) => {
        showPage(students, i);
        for (let i = 0; i < allLinks.length; i++) {
            allLinks[i].classList.remove('active');
        }
        event.target.className = 'active';
    });

}

// let allLinks = document.querySelectorAll('a');
// for (let i = 0; i < allLinks.length; i++){
//       console.log(allLinks[i].);
// }




// pageNumbersUL.addEventListener('click', (event) => {
//   if (event.target.tagName == 'A'){
//     let pageNumber = event.target.textContent;
//     showPage(students, pageNumber);
//   } 

// })