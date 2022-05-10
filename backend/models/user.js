const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
prefix: String,
  name: String,
  sername: String,
  sex: String,
  birthdate: String,
  idcard: String,
  Homenumber: String,
  swine: String,
  village: String,
  building: String,
  alley: String,
  province: String,
  daytogo: String,
  time: String,
  tags: [String]
},{ collection: 'user' })

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel
