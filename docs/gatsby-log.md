# Starting Gatsby

## Gatsby new

When you start a new Gatsby project, the terminal output should look something
like this:

```
$ lando gatsby new gatsby-test
info Creating new site from git: https://github.com/gatsbyjs/gatsby-starter-default.git
Cloning into 'gatsby-test'...
remote: Enumerating objects: 29, done.
remote: Counting objects: 100% (29/29), done.
remote: Compressing objects: 100% (25/25), done.
remote: Total 29 (delta 2), reused 15 (delta 2), pack-reused 0
Unpacking objects: 100% (29/29), done.
success Created starter directory layout
info Installing packages...
yarn install v1.22.4
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.1.3: The platform "linux" is incompatible with this module.
info "fsevents@2.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "linux" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "gatsby > @pmmmwh/react-refresh-webpack-plugin@0.3.3" has incorrect peer dependency "react-refresh@^0.8.2".
warning "gatsby > @typescript-eslint/eslint-plugin > tsutils@3.17.1" has unmet peer dependency "typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta".
[4/4] Building fresh packages...
success Saved lockfile.
Done in 44.91s.
info
Your new Gatsby site has been successfully bootstrapped. Start developing it by running:

  cd gatsby-test
  gatsby develop
```

Note that there are several prompts in this process, including whether to use
`npm` or `yarn`.

## Gatsby develop

When you start up the Gatsby development server, you should see something like
this in your terminal:

```
$ lando gatsby develop --host=0.0.0.0
Debugger listening on ws://127.0.0.1:9229/14c88bac-f223-4390-ab68-0368e2d276ec
For help, see: https://nodejs.org/en/docs/inspector
success open and validate gatsby-configs - 0.025s
success load plugins - 0.398s
success onPreInit - 0.013s
success initialize cache - 0.011s
success copy gatsby files - 0.040s
success onPreBootstrap - 0.007s
success createSchemaCustomization - 0.007s
info Starting to fetch all data from Drupal
success Fetch all data from Drupal - 0.169s
info Downloading remote files from Drupal
success Remote file download - 0.081s
success Downloading remote files - 0.139s - 20/20 143.94/s
success source and transform nodes - 0.403s
success building schema - 0.586s
success createPages - 0.036s
success createPagesStatefully - 0.055s
success updating schema - 0.020s
success write out redirect data - 0.002s
success Build manifest and related icons - 0.115s
success onPostBootstrap - 0.123s
info bootstrap finished - 3.694s
success onPreExtractQueries - 0.002s
success extract queries from components - 0.274s
success write out requires - 0.033s
success run static queries - 0.015s - 2/2 131.10/s
success run page queries - 0.015s - 5/5 329.46/s
success write out requires - 0.001s
⠀
You can now view gatsby-starter-drupal-umami in the browser.
⠀
  Local:            http://localhost:8000/
  On Your Network:  http://192.168.96.2:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  Local:            http://localhost:8000/___graphql
  On Your Network:  http://192.168.96.2:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
⠀
success Building development bundle - 5.172s
```

The `nodejs` server will continue running until you kill it (e.g., by entering
CTRL-C in the same terminal session).

The numeric IP address does not seem to work.

## Build your Gatsby project

When you build your Gatsby site, you should see something like this in your
terminal:

```
$ lando gatsby build
success open and validate gatsby-configs - 0.038s
success load plugins - 0.349s
success onPreInit - 0.007s
success delete html and css files from previous builds - 0.017s
success initialize cache - 0.005s
success copy gatsby files - 0.031s
success onPreBootstrap - 0.008s
success createSchemaCustomization - 0.009s
info Starting to fetch all data from Drupal
success Fetch all data from Drupal - 0.148s
info Downloading remote files from Drupal
success Remote file download - 0.085s
success Downloading remote files - 0.136s - 20/20 147.17/s
success source and transform nodes - 0.387s
success building schema - 0.633s
success createPages - 0.035s
success createPagesStatefully - 0.047s
success updating schema - 0.032s
success onPreExtractQueries - 0.001s
success extract queries from components - 0.250s
success write out redirect data - 0.002s
success Build manifest and related icons - 0.111s
success onPostBootstrap - 0.122s
info bootstrap finished - 4.672s
success run static queries - 0.014s - 2/2 140.02/s
success run page queries - 0.011s - 4/4 366.18/s
success write out requires - 0.004s
success Building production JavaScript and CSS bundles - 2.340s
success Building static HTML for pages - 0.760s - 13/13 17.11/s
success onPostBuild - 0.003s
info Done building in 8.105 sec
```

## Run your Gatsby project

When you start up the Gatsby server, you should see something like this in
your terminal:

```
$ lando gatsby serve --host 0.0.0.0 --port 8000
You can now view gatsby-starter-drupal-umami in the browser.
⠀
  Local:            http://localhost:8000/
  On Your Network:  http://192.168.96.2:8000/
```

Use CTRL-C in your terminal window to stop the node server.
