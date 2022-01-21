const express = require('express');
const morgan = require('morgan');
const { db, Page, User } = require('./models');
const wiki = require('./routes/wiki');
//const users = require('./routes/users');
const layout = require('./views/layout');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki',wiki);
//app.use('/users',users);

app.get('/', (req,res,next) =>
{
  try{
    res.redirect('/wiki');
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
