import {
  isValidEmail,
  isValidName,
  isValidPhone,
} from "../utils/validators.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/user.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";

export const addUser = catchAsyncError(async (req, res, next) => {
  const data = req.body;
  const model = ["name", "username", "email", "phone"];
  for (let key of model) {
    if (!data[key]) {
      return next(new ErrorHandler(`${key} is required`, 400));
    }
  }
  let { name, username, email, phone } = data;
  if (!isValidName(name)) {
    return next(new ErrorHandler(`Name only contains alphabets`, 400));
  }
  data.name = name[0].toUpperCase() + name.slice(1).toLowerCase();
  if (!isValidEmail(email)) {
    return next(new ErrorHandler(`Invalid email`, 400));
  }
  const isEmailUnique = await User.findOne({ email });
  if (isEmailUnique) {
    return next(new ErrorHandler(`Email is already registered`, 400));
  }
  if (!isValidPhone(phone)) {
    return next(new ErrorHandler(`Invalid phone`, 400));
  }
  const response = await User.create(data);
  return res.status(201).json({ success: true, data: response });
});

//---------------------------------------------------------------------

export const allUser = catchAsyncError(async (req, res, next) => {
  const data = await User.find();
  return res.status(200).json({ data });
});

//---------------------------------------------------------------------

export const getById = catchAsyncError(async (req, res, next) => {
  const getUser = await User.findById(req.params.id);
  return res.status(200).json({ getUser });
});

//----------------------------------------------------------------------

export const updateUser = catchAsyncError(async (req, res) => {
  let user = req.body;
  const editUser = new User(user);
  await User.findOneAndUpdate({ _id: req.params.id }, editUser);
  return res.status(201).json(editUser);
});

//-----------------------------------------------------------------------

export const deleteUser=catchAsyncError(async(req,res,next)=>{
  await User.deleteOne({_id:req.params.id})
  return res.status(200).send({success:true,msg:"user Deleted Successfully"})
})