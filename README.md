# Student Platform

## how to run the project?
You can choose to use development mode or production builds.
- Note: In development mode the backend uses sqlite for local database. While with the generated builds the postgres database is enabled, it is necessary to configure the password of your database in .env.

 * 1 - in the backend and frontend folder
 ```
yarn install
   or
npm install
 ```

 * 2 - in the backend and frontend folder

 ```
yarn dev
   or
npm run dev
 ```

 ## Alternative
 * 1 - in the backend and frontend folder
 ```
 yarn install
   or
npm install
 ```

 * 2 - create a table in your database called student
 * 3 - set your database password by setting the CREDENTIAL field in your .env file
 ```
  CREDENTIAL=your password
 ```
 * 4 - run the commands in the backend and frontend folders
 ```
  yarn start
    or
  npm run start
 ```
 now just open your browser and access [http://localhost:3000/](http://localhost:3000/)