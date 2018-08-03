// Add variables that store DOM elements you will need to reference and/or manipulate
const mainPage = document.querySelectorAll('.page');
var ul = document.querySelector('.student-list');
var studentList = ul.children;

showPage(studentList, 1);
appendPageLinks(studentList);

function showPage(studentList1, pages){
  hideStudents(studentList1); // to hide all of the items in the list
  var studentsToShow = (pages * 10)-1;
// to display only the students on the selected page.
console.log(studentsToShow);
  for(let i=0; i<= studentList1.length+1; i++){
    if(i >= (studentsToShow-10) && i< studentsToShow){ // show students from this number for the page selected (for example : page #2 : show from index 10 to index 19)
      if(studentList1[i] !== ""){
        console.log(studentList1[i]);
          studentList1[i].style.display = ""; // this give an error when called from searchList(keyWord); function. Line134
         }
       }
  }
}

function hideStudents(studentList){
   // to hide all of the items in the list
  for(var i=0; i<studentList.length; i++){
    studentList[i].style.display = "none";
  }
}
//showPage(studentList, 1);


// Create and append the pagination links - Creating a function that can do this is a good approach

function appendPageLinks(studentList){

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
  paginationUl.onclick= function(event){
    var a = document.querySelector('a');
    a.classList.remove("active");
    event.target.classList.add = 'active';
    var selectedPageNumber = event.target.textContent;
    showPage(studentList, selectedPageNumber);
    //console.log(selectedPageNumber);
  }




  // $('.pagination ul').on('click','li', function(e){
  //   $('a').removeClass();
  //   $(e.target).addClass("active");
  //   var selectedPageNumber = $(e.target).text();
  //   showPage(studentList, selectedPageNumber);
  // });
}

function removePagination(){
  let pagination = document.querySelector('.pagination')
  if(pagination){
     pagination.parentNode.removeChild(pagination);
     }
}

function createPages(pages){
  let div = document.createElement("div");
   // add the class = pagination to the <div>
  div.className = "pagination";
  // create <ul> tag
  var ul = document.createElement("ul");
  // append the <ul> to the <div>
  div.append(ul);
  // add the page link section for every page
  for(let i=0; i<=pages-1; i++){
     var li = document.createElement("li");
     var a = document.createElement("a");
     a.text = i+1;
     a.href = "#"+(i+1);
     li.append(a);
     ul.append(li);
  }
  // by default give the first pagination link class "active"
  //var firstLi = ul.firstElementChild;
  //var aFirst = firstLi.firstElementChild;
  //aFirst.setAttribute("class", "active");
  // console.log();
  let mainDiv = document.querySelector('.page');
  mainDiv.appendChild(div);
}

/*--------- Exceeds Expectation ------*/
// call the search() to exceeds Expectation add the search button dynamically
search();
// to add the search button dynamically
function search(){
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
}

// on click or keyup to search students with the search content entered by the user
$('.student-search').on('click','button', function(){
   // console.log("hello");
   searchKeyword();
}).on('click keyup' ,'input', function(){
  searchKeyword();
});

function searchKeyword(){
   var input = document.querySelector('.student-search input');
   let keyWord = input.value.toLowerCase();
   console.log(keyWord);
   // search which li name or email includes the following keyWord
   searchList(keyWord);
}

function searchList(keyWord){
  var ul = document.querySelector('.student-list');
  var li = ul.children;
  var count = 0;
  var selectedList=[];
  // console.log(li.children);
  for(let i=0; i<li.length; i++){

     var liDiv = li[i].children[0];
     var name = liDiv.children[1].textContent;
     var email = liDiv.children[2].textContent;
     var firstNameEmail = email.substring(0, email.indexOf('@')).substring(0, email.indexOf('.'));
     var lastNameEmail = email.substring(0, email.indexOf('@')).substring(1, email.indexOf('.'));
     if(name.indexOf(keyWord)>-1){
     li[i].style.display = "";
     count += 1; // number of students
     selectedList.push(li[i]);
     }
     else {
      li[i].style.display = "none";
     }
     //console.log("Selected List" , selectedList);
      showPage(selectedList, 1);
      appendPageLinks(selectedList);
  }
}
