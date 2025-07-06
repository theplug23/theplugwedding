// /home/user/fotograf-frontend/ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "fotograf-frontend",
      exec_mode: 'fork', // Changé de 'fork' à 'cluster' pour les performances
      instances: 1, // Changé de 'max' à 1 pour éviter les conflits de port
      script: "node_modules/next/dist/bin/next",
      args: 'start',
      watch: false, // Désactivé en production
      env_local: {
        APP_ENV: 'local',
        PORT: 3007,
        NEXT_PUBLIC_API_URL: 'http://127.0.0.1:3004/api',
        NEXT_PUBLIC_SITE_URL: 'http://localhost:3007'
      },
      env_development: {
        APP_ENV: 'dev',
        PORT: 3007,
        NEXT_PUBLIC_API_URL: 'http://127.0.0.1:3004/api',
        NEXT_PUBLIC_SITE_URL: 'https://fotograf-darmstdat.de'
      },
      env_production: {
        APP_ENV: 'prod',
        PORT: 3007,
        NEXT_PUBLIC_API_URL: 'http://127.0.0.1:3004/api',
        NEXT_PUBLIC_SITE_URL: 'https://fotograf-darmstdat.de'
      },
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true
    }
  ]
}
