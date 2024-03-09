import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name:{
            type: String,
            unique: true,
            require: true,
            min:3,
            max:20
        },
        email:{
            type: String,
            unique: true,
            require: true,
        },
        password:{
            type: String,
            require: false,
            min:4
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true }
);

const postSchema = new Schema(
    {
        quote:{
            type: String,
            require: true,
        },
        region:{
            type: String,
            require: true,
        },
        category:{
            type: String,
            require: true,
        },
        desc:{
            type: String,
            require: true,
        },
        userId:{
            type: String,
            require: true,
        },
    },
    {timestamps: true }
);

const starSchema = new Schema(
    {
        star:{
            type: Number,
            require: true,
        },
        coms:{
            type: String,
            require: true,
        },
        quoteId:{
            type: String,
            require: true,
        },
        userId:{
            type: String,
            require: true,
        },
    },
    {timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const Star = mongoose.models?.Star || mongoose.model("Star", starSchema);