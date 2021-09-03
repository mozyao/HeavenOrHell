 
import PostMessage from '../models/postMessage.js';

export const getPosts= async (req,res) => {
    try{
        //retrieve all posts, while we may want to wait since 
        //each retrieve process takes time
        const postMessages= await PostMessage.find();
        //console.log(postMessages);
        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({message: error.message});
    } 
}

export const createPost= async (req,res) => {
    // res.send("post created"); 
    const post=req.body;
    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);

    }catch(error){
        res.status(409).json({message: error.message});
    }
}

