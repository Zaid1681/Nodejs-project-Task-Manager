const mongoose = require("mongoose")


//url is basically the atlas connection string
//passing the promise directly to the app.js directly
const connectMongo =(url)=> {
    mongoose.connect(url) //returns promise
}


module.exports = connectMongo;

// const url = "#atlas-url"
// mongoose.connect(url).then(()=>{
//     console.log("connected to mongoose sucessfully")
// }).catch((err)=>{
//     console.log(err)
// })


