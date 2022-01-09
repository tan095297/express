exports.getProducts = async(req,res)=>{
    res.send(`get all products`);
};

exports.getProductById = async(req,res)=>{
    res.send(`Get Product By ID : ${req.params.id}`);
}

exports.getProductByName = async(req,res)=>{
    res.send(`Get Product By name : ${req.params.name}`);
}

exports.getProductByPrice = async(req,res)=>{
    res.send(`Get Product By price : ${req.params.price}`);
}

exports.postProductById = async(req,res)=>{
    res.send(`Id : ${req.body.id}, Name :${req.body.name}`);
}

exports.putProductById = async(req,res)=>{
    res.send(`Edit By ID : ${req.params.id},Name :${req.body.name}`);
}

exports.patchProductById = async(req,res)=>{
    res.send(`patch By ID : ${req.params.id},Name :${req.body.name}`);
}

exports.deleteProductById = async(req,res)=>{
    res.send(`delete By ID : ${req.params.id}`);
}
