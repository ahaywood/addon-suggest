The `src/app/addons/suggest` folder is an add-on for the RWSDK framework. It contains everything for the add-on to be able to run.

I created an `addon.jsonc` to help list everything needed to automate the installation.

There are several steps that need to happen.

1. To install the add-on, you'll need to take the following steps. Write a generic script that will look at an add-on's `addon.jsonc` file and do this for you.

  - Assuming this code lives on GitHub, you'll need to check to see if a `src/app/addons` folder exists. If it doesn't, create it.

  - Then, run
    ```bash
    cd /src/app/addons
    npx degit https://github.com/ahaywood/rwsdk-tools/addons/suggest
    ```

  - Look at `addon.jsonc` to see if Tailwind is required. If so run, `npx graftthis tailwind` to install Tailwind

  - Look at `addon.jsonc` to see if shadcn/ui is required. If so run, `npx graftthis shadcn` to install shadcn/ui

  - Look at `addon.jsonc` to see what other dependencies are required. For example:

  ```jsonc
  "packages": ["date-fns", "resend", "framer-motion"],
  ```

  Then, install all the remaining dependencies using `pnpm install`

  - Merge the Prisma Schema using `npx graftthis merge`. Then, create a migration by running `pnpm migrate:new "merge suggestion add-on"`

  - Add an `@import styles.css` to the `src/app/index.css` file. If the user is using Tailwind, then the first line in the `src/app/index.css` file should be `@import "tailwindcss"`. If the user is using shadcn/ui, then the second line in the `src/app/index.css` file should be `@import "tw-animate-css";`. The third line should be `@import "styles.css"`

  The source, injectInto, and the injective directive are listed within the addon.jsonc file:

  ```jsonc
   "styles": {
    "source": "src/app/addons/suggest/styles.css",
    "injectInto": "src/app/styles.css", // project-wide styles file
    "injectDirective": "@import './addons/suggest/styles.css';"
  },
  ```

  - Add the routes to the `worker.tsx` file.
      At the top of the file, import the routes from the `src/app/addons/suggest/routes.tsx` file.

      The name of the file is defined in the `addon.jsonc` file:

      ```jsonc
        "routes": {
          "file": "routes.ts",
          "prefix": "/suggest"
        },
      ```

      The import should within teh `src/worker.tsx` file should look similar to this:

      ```tsx
      import SuggestRoutes from "./app/addons/suggest/routes";
      ```

      Inside the `defineApp` function, there's a `render` function. At the very end of the array, add a `prefix` function. For example:

      ```tsx
      prefix("/suggest", SuggestRoutes),
      ```

      The `prefix` route is defined in the `addon.jsonc` file, in the "routes" section, with a "prefix" property:

      ```jsonc
       "routes": {
          "file": "routes.ts",
          "prefix": "/suggest"
        },
      ```

      If the `prefix` property is empty, then instead of using the `prefix` function, spread the routes into the `render` function.

      For example:
      ```tsx
      ...SuggestRoutes,
      ```

  - Install the Generate Routes script using `npx graftthis routes`. Then, run `pnpm routes`

  - Any environmental variables within the `addon.jsonc` file should be added to the `.env` file in the root of the project.

  Within teh `addon.jsonc` file, the object should look like this:

  ```jsonc
  "env": ["RESEND_API_KEY"],
  ```

  - After the install script has successfully run, display anything within the `postInstallMessage` property of the `addon.jsonc` file.

  For example:

  ```jsonc
  "postInstallMessage": "✅ Suggest add-on installed. Mount SuggestRoutes and run `npx prisma generate`."
  ```

2. Does the `addon.jsonc` file have all the pieces it needs to run the install script?

3. I want to create another script that will dynamically generate teh addon.jsonc file when the user runs the appropriate command.

  - The name of the add-on should match the folder name. (inside `src/app/addons`).

  - Look at all the imports in all the files inside the `src/app/addons/suggest` folder and add them to the `packages` array in the `addon.jsonc` file.

  For example:

  ```jsonc
  "packages": ["date-fns", "resend", "framer-motion"],
  ```

  - Look inside the addon's `env.example` file and add any environmental variables to the `addon.jsonc` file.

  For example:

  ```jsonc
  "env": ["RESEND_API_KEY"],
  ```

  - Look for any .css files and add them to the `styles` object in the `addon.jsonc` file.

  The `injectInto` should default to `src/app/styles.css`

  For example:

  ```jsonc
  "styles": {
    "source": "src/app/addons/suggest/styles.css",
    "injectInto": "src/app/styles.css", // project-wide styles file
    "injectDirective": "@import './addons/suggest/styles.css';"
  },
  ```

  - Update the `postInstallMessage` property of the `addon.jsonc` file to display a message that the add-on has been installed.

  For example:

  ```jsonc
  "postInstallMessage": "✅ Suggest add-on installed. Mount SuggestRoutes and run `npx prisma generate`."
  ```

