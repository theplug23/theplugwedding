module.exports = { 
  apps : [ 
    { 
      name : "ThePlug Wedding", 
      exec_mode: 'cluster', 
      instances: '1', 
      script : "node_modules/next/dist/bin/next", 
      args: 'start', 
      watch: true, 
      env_local: { 
        APP_ENV: 'local',
        PORT: 3030
      }, 
      env_development: { 
        APP_ENV: 'dev',
        PORT: 3030
      }, 
      env_production: { 
        APP_ENV: 'prod',
        PORT: 3030
      } 
    } 
  ] 
}
