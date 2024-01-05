// Import the LaunchDarkly client
var LaunchDarkly = require('launchdarkly-node-client-sdk');
// import pkg from 'launchdarkly-node-client-sdk';


// Set up the user properties. This user should appear on your LaunchDarkly users dashboard
// soon after you run the demo.
const user = {
  key: "example-user-key"
};

// Create a single instance of the LaunchDarkly client
const ldClient = LaunchDarkly.initialize('*', user);

function getLDFlags () {
    ldClient.waitForInitialization().then(async function() {

        const flags = {
            BackgroundColor: ldClient.variation("BackgroundColor", true),
        }
        
        console.log({flags})
        
        ldClient.close();
      }).catch(function(error) {
            console.log(error)
      });
}

getLDFlags();
