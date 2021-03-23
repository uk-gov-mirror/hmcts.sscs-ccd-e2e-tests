module.exports = {
    multiCapabilities: [
        {
          browserName: 'chrome',
          version: 'latest',
          platform: 'Windows 10',
          name: 'sscs-chrome-windows-test',
          tunnelIdentifier: process.env.TUNNEL_IDENTIFIER || 'reformtunnel',
          extendedDebugging: true,
          capturePerformance: true,
          sharedTestFiles: false,
          maxInstances: 1
        },
        {
          browserName: 'firefox',
          version: 'latest',
          platform: 'Windows 10',
          name: 'sscs-firefox-windows-test',
          tunnelIdentifier: process.env.TUNNEL_IDENTIFIER || 'reformtunnel',
          extendedDebugging: true,
          capturePerformance: true,
          sharedTestFiles: false,
          maxInstances: 1
        }
      ],
};
