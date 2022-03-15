const get=(req,res)=>{
   
    const user=[
        {id:1,name:"Bollywood"},
        {id:2,name:"Technologr"},
        {id:3,name:"Travel"},


    ]
    
        res.send(user)
}
module.exports=get;