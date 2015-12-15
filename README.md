## Jasmine Intro

1. Create a new project folder called `jasmine_101`
2. Change directory to that folder.
3. `npm init` a new application. Enter, enter, enter...
4. Let's take a look at our folder structure: `tree`. Now, add an `app` and a `spec` folder.
5. We need to install Jasmine. To do so, `npm install jasmine-node --save-dev`
6. Now, we need to find where our executable for tests lives... `node_modules/.bin/jasmine-node spec`
7. Let's run that! `node_modules/.bin/jasmine-node spec`
8. In your package.json, under the `"scripts"` for **test**, replace the value with `node_modules/.bin/jasmine-node spec`
9. Run `npm test`
10. Verify your tests run.
