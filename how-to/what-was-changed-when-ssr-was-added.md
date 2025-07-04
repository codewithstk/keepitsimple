#### Add ssr to a project:
ng add @angular/ssr

# 1. Some packages were added in package.json:
"@angular/platform-server": "^19.2.0",
"@angular/ssr": "^19.2.14",
"express": "^4.18.2",
"@types/express": "^4.17.17",
"@types/node": "^18.18.0",


If you only use prerendering (static HTML files, no server-side rendering at runtime) you can have this 3 in devDependecies!
"@angular/ssr": "^19.2.14",
"@angular/platform-server": "^19.2.0",
"express": "^4.18.2",

# 2. In angular.json was added under architect->build->options 4 new properties
"architect": {
    "build": {
        ...
        "options": {
            ...
            "server": "projects/ceramicartmontaj/src/main.server.ts",    <--------added
            "outputMode": "server",                                      <--------added
            "ssr": {                                                     <--------added
            "entry": "projects/ceramicartmontaj/src/server.ts"           <--------added
        }
    },
    "configurations": {...}
}

# 3. In tsconfig.app.json was added "node" under types
"compilerOptions": {
    ....
    "types": [
      "node"          <--------added
    ]
},

And some 2 paths under files

"files": [
    ...
    "src/main.server.ts",       <--------added
    "src/server.ts"             <--------added
],

# 4. main.server.ts file was created under projects/project-name/src
# 5. server.ts file was created under projects/project-name/src
# 6. app.module.server.ts was created under projects/project-name/src/app
# 7. app.routes.server.ts was created under projects/project-name/src/app
# 8. In app.module.ts was added a new provider at the end of the providers list
provideClientHydration(withEventReplay())