// shipitfile.js
module.exports = shipit => {
  // Load shipit-deploy tasks
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      deployTo: '/opt/exampleapi/',
      repositoryUrl: 'https://gitlab.com/aniketrao21/example-api.git',
    },
    production: {
      servers: 'root@192.168.33.10',
    },
  })
}