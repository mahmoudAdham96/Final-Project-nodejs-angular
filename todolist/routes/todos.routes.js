const router = require('express').Router()

const {Todo} = require('../models/todo.model');

const jwt = require("jsonwebtoken")


const todos = {
    id: new Date().getTime(),
    title:"todo one",
    completed:true,
    createdAt: new Date()
}

const  user ={
    id:"mdkkdkdjhsjs",
    name:"mahmoud Adham"
}



router.get('/gettodos', async  (req,res)=>{

   const user = req.user;
       const todos =await Todo.find({
           'createdBy.id':user.id
       })
       res.status(200).json({
           todos
       })

    
})
///////////////////////////////////////////////

router.post('/createtodo',async(req,res)=>{

    const {title,completed}=req.body

    const user =req.user;
        
    const todo = new Todo({
        title,
        completed,
        createdBy:{
            id: user.id,
            name: user.name,
        }

    })

    await todo.save()

    res.status(201).json({
        todo
    })
       
   })
////////////////////////////////////////////////////////////////////////

   router.put('/updateTodo/:id', async (req, res) => {
    const params = req.params;
    const id = params.id;     
    const {title, completed} = req.body

    const user =req.user;
        const todo = await Todo.findOneAndUpdate({
            _id: id,
            'createdBy.id': user.id
        }, {
            title,
            completed
        })

        if (!todo) return res.status(404).json({msg: 'Todo Not Found'})


        res.status(200).json({msg: 'Todo Updated Successfully.'})
      
    
})
router.delete('/deletetodo/:id',  async (req, res) => {

    const {id} = req.params;

    const user =req.user;

    
    
        const todo = await Todo.findOneAndDelete({
            _id:id,
            'createdBy.id':user.id

        })

        if (!todo) return res.status(404).json({msg: 'Todo Not Found'})

        res.status(200).json({
            msg: "Todo Deleted Successfully."
        })

    
})








module.exports = router;