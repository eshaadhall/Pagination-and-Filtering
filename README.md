# Pagination and Filtering 8/5/2018

This Project is in Javascript.

Pagination.
For a list of students, this project will add pagination so that only 10 students are listed at a time and users can click through to see them.
Pagination links are created. If there are 44 students, 5 links should be generated, if there’s 66 students, 7 links should be generated. Etc.
The first 10 students are shown when the page loads, and each pagination link displays the correct students.
Clicking on “1” in the pagination links should show students 1 to 10. Clicking “2” shows 11 to 20. Clicking “5” shows students 41 to 50, and so on.

Search Feature - Filtering
Also, there is an additional Search feature so that the user can search through the listings to find students that match or revert back to the complete listing.
Pagination links display based on how many search results are returned. For example: if 10 or fewer results are returned, 0 or 1 pagination links are displayed.
If 22 search results are returned, 3 pagination links are displayed.
When a search yields 0 results, a message is displayed on the page informing the user that no results have been found.

There are example html files with a list of 64 and 44 students in the examples folder.

Note:
This project, uses unobtrusive JavaScript to append markup for the pagination links. So none of the pagination link's markup is added into the HTML.
Use unobtrusive JavaScript to append HTML for a search bar.