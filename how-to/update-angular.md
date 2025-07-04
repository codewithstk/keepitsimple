# 1. Check the update guide from official website what version of node or what other changes you need to do.
https://angular.dev/update-guide

# 2. Uninstall global angular cli and install new version
npm uninstall -g @angular/cli
npm cache clean --force
npm install -g @angular/cli@<version>

# 3. Update your project with new angular version
ng update @angular/core@<version> @angular/cli@<version>

# 4. Update all other packages