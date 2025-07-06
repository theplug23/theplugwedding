// /home/user/fotograf-frontend/ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "fotograf-frontend",
      exec_mode: 'fork',
      instances: 'max',
      script: "node_modules/next/dist/bin/next",
      args: "start -- --port 3007",
      cwd: "/var/www/dev/theplugwedding",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 3007
      },
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
