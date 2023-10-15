const gain = (req,res)=>{
     res.status(200).json({message : "get-request"})
}

const create = (req,res)=>{
    res.status(200).json({message : "post-request"})
}

const upadate = (req,res)=>{
    res.status(200).json({message : "put-request"})
}

const remove = (req,res)=>{
    res.status(200).json({message : "remove-request"})
}

module.exports = {
    gain,
    create,
    upadate,
    remove
}