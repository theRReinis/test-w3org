# use Cypress provided image with all dependencies included and chrome and firefox browsers
FROM cypress/browsers:node-24.19.0-chrome-151.0.7922.173-1-ff-154.0.1-edge-151.0.4129.107-1
WORKDIR /app

COPY package.json yarn.lock ./

# install NPM dependencies and Cypress binary
RUN yarn install

COPY cypress.config.ts cucumber-html-reporter.js ./
COPY cypress ./cypress
RUN mkdir -p reports