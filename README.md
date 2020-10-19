# Smash Stats
This app functions as a tracker app for the Nintento Switch game Super Smash Bros Ultimate. A user is able to create an account and add characters by name to their roster. Smash stats uses a 3rd party API (https://api.kuroganehammer.com/swagger/index.html) to save a character's name, image, and moves to the database referencing a user. A user has the ability to add matches and notes onto each character they have saved. Matches track the enemy, your stocks, and enemy stoks while notes allows the user to add commments about a character to help with future matches.
## Getting Started
You can make your character [here](https://sei-smash-stats.herokuapp.com/)
## Screenshots
![On Open](https://i.imgur.com/wEdpA5c.png)
On open, the page makes a request to the API and displays all 319 spells in the book.
![Login](https://i.imgur.com/I0pHdTk.png)
After login, the page will redirect to /characters and display the current user's made characters.
![Character Show](https://i.imgur.com/UuOdRfP.png)
When a character is clicked, it takes you to that character's show page. Here it displays all the spells saved to that character
## Technology
- EJS
- CSS
- Bootstrap
- node.js
- express
- mongoDB
- axios
## Next steps
- Style the page for a better user interface
- Add sort by level functionality to spells