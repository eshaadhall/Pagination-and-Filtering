/******************************************
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const mainPage = document.querySelectorAll('.page');
var ul = document.querySelector('.student-list');
var studentList = ul.children;
var header = document.querySelector('.page-header');
var h2 = header.querySelector('h2');
/* ----- Exceeds Expectation Search field add the search button dynamically ------ */
let searchDiv = document.createElement("div");
searchDiv.className = "student-search";
let searchInput = document.createElement("input");
searchInput.placeholder = "Search for students...";
const searchButton = document.createElement("button");
searchButton.textContent = "Search";
searchDiv.append(searchInput);
searchDiv.append(searchButton);

const addToDiv = document.querySelector('.page-header');
addToDiv.appendChild(searchDiv);

document.addEventListener("load",showPage(studentList, 1));
document.addEventListener("load",appendPageLinks(studentList));


// showpage(page number, student list) to  hide all students in the list excpet for the ten you want to show per page
function showPage(studentList, pages){
  // ul.innerHTML = "";
  hideStudents(studentList); // to hide all of the items in the list
  var studentsToShow = (pages * 10);
// to display only the students on the selected page.
console.log(studentsToShow);
  for(let i=0; i< studentList.length; i++){
    if(i >= (studentsToShow-10) && i<studentsToShow){ // show students from this number for the page selected (for example : page #2 : show from index 10 to index 19)
          studentList[i].style.display = ""; // this give an error when called from searchList(keyWord); function. Line134
         }
       }
  }

function hideStudents(studentList){
   // to hide all of the items in the list
  for(var i=0; i<studentList.length; i++){
    studentList[i].style.display = "none";
  }
}

// Create and append the pagination links
function appendPageLinks(studentList){
    ul.style.display = "";
    if(document.querySelector('.pagination')){
    document.querySelector('.pagination').style.display="";
    }
  h2.innerHTML = "Students";
  let numberOfStudents = studentList.length;
  let pages = Math.ceil(numberOfStudents/10); // number of pages
/*---- create page link section ------*/
   // to remove the old page link
   removePagination();
// call the function createPages(total number of pages to be created) to add the page link section for every page.
   createPages(pages);
/*---- to add functionality to the pagination buttons so that they show and hide the correct items. ----*/
   var paginationDiv = document.querySelector('.pagination');
   var paginationUl = paginationDiv.querySelector('ul');
   var paginationLi = paginationUl.children;
  paginationUl.onclick= function(event){
// Onclick on a page number button, the active class is removed from the a tag and added to the new clicked(selected) a tag.
    for(let i=0; i<pages; i++)
    {
      if(paginationLi[i].children[0].className==="active")
      {
        paginationLi[i].children[0].classList.remove("active");
      }
    }
    event.target.classList.add('active');
    var selectedPageNumber = event.target.textContent;
    showPage(studentList, selectedPageNumber);
  }
   showPage(studentList, 1);
}

// to remove the pagination section
function removePagination(){
  let pagination = document.querySelector('.pagination')
  if(pagination){
     pagination.parentNode.removeChild(pagination);
     }
}

// to create pagination(page numbers)
function createPages(pages){
  let div = document.createElement("div");
  div.className = "pagination"; // add the class = pagination to the <div>
  var ul = document.createElement("ul");   // create <ul> tag
  div.append(ul); // append the <ul> to the <div>

  // add the page link section for every page
  for(let i=0; i<=pages-1; i++){
     var li = document.createElement("li");
     var a = document.createElement("a");
     a.innerHTML = i+1;
     a.href = "#"+(i+1);
     li.append(a);
     ul.append(li);
  }
  // by default give the first pagination link class "active"
  var paginationLi = ul.children[0];
  var a1 = paginationLi.children[0];
  a1.classList.add("active");
// append the pagination div to the HTML
  let mainDiv = document.querySelector('.page');
  mainDiv.appendChild(div);
}

/*--------- Exceeds Expectation ------*/

// jquery code for onclick.
// on click or keyup to search students with the search content entered by the user
// $('.student-search').on('click','button', function(e){
//    // console.log("hello");
//    searchKeyword(e);
// }).on('click keyup' ,'input', function(e){
//   searchKeyword(e);
// });

// javascript for onclick and keyup events on the Search input and button.

// on click and keyup events when user tries to Search a student name or email.
searchInput.addEventListener("keyup", function(e){
    let keyWord = e.target.value.toLowerCase();
    searchList(keyWord);
})
searchButton.addEventListener("click", function(event){
  let keyWord1 = searchInput.value;
  searchList(keyWord1);
} );

function searchList(keyWord){
  var list = document.querySelector('.student-list');
  var li = ul.children;
  var count = 0;
  var selectedList=[];
  for(let i=0; i<li.length; i++){

     var liDiv = li[i].children[0];
     var name = liDiv.children[1].textContent;
     var email = liDiv.children[2].textContent;
     if(name.indexOf(keyWord)>-1 || email.indexOf(keyWord)>-1){
     li[i].style.display = "";
     count += 1; // number of students
     selectedList.push(li[i]);
     }
     else {
      li[i].style.display = "none";
     }
  } // end for loop.
    if (selectedList.length === 0) { // if no results found.
      h2.innerHTML = "No Results Found";
      ul.style.display = "none";
      document.querySelector('.pagination').style.display="none";
   } else{
     showPage(selectedList, 1);
     appendPageLinks(selectedList);
   }


}
document.addEventListener("load",showPage(studentList, 1));
document.addEventListener("load",appendPageLinks(studentList));




// call the search() to exceeds Expectation add the search button dynamically
// search();
// to add the search button dynamically
/*function search(){
   let searchDiv = document.createElement("div");
   searchDiv.className = "student-search";
   let searchInput = document.createElement("input");
   searchInput.placeholder = "Search for students...";
   const searchButton = document.createElement("button");
   searchButton.textContent = "Search";
   searchDiv.append(searchInput);
   searchDiv.append(searchButton);

   const addToDiv = document.querySelector('.page-header');
   addToDiv.appendChild(searchDiv);
}*/

// var studentSearchDiv = document.querySelector('.student-search');
//var searchButton = studentSearchDiv.children[1];
// var input = document.querySelector('input');
