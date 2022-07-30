import { model, Schema,Document } from 'mongoose';

export interface UserDocument extends Document{
  username:string;
  email:string;
  password?:string;
  isAvatarImageSet?:boolean;
  avatarImage?:string
}


const userSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    min:3,
    max:20
  },
  email:{
    type:String,
    required:true,
    unique:true,
    max:50
  },
  password:{
    type:String,
    required:true,
    min:8
  },
  isAvatarImageSet:{
    type:Boolean,
    default:false
  },
  avatarImage:{
    type:String,
    default: ""
  }
})

const User = model("users",userSchema)

export default User;