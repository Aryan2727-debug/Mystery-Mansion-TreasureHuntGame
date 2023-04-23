
## GENERAL INFORMATION AND SCOPE OF THE PROJECT :-

This is a Treasure Hunt Game titled - <ins>**'Mystery Mansion'**</ins>, which is used to test the different soft skills of the users. The basic scope and target of this application is to analyze the thinking ability, attention to detail and the focus power of the users. This game/puzzle interacts with the users in a seamless and effective manner, so as to provide the best user experience. By playing this game, the users get to know their own capabilities and cognitive skills, which they can sharpen so as to apply them in the corporate world.

## TECHNICAL INFORMATION :-

    i) Frontend and Backend Informtation :-

        1) This application is created using HTML, CSS, Node.js, Express.js, MongoDB, Mongoose.js, EJS and Three.js.
        2) I have used the MongoDB Atlas Database to store the data of the users who play the game.
        3) Node.js is used to create the Frontend as well as the Backend.
        4) Express.js is used to create a server for the Backend.
        5) Mongoose.js has been used to establish a connection between Node.js and MongoDB Atlas.
        6) I have used the EJS Template Engine to create the files for the Frontend as well as importing data from the MongoDB Atlas into my project.

    ii) Game Logic Information :-
    
        1) I have used the Three.js technology to create the logic of the Treasure Hunt Game.
        2) The controls of the Game are defined in the 'virtualjoystick.js' file. We can control the game using the mouse and the trackpad.
        3) Multiple images of different objects have been used in the game, these images are present in the 'items' folder.
        4) The CSS of the game is defined inside the 'game-style.css' file.
        5) To place the different images across the game, I have defined the logic inside the 'items.js' file.
        6) To move around different directions in a 3D-like Panoramic way, the logic is defined inside the 'panoram.js' file. 
        7) A calm and soothening music has also been used inside the game.
        8) A timer is present in the form of a hourglass. On the expiration of the timer (3 minutes), the game will be over and an alert will be displayed.
        
    iii) Game Scenery Information :- 
        1) For the location of the objects I applied Plane Geometry.
        2) For drawing the environment I used Sphere Geometry.
        3) The selection of the objects is done using Raycaster.
        4) The list of items to select is present on the top of the screen.


## STEPS TO RUN THE APPLICATION :-

i) Navigate to the **'project'** directory using the command - 

  # cd project

ii) Install all the necessary packages and dependencies with the command -

  # npm install

iii) After this, navigate to the **'src'** directory using the command - 

  # cd src

iv) To run the application, use the following command - 

  # node app.js
  <br>
  
# The Application is also Deployed on Cyclic under the following URL -  https://mystery-mansion-game.cyclic.app/

<br><br>

## PACKAGES AND DEPENDENCIES USED IN THE APPLICATION :-

This project has been configured with the help of <ins>**NPM (Node Package Manager)**</ins>. All of the packages that have been used in this project are installed through NPM.
Following is the list of dependencies installed and used in this project :- 

i) <ins>**mongoose.js**</ins> - used to establish a connection between Node.js and MongoDB Atlas, also used to create the Schema of the Collections in the Database.
<br>
ii) <ins>**express.js**</ins> - used to create a server to launch the application on the browser.
<br>
iii) <ins>**dotenv**</ins> - used to create a <ins>**'config.env'**</ins> file, which stores the sensitive information (Database URL, Port Number) securely.
<br>
iv) <ins>**ejs**</ins> - used as a template engine in Node.js, which can be used to create HTML files for the Frontend.
<br>
v) <ins>**validator**</ins> - used to verify that the Email entered by the user is valid or not.


## DIFFERENT ROUTES IN THE APPLICATION :-

The routes of this application have been defined inside the <ins>**'src'**</ins> folder, and then inside the <ins>**'templates'**</ins> folder. Inside the <ins>**'templates'**</ins> folder there is a <ins>**'views'**</ins> folder which contains all the routes of this application.

i) <ins>**index.ejs**</ins> - This is the Home page of the application.
<br>
ii) <ins>**table.ejs**</ins> - This page displays the Email ID's and the User ID's of all the users who have logged into the application to play the game.
<br>
iii) <ins>**login.ejs**</ins> - This page contains a form, which asks the users for their Email ID and the password they want to set.
<br>
iv) <ins>**instructions.ejs**</ins> - This page contains the instructions and rules of the game.
<br>
v) <ins>**game.ejs**</ins> - This page contains the HTML code for the game.
<br>
vi) <ins>**score.ejs**</ins> - This page contains a form, in which the users have to enter their name and score acheived in the game.
<br>
vii) <ins>**result.ejs**</ins> - This page displays the name and the score of all the users who have played the game.
<br>
viii) <ins>**clues.ejs**</ins> - This page contains different clues, hints and references on how to play the game. 

<br>

## DATABASE INFORMATION :-

i) I have chosen the MongoDB Atlas online Database to store the data of this application.
<br>
ii) The MongoDB Atlas has a Database with the name - **'Treasure_Hunt_Database'**.
<br>
iii) This Database has 2 collections - <ins>**'users'**</ins> and <ins>**'results'.**</ins>
<br>
iv) The 'users' collection contains the Email and Password of different users who play the game.
<br>
v) The 'results' collection contains the Name and Scores of different users who play the game.

The code for configuring the Database is present inside the <ins>**'db'**</ins> folder.

This folder contains a file <ins>**'conn.js'**</ins> in which the connection between Node.js and MongoDB Atlas has been defined using Mongoose.

This folder also contains a folder <ins>**'models'**</ins>, which has 2 files - 
<br>
i) <ins>**'userSchema.js'**</ins> - in this file, I have defined the Schema for the 'users' collection.
<br>
ii) <ins>**'resultSchema.js'**</ins> - in this file, I have defined the Schema for the 'results' collection.

<br>

## CLUES IN THE GAME :- 

I have provided a total of 5 References and Clues to solve the game

i) A Wikipedia Page.
<br>
ii) A tips and tricks article.
<br>
iii) A Youtube Playlist.
<br>
iv) An Instagram Page.
<br>
v) A Pinterest Album.

<br>

## DEAD ENDS IN THE GAME :- 

The game has a Dead End, when the timer in the game (hourglass) expires after the duration of <ins>**3 minutes**</ins>, and the game gets over automatically, the number of hidden items that the user found during this time will be counted in their score.

<br>

## SOLUTION OF THE GAME :- 

The game has only one solution, that is when the user **finds all the hidden objects** in the game within the given time limit (3 minutes).

<br>

## CHECKLIST OF ALL IMPLEMENTED FEATURES IN THE APPLICATION :-

Following are the list of all the features which are implemented in the game - 

i) Created a dashboard of the Emails and User ID's of all the users who have logged in and played the game.
<br>
ii) Created a dashboard of the Names and Scores of all the users who have played the game.
<br>
iii) Created the game carefully by assessing different soft skills of the users.
<br>
iv) The soft skills assessed are - attention to detail, attentiveness, focus, eye for detail, curiosity and perserverance.
<br>
v) Created the game in an interactive and user friendly way, by giving a smooth experience using Three.js.
<br>
vi) Provided different clues, hints and references for the users, including articles, Instagram pages and Youtube videos.
<br>


<br>

## SOME SCREENSHOTS OF THE APPLICATION :-

<img width="1000" height="500" alt="image" src="https://user-images.githubusercontent.com/78311368/233826639-c8f31e51-4c79-4128-acca-1b8e82714acb.PNG">

<br>

<img width="1000" height="500" alt="image" src="https://user-images.githubusercontent.com/78311368/233826695-03b5a162-ccb1-4d52-8969-b552a642d8bd.PNG">

<br>

<img width="1000" height="500" alt="image" src="https://user-images.githubusercontent.com/78311368/233826731-eebec232-e9a2-48da-bae5-429c99009e9a.PNG">

<br>

<img width="1000" height="500" alt="image" src="https://user-images.githubusercontent.com/78311368/233826764-3e10945a-66a7-4d72-82b0-230ad895f087.PNG">


