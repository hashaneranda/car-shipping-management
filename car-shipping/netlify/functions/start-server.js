const { exec } = require('child_process');

exports.handler = async (event, context) => {
  exec('npm run start:prod', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return { statusCode: 500, body: 'Server start failed' };
    }
    console.log(stdout);
    console.error(stderr);
  });

  return {
    statusCode: 200,
    body: 'Server started successfully',
  };
};
