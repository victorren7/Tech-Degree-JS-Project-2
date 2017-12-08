const pageList = document.querySelector('.student-list');
const eachStudent = pageList.children;
const buttonDiv = document.querySelector('.pagination');
const buttonUl = buttonDiv.querySelector('ul');
const studentsPerPage = 10;
 //const searchDiv = document.querySelector('.page-header');
 const noResultDiv = document.querySelector('.page-header');
 const pageHeaderDiv = document.querySelector('.page-header');

var searchButton = document.createElement('button');
searchButton.setAttribute('class', 'student-search')
var searchInput = document.createElement('input');
searchInput.setAttribute('placeholder', 'Search Students');
var noResult = document.createElement('div');
noResult.setAttribute= ('class', 'noResultDiv');
pageHeaderDiv.appendChild(noResult);

// function change(){
//   document.getElementByClass(“pagination”).innerHTML;
// }


// var pagination = document.createElement('div');
// const page = document.createElementById(".page")
// pagination.setAttribute("id", "pagination");
// div.appendChild("pagination");

function showSearch() {
searchButton.textContent = 'Search';
searchButton.setAttribute('placeholder', 'search up Students...');
pageHeaderDiv.appendChild(searchButton);
pageHeaderDiv.appendChild(searchInput);
}


// Function to determine number of pages based on number of students
function numberOfPages() {
    let pages = Math.ceil(eachStudent.length / studentsPerPage);
    return pages;
}

// Function to automatically show first ten students when page loads
function showFirstTen() {
    for (let i = 0; i < eachStudent.length; i++) {
        if (i < studentsPerPage) {
            eachStudent[i].style.display = '';
        } else {
            eachStudent[i].style.display = 'none';
        }
    }
}

// Function to display search box dynamically
// let searchInput = document.createElement('input');
// let searchButton = document.createElement('button');
// function showSearch() {
//     searchInput.placeholder = 'Student Search...';
//     searchButton.textContent = 'Search';
//     searchDiv.appendChild(searchInput);
//     searchDiv.appendChild(searchButton);
// }


// Array to hold number of hidden students
const searchResults = [];
searchButton.addEventListener('click', () => {
    let filter = searchInput.value.toLowerCase();
    searchResults.length = 0;
    for (let i = 0; i < eachStudent.length; i++) {
        if (eachStudent[i].innerHTML.indexOf(filter) > -1) {
            eachStudent[i].style.display = '';

        } else {
            eachStudent[i].style.display = 'none';
            searchResults.push(i);
        }
    }
    // If all students are hidden, a 'not found' message is displayed
    if (searchResults.length === eachStudent.length) {
        noResultDiv.innerHTML = '<h1> Not found</h1>';
    } else {
        noResultDiv.innerHTML = '';
    }
});

for (let i = 1; i <= numberOfPages(); i++) {
    let pageli = document.createElement('li');
    let pageLink = document.createElement('a');
    //pageLink.className = '';
    pageLink.href = '#';
    pageLink.textContent = i;
    buttonUl.appendChild(pageli);
    pageli.appendChild(pageLink);
}

// Divide students between pages
buttonDiv.addEventListener('click', (event) => {
    noResultDiv.innerHTML = '';
    let buttonNumber = parseInt(event.target.textContent);
    let max = buttonNumber * 10;
    let min = max - 10;
    for (let i = 0; i < eachStudent.length; i++) {
        if (i >= min && i < max) {
            eachStudent[i].style.display = '';
        }  else {
            eachStudent[i].style.display = 'none';
        }
    }
});


// Shows the first ten students
showFirstTen();

// Function call to show search box if JavaScript is enabled
showSearch();
