const Post = require("../models/posts")



// get all post 
const getPosts = async(req,res)=>{
  const data = await Post.find({})
  res.status(200).json(data)
}


const PostsData =async (req,res)=>{
try {
  const {title} = req.body

  const post = await Post.create({title})
  res.status(200).json(post)
} catch (err) {
  res.status(400).json({error:err.message})
  
}
}


module.exports = {
  getPosts,
  PostsData
}