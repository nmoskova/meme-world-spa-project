meme-world-spa-project  
https://meme-world-spa.web.app/

is a Single Page Application created with the knowledge gained through the course JS-Applications at SoftUni.
The idea came from a prep-exam and I decided to develop it. 

For the backend I used Softuni Practice Server -
 https://github.com/softuni-practice-server/softuni-practice-server
 
!! Keep in mind that with every restart of the server all the new data will be wiped.

I deployed server to Heroku and the client-side is deployed to Firebase.


Navigation
If you’re not registered/logged in you’ll see four links – Home, Genres, Login and Register which lead to the relevant pages.
If logged in you’ll see a welcome message with your username – “Welcome, <username>” and five more links -  Home, Genres, Create Meme, My Profile and Logout.

Register
On the register page all fields and check buttons are required except the profile image.
There is link which leads to the login page. 
Give it a try and make your own account. 😊 

Login
On the login page there are two required fields "Email" and "Password" and there is a link to the register page if you don’t have an account yet.

The service is initialized with three users, which can be used for immediate testing:
•	peter@abv.bg : 123456
•	george@abv.bg : 123456
•	admin@abv.bg : admin

Home
Home page shows the whole collection of memes on the server.
At the bottom of the page there is pagination which leads to the same collection of memes separated by 4 on each page.

Details
Each meme card has link to details page on which you can see the meme, comments to the meme, description if any and meme likes.
If user is logged in he can post comments and give likes.
If user is owner of the meme he could see Edit and Delete Buttons which lead to the relative actions.

Edit Meme
This page gives you opportunity to edit your meme.

Genres
This page shows all genres, each one in separate card with a meme and link to a page with all the memes to the corresponding genre.

Create Meme
You can upload a new meme. Choose the genre from a dropdown menu and if there is not relevant for your photo, just create a new genre clicking on the link "Add new genre". After submit page will redirect you again to the Create Meme Page and in the dropdown menu you’ll find the genre you just created.
After uploading the meme you will be redirect to the home page.

My Profile
Shows username, email, memes count and the memes uploaded from the user.

Logout
Things are crystal clear here :)

Hope you liked my small project and please don't judge my poor CSS.  



