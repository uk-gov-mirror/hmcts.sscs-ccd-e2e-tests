/* eslint-disable no-negated-condition, multiline-ternary */

const puppeteer = require('puppeteer');
const serviceConfig = require('./service.conf');
const tsNode = require('ts-node');
const path = require('path');

exports.config = {

  baseUrl: serviceConfig.CcdWebUrl,
  specs: ['./features/**/*.feature'],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--no-sandbox',
        serviceConfig.UseHeadlessBrowser ? '--headless' : '--noop'
      ],
      binary: puppeteer.executablePath()
    },
    acceptInsecureCerts: true,
    maxInstances: 1,
    proxy: (!serviceConfig.UseProxy) ? {} : {
      proxyType: 'manual',
      httpProxy: serviceConfig.UseProxy.replace('http://', ''),
      sslProxy: serviceConfig.UseProxy.replace('http://', '')
    },
    loggingPrefs: {
      driver: 'INFO',
      browser: 'INFO'
    }
  },

  directConnect: true,
  useAllAngular2AppRoots: true,

  // this causes issues with test failing
  // so do not enable it unless all tests pass
  // on a variety of environments first :)
  restartBrowserBetweenTests: false,

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    require: ['./features/step-definitions/**/*.steps.ts'],
    tags: false,
    profile: false,
    'no-source': true
  },

  onPrepare() {
    // returning the promise makes protractor wait for
    // the reporter config before executing tests
    global
      .browser
      .getProcessedConfig()
      .then({
        // noop
      });

    tsNode.register({
      project: path.join(__dirname, './tsconfig.e2e.json')
    });
  }
};
