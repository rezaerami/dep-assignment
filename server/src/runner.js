const app = require('./index');

const port = process.env.PORT || 4000;

// eslint-disable-next-line consistent-return
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  console.info(`Server listening to`, port);
});
