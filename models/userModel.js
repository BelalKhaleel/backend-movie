import mongoose from "mongoose";
import bcrypt from "bcrypt";


const saltRounds = 10;
const UserSchema = mongoose.Schema({
 username: {
  type: String,
  trim: true,  
  required: true,
 },
 email: {
  type: String,
  trim: true,  
  required: true,
 },
 password: {
  type: String,
  trim: true,
  required: true
 }
});
UserSchema.pre('save', function(next){
this.password = bcrypt.hashSync(this.password, saltRounds);
next();
});
const User = mongoose.model('User', UserSchema);

export default User;