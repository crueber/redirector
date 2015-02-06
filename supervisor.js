
process.on('uncaughtException', function (err) {
  if (err.code === 'ECONNRESET') {
      console.log('Requestor terminated the connection before a resopnse could be sent.');
  } else {
      console.log('UNCAUGHT EXCEPTION', JSON.stringify(err.stack));
    }
});
