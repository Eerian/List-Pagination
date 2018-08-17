/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//Select all students by class name.
const students = document.getElementsByClassName('student-item');


// Create a function to hide all of the items in the list excpet for the ten you want to show
const showPage = (list, page) => {
        // loop over items in the list parameter
        for (let i = 0; i < list.length; i++) {
            // if the index of a list item is >= the index of the first item that should be shown on
            //the page, && the list item index is <= the index of the last item that should be shown on
            //the page, show it. Else hide them.
            if (i >= page * 10 && i <= ((page * 10) + (9))) { // starts at index 0 - 9
                list[i].style.display = 'block';
            } else {
                list[i].style.display = 'none';
            }
        }
    }
    //when page first loads, start at page 1 which has an index 0 from the allLinks loop at the bottom.
showPage(students, 0);


// Creates and appends the pagination links
// Add functionality to the pagination buttons so that they show and hide the correct items
const appendPageLinks = (list) => {
    //calculate amout of pages needed: Devide total list number by amout you want to show on page;
    let pages = Math.ceil(list.length / 10);

    //create a div, give it the “pagination” class, and append it to the .page div
    let pageDiv = document.querySelector('.page');
    let paginationDiv = document.createElement('div');
    paginationDiv.className = 'pagination';
    pageDiv.appendChild(paginationDiv);

    // add a ul to the “pagination” div
    let pageNumbersUL = document.createElement('UL');
    paginationDiv.appendChild(pageNumbersUL);

    // for every page
    // add li and a tags with the page number text
    // add an event listener to each a tag to define what happens they are clicked
    let listNumbers = 1; //keep track of numbers on the links starting at 1.

    for (let i = 0; i < pages; i++) {
        let pageNumbersLI = document.createElement('LI');
        let pageNumbersLink = document.createElement('a');
        pageNumbersLink.textContent = listNumbers;
        pageNumbersLink.setAttribute('href', '#');
        pageNumbersUL.appendChild(pageNumbersLI);
        pageNumbersLI.appendChild(pageNumbersLink);
        listNumbers++;

    };

    //select all links
    let allLinks = document.querySelectorAll('a');
    //loop through links and add eventlistener to all
    //get 'page' index for the showPage function
    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].addEventListener('click', (event) => {
            //call showPage function to display appropriate number of list items
            showPage(students, i);
            //remove 'active' class from all links
            for (let i = 0; i < allLinks.length; i++) {
                allLinks[i].classList.remove('active');
            }
            //add 'active' class to selected link
            event.target.className = 'active';
        });
    }
}
appendPageLinks(students);