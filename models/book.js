const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const Bookschemma=new Schema({
    to:{
        require:true,
        type:String
    },
    from:{
        require:true,
        type:String
    },
    date:{
        require:true,
        type:Date
    },
    preference:{
        require:true,
        type:String
    }
})

module.exports=mongoose.model('Booking',Bookschemma)