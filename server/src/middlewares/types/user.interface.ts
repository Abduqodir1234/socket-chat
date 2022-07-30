
export interface UserCreateInterface{
  username:string;
  email:string;
  password:string;
  isAvatarImageSet?:boolean;
  avatarImage?:string
}

export interface UserLoginDataInterface {
  username:string;
  password:string;
}