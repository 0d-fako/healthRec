import mongoose, { Schema, Document } from 'mongoose';
import { UserRole, Gender } from './UserEnums';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  gender: Gender;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, enum: Object.values(UserRole) },
  gender: { type: String, required: true, enum: Object.values(Gender) },
});

export const UserModel = mongoose.model<IUser>('User', UserSchema);