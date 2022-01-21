const express = require('express');
const morgan = require('morgan');
const { db, Page, User } = require('./models');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded());


app.get('/', (req,res,next) =>
{
  try{
    res.send("");
  }
  catch(error)
  {
    next(error);
  }
})

const PORT = 3000;

const init = async () => {
  await db.sync({ force: true });
  // await db.sync();
  // await Page.sync();
  // await User.sync();

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init();
