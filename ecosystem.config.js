module.exports = {
  apps: [{
    script: 'npm start',
  },],

  deploy: {
    production: {
      key: 'my-key-pair',
      user: 'ubuntu',
      host: '54.160.112.79',
      ref: 'origin/master',
      repo: 'https://github.com/buka-pitch/MathGpt.git',
      path: '/home/ubuntu/MathGpt',
      'pre-deploy-local': '',
      'post-deploy': 'cd Next-Frontend && source ./.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};