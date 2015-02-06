
process.on 'uncaughtException', (err) ->
  if err.code is 'ECONNRESET'
    console.log 'Requestor terminated the connection before a resopnse could be sent.'
  else
    console.log 'UNCAUGHT EXCEPTION', JSON.stringify(err.stack )
