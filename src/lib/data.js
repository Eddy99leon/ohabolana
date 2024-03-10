import { Post, Star, User } from "./models"
import connect from "./utils"



//get all ohabolana
export const getPosts = async () => {
    try{
        await connect();
        const post = await Post.find();
        return post;
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch ohabolana!")
    }
}

//get all Ohabolana filtred
export const getPostFiltre = async ({search, region, category}) => {
    try{
        await connect();
        let posts;

        //cas: tous n'existe
        if(!search && !region && !category){
            posts = await Post.find().sort({ createdAt: -1 });
        }

        //cas: search existe
        if(search && !region && !category){
            const regex = new RegExp(search, 'i');
            posts = await Post.find({ "quote" : regex }).sort({ createdAt: -1 });
        }
        if(search && region && !category){
            const regex = new RegExp(search, 'i');
            posts = await Post.find({ "quote" : regex, "region" : region }).sort({ createdAt: -1 });
        }
        if(search && !region && category){
            const regex = new RegExp(search, 'i');
            posts = await Post.find({ "quote" : regex, "category" : category }).sort({ createdAt: -1 });
        }

        //cas: region existe
        if(!search && region && !category){
            posts = await Post.find({ "region" : region }).sort({ createdAt: -1 });
        }
        if(!search && region && category){
            posts = await Post.find({ "region" : region, "category" : category }).sort({ createdAt: -1 });
        }

        //cas: category existe
        if(!search && !region && category){
            posts = await Post.find({ "category" : category }).sort({ createdAt: -1 });
        }

        //cas: tous existe
        if(search && region && category){
            const regex = new RegExp(search, 'i');
            posts = await Post.find({ "quote" : regex, "region" : region, "category" : category }).sort({ createdAt: -1 });
        }
        return posts;

    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch ohabolanas!")
    }
}

//get one Ohabolana by id
export const getPost = async (id) => {
    try{
        await connect();
        const post = await Post.findById(id);
        return post;
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch ohabolana!")
    }
}

//get quotes by user id
export const getQuotesByUserId = async (userId) => {
    try{
        await connect();
        let quotes;
        if(userId){
            quotes = await Post.find({ "userId" : userId }).sort({ createdAt: -1 });
        }
        return quotes;
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch ohabolanas!")
    }
}

// get all users
export const getUsers = async (search) => {
    try{
        await connect();
        let users;
        if(!search){
            users = await User.find().sort({ createdAt: -1 });
        }else{
            const regex = new RegExp(search, 'i');
            users = await User.find({ name : regex }).sort({ createdAt: -1 });
        }
        return users
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch users!")
    }
}

//get one user by id
export const getUser = async (id) => {
    try{
        await connect();
        const user = await User.findById(id);
        return user;
    }catch(err){
        console.log(err);
        throw new Error("Failed to fetch user!")
    }
}

//get test
export const getTest = async (category) => {
    try{
        await connect();
        const posts = await Post.find({"category": category}, { quote: 1}).limit(4).sort({quote: -1})
        return posts;
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch ohabolanas!")
    }
}

//get quotes by category
export const getQuotesByCategory = async (category) => {
    try{
        await connect();
        const quotes = await Post.find({"category": category}).sort({ createdAt: -1 }).limit(4)
        return quotes;
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch ohabolanas!")
    }
}

//get stars by quotes id
export const getStarsByQuotesId = async (idQuote) => {
    try{
        await connect();
        const stars = await Star.find({"quoteId": idQuote})
        return stars;
    }catch(err){
        console.log(err)
        throw new Error("Failed to fetch stars!")
    }
}