const { Show } = require('./Show')
const { User } = require('./User')

Show.belongsTo(User)
User.hasMany(Show)

// const getUserShows = async () => {
//     // Write queries here
//     const userOne = await User.findByPk(1);

//     const showOne = await Show.findByPk(2)

//     // await userOne.addShow(2)
//     // const allShows = await userOne.getShows();

//     // const shows = await Show.findByPk(4)    

    

//     // return allShows;

// }
// getUserShows();

module.exports = {Show, User}
