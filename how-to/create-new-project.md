### Step 1 - Add a new application on projects!
ng generate application your-app-name

This will create a new folder "your-app-name" and will add in angular.json a new configuration section
"your-app-name": {...}

### Step 1.1 - Add robots.txt and sitemap.xml if it's a public website and needs to be found on google.

Update the files content based on needs.

### Step 2 - UPDATE ASSETS to export also the assets from the library(and robots.txt, sitemap.xml if exist)

You have to update the assets in angular.json file to includes the assets of the library
Find the assets section of the new project and update with the following code:

"your-app-name": {
  ...
  "assets": [
    { <!-- this is a default one -->
      "glob": "**/*",
      "input": "projects/your-app-name/public"
    }
    <!-- IMPORTANT: add this 2 only if the file exist -->
    "projects/your-app-name/src/robots.txt", <!-- add this only if the file exist -->
    "projects/your-app-name/src/sitemap.xml", <!-- add this only if the file exist -->
    { <!-- this must be added (check this to see if it's needed)--> 
      "input": "projects/stk/assets",
      "glob": "**/*",
      "output": "assets"
    }
  ],
  ...
}

### Step 3 - Add lint configuration in angular.json

"your-app-name": {
  ...
  "lint-app": {
    "builder": "@angular-eslint/builder:lint",
    "options": {
      "eslintConfig": "projects/your-app-name/.eslintrc.app.json",
      "lintFilePatterns": [
        "projects/your-app-name/src/**/*.ts",
        "projects/your-app-name/src/**/*.html"
      ]
    }
  }
  ...
}

### Step 4 - Copy .eslintrc.app.json file to the project
Copy .eslintrc.app.json from other application projects to the new project
Edit the the project path from the copied file.

### Step 5 - Copy package.json file to the project
Copy a package.json file to the project

### Add start, lint and build scripts in global package.json
