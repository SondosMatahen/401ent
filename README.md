# 401ent
# 401 Entrance Exam

## Instructions:

### Make sure before starting to:

- Turn off any means of communication (phone, Slack, Email).
- Start your screen recording and share your face camera.
- You are not allowed to use previous projects, notes or GitHub.
- You can use Google search engine.

## Create a new repository on your GitHub and name it 'jokes-app'.

## Requirements:

1. In the **Home Page**, the user wants to view 10 Jokes about programming that are retrieved from [Jokes API](https://github.com/15Dkatz/official_joke_api) using this [end point](https://official-joke-api.appspot.com/jokes/programming/ten) to be displayed as cards (Each joke should have it's own card that will contain Joke number, type, setup, punchline and Add-to-my-jokes-list button), once the user clicks on this button, the selected joke should be added to the database then redirect the user to the **Favorite Jokes** page.

1. In the **Favorite Jokes** page, the user wants to view all the favorite jokes which are retrieved from the database and displayed as cards (Each joke should have it's own card that will contain Joke type, setup, punchline and View-Details button), once the user clicks on this button then should be redirected to the **Joke Details** page.
**NOTE** If there is no favorite jokes in the database then 'no available jokes' paraghraph should be shown instead.



1. In the **Joke Details** page, the user wants to view the selected joke details (type, setup and punchline) also the user should be able to update any of the data or delete the selected joke from the database. If the user updates the joke then should be redirected to the same **Joke Details** page but if the user deletes the joke then should be redirected to the **Favorite Jokes** page.

1. The user wants to have the ability to get a random joke using this [end point](https://official-joke-api.appspot.com/jokes/programming/random) by clicking on the **Random Joke** link in the Navigation bar, so the user should be redirected to the **Random Joke** with viewing the result as card (type, setup and punchline).

1. The user should have a simple UI design (using Flexbox or Grid).

1. Deploy your website on Heroku.

1. Keep your code clean, also use proper naming for both variables and functions (idiomatic style) and proper indentation.

## Resources

- You can use **any technology** you've learned during code 301 to achieve the above requirements.
- You can use this [sql cheat sheet](https://www.sqltutorial.org/sql-cheat-sheet/).
- For connecting to database you can use:
  - for MAC `postgres://localhost:5432/DBNAME`
  - for WIN `postgres://username:password@localhost:5432/DBNAME`
- For connecting the schema to your database `psql -d <database-name> -f <path/to/schemaFile>`
- For connecting the schema to Heroku `heroku pg:psql -f <path/to/schemaFile> -a <heroku-app-name>`
- If you face any connection issues to the database, don't forget to start your Postgres server:
  - for MAC `brew services start postgresql`
  - for WIN `sudo services postgrresql start`
- If you use `WSL` and have weird issues with your server, you can use this command `killall -s KILL node`. **keep using `ctrl+c`**

```Javascript
//useful express codes
require('dotenv').config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('./public'));
app.set('view engine', 'ejs');
const client = new pg.Client(process.env.DATABASE_URL);
```

## Libraries Resources

1. [Express](https://www.npmjs.com/package/express)
1. [Dotenv](https://www.npmjs.com/package/dotenv)
1. [Pg](https://node-postgres.com/)
1. [Ejs](https://www.npmjs.com/package/ejs)
1. [Method-override](https://www.npmjs.com/package/method-override)
1. [Superagent](https://www.npmjs.com/package/superagent)
1. [JQuery](https://code.jquery.com/)

## Submission Instructions:

- Submit the link of your GitHub repo for this project.
- Submit the Heroku link for the project
- After completing the exam, do **NOT** commit or push anything to your repo.
- Send the recorded video to your instructor on Slack.