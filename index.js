'use strict'

// Start the SMTP server (to catch all incoming mails)
require('./lib/smtp')

// Start the WEB server (to serve mails via the API)
require('./lib/web')
