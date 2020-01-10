# TEMPLATE CCD End2End Journey Tests


## Purpose

This service is to help people to run End2End Journey Tests for their service,
without needing to start from scratch.

The repo consists of Cucumber test scenarios for testing different cases.
These use Protractor to interact with a Chrome browser (via Puppeteer), which runs without
showing the browser (i.e. headless) by default.


## Getting Started

### Prerequisites

Running the application requires the following tools to be installed in your environment:

  * [Node.js](https://nodejs.org/) v7.2.0 or later
  * [yarn](https://yarnpkg.com/)

### Install dependencies

Install dependencies by executing the following command:

 ```bash
$ yarn install
 ```

### Running the tests

The tests will need to be given valid credentials for a Case Worker, supplied by
setting the environment variables `TEST_CASEOFFICER_USERNAME` and `TEST_CASEOFFICER_PASSWORD` and then executing the `e2e` tests, e.g.

 ```bash
$ TEST_CASEOFFICER_USERNAME=? TEST_CASEOFFICER_PASSWORD=? yarn e2e
 ```

If you wish to see the browser running the tests simply set the `TEST_E2E_HEADLESS` environment variable to *false*
### Updating the project for your service

You need to make changes everywhere there is a `TODO:` comment to make it relevant to your service:

* Jenkinsfile_nightly
* service.conf.js

i.e. changing running enviroment from local to demo or to aat. To run it locally, you need to set docker and other relevant services. Please read ...... (COMIN SOON) .... to set up the local enviroment.

## Other tasks

To ensure your code is clean (i.e. linting):

 ```bash
$ yarn lint
 ```

To perform NSP dependency checks:

 ```bash
$ yarn test:nsp
 ```

