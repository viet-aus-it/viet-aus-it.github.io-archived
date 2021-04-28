# Technical Details

## Language

- TypeScript (primary) and React, runnning on Node 14
- JavaScript configurations for Gatsby, and Jest.

## Tools

- Gatsby static site generator
- Jest for testing
- GitHub Actions for CI/CD (currently borked...)
- GitHub Pages for static site hosting

## CI/CD Process

The project currently has 4 CI/CD workflows, each described in its own yaml files under `.github/workflows`.

### Test and Lint

Pretty straightforward from the name, isn't it? This workflow will be ran when a pull request is made onto the develop branch. All updates will be tested and linted here before being merged into the `develop` branch.

### Build GH Page

This is a start to finish workflow:

- Test and lint and build
- These two steps will happen in parallel
  - Upload the test coverage data to [coveralls.io](https://coveralls.io/github/viet-aus-it/viet-aus-it.github.io?branch=develop).
  - Upload the built static assets and commit that into the gh-pages branch, which will be deployed to GitHub Pages.

### Schedule Build and Manual Build

- This is a build-only job that will either run every 4 hours, or can be triggered manually.


## Setting up for local development

- Clone the project
- Install dependencies
- Create a `.env.development` and a `.env.production` file with API and spaceID from Contentful
- Create a `.contentful.json` file with API and space ID from contentful.
