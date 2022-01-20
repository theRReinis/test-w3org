# use Cypress provided image with all dependencies included and chrome and firefox browsers
FROM cypress/browsers:node16.13.0-chrome95-ff94
WORKDIR /app

COPY package.json yarn.lock ./

# install NPM dependencies and Cypress binary
RUN yarn install

COPY cypress.json cucumber-html-reporter.js ./
COPY cypress ./cypress
RUN mkdir -p reports