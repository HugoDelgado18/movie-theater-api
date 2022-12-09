const express = require('express');
const app = express();
const {db} = require('./db')
const seed = require('./seed');
const userRouter = require('./routes/users')
const showRouter = require('./routes/shows')

const port = 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/users', userRouter);
app.use('/shows', showRouter)





app.listen(port, () => {
    seed();
    console.log('successfully opened port ' + port + '.')
})


