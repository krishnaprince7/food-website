const mongoose = require("mongoose")

const EmplyessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
      },
      email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
      },
      massage: {
        type: String,
        required: [true, 'massage is required']
      },
      phone: {
        type: Number,
        required: [true, 'phone is required']
      },
      date: {
        type: String,
        required: [true, 'date is required']
      },
      people: {
        type: String,
        required: [true, 'people is required']
      }
})


const EmployMOdles =mongoose.model("register",EmplyessSchema)

module.exports = EmployMOdles