import { Post } from "../models/post"



export const getPosts = async (req,res) => {
    const getPosts = await Post.find()
    res.json(getPosts)
}

export const getPost = async (req,res) => {
    const id = req.params.id

    const findPost = await Post.findById({_id : id})
    
    if(!findPost) {
        res.status(404).json({msg : "No se pudo encontrar el post"})
        return
    }

    res.json(findPost)
}

export const postPost = async (req,res) => {
    const body = req.body
    const newPost = await new Post(body)
    try {
        const savePost = await newPost.save()
        res.status(200).json({savePost});
    } catch (error) {
        res.status(400).send(error)
    }
}

export const updatePost = async (req,res) => {
    const id = req.params.id

    const findPost = await Post.findById({ _id: id });

    if (!findPost) {
      const error = new Error("Post no encontrado");
      return res.send(404).json({ msg: error.message });
    }

    findPost.title = req.body.title || findPost.title;
    findPost.author = req.body.author || findPost.author;
    findPost.body = req.body.body || findPost.body;

    try {
        const savePost = await Post.save();
        res.json(savePost);
      } catch (error) {
        console.log(error.message);
      }
}

export const deletePost = async (req,res) => {
    const id = req.params.id

    const findPost = await Post.findById({ _id: id });

    if (!findPost) {
      const error = new Error("Post no encontrado");
      return res.send(404).json({ msg: error.message });
    }

    try {
        await Post.findByIdAndDelete(id)
        res.json({msg: "findPost eliminado correctamente"})
    } catch (error) {
        res.status(500).send(error)
    }
}
