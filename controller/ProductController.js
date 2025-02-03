const Product = require('../model/Product')

exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleProduct = async (req, res) =>{
    try {
        const product = await Product.findOne({proId: req.params.id})
        if(!product)
            return res.status(404).json({msg: 'Product Not found'})
        
        res.json(product)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.postProduct = async (req,res)=>{
    try{
        const product = await Product.findOne({proId: req.body.proId}) 
        if(!product){
            const addedproduct = await Product.create(req.body)
            res.json(addedproduct)
        }
        else{
            res.json({msg:'product already exist'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.updateProduct = async (req,res)=>{
    try{
        const product = req.body
        const fetchedProduct = await Product.findOne({proId: product.proId})
        if(fetchedProduct){
            await Product.updateOne(product)
            res.json(await Product.findOne({proId: product.proId}))
        }
        else{
            res.json({msg:'product does not exist'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}

exports.deleteProduct = async (req,res)=>{
    try{
        const product = await Product.findOne({proId:req.params.id})
        if(product){
            await Product.deleteOne({proId:product.proId})
            res.json(product)
        }
        else{
            res.json({msg:'product does not exist'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}