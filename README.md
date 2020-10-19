# Smash Stats
This app functions as a tracker app for the Nintento Switch game Super Smash Bros Ultimate. A user is able to create an account and add characters by name to their roster. Smash stats uses a 3rd party API (https://api.kuroganehammer.com/swagger/index.html) to save a character's name, image, and moves to the database referencing a user. A user has the ability to add matches and notes onto each character they have saved. Matches track the enemy, your stocks, and enemy stoks while notes allows the user to add commments about a character to help with future matches.
## Getting Started
You can get started [here](https://sei-smash-stats.herokuapp.com/)
## Screenshots
![On Open](https://i.imgur.com/1ut03KK.png)
On open, the page displays a Smash Bros image and directs the user to log in.
![Login](https://i.imgur.com/6Y3alf0.png)
After login, the page will redirect to /characters and display the current user's made characters. If the user does not have characters, it will only display the 'Add Character'
Link
![Character List](https://i.imgur.com/Qoro8IL.png)
When a character is made, the page redirects you back to /characters where you can click details or delete on your character
![Details Page](https://i.imgur.com/U1YxiFw.png)
The character detail page will display the characters name, a stat image, a link to their moves, and the matches and notes associated to that character
![With Data](https://i.imgur.com/xgHPGFx.png)
A character will display matches and notes when created with and update and delete link on both
## Technology
- React
- CSS
- Bootstrap
- node.js
- express
- mongoDB
- fetch-API
- node-fetch
- 3rd Party API
## Next steps
- Style the page for a better user interface
- Implement a squad strike model and user CRUD
- Redirect to /details after character update