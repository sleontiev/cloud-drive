import { Schema, model, Types } from 'mongoose';

export interface IUser {
  name?: string,
  surname?: string,
  email: string;
  password: string;
  space: number;
  used: number;
  files: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    space: {
      type: Number,
      default: 1024 ** 3 * 10,
    },
    used: {
      type: Number,
      default: 0,
    },
    files: [
      {
        type: Schema.Types.ObjectId,
        ref: 'File',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = model('User', UserSchema);
export default User;
