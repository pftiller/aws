module.exports = {
    apps: [{
      name: 'aws',
      script: 'server.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-191-226-191.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/portfolio.pem',
        ref: 'origin/master',
        repo: 'git@github.com:pftiller/aws.git',
        path: '/home/ubuntu/aws',
        'pre-deploy': 'git fetch',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js --env production'
      }
    }
  }