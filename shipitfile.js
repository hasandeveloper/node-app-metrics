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
      servers: 'vagrant@192.168.33.10',
    },
  })

  shipit.on('deployed', () => {
    const env = shipit.environment;

    let cmd = '';
    cmd += `cd ${shipit.releasePath} && `;
    cmd += 'npm install --production && ';
    cmd += `(sudo service exampleapi restart)`;

    shipit.remote(cmd);
});
}