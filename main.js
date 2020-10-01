const { sendMail } = require('./reportSender');

/// this code will send  a mail every 1mins

let counter = 1;
const cron = require('node-cron');
cron.schedule('* * * * *', () => {
    sendMail(`Hello world ${counter}`, "this is email body it can contain html also");
    console.log('email sent ✓')
    counter++;
});