## easymeal

Angular project

--------

To install the Angular CLI, open a terminal window and run the following command:

npm install -g @angular/cli
The ng new {name} command prompts you for information about features to include in the initial app. Accept the defaults by pressing the Enter or Return key.

The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.

The --open (or just -o) option automatically opens your browser to http://localhost:4200/.

------------------------------------

Note: While trying to create recipeController for creating and saving data a problem occurred. The data were taken from **req.body** correctly but the **create** function was still **undefined**.