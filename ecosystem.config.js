// /home/user/fotograf-frontend/ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "fotograf-frontend",
      exec_mode: 'fork',
      instances: 'max',
      script: "node_modules/next/dist/bin/next",
      args: 'start',
      watch: true,
      env_local: {
        APP_ENV: 'local'
      },
      env_development: {
        APP_ENV: 'dev'
      },
      env_production: {
        APP_ENV: 'prod'
      }
    }
  ]
}
