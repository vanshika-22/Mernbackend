const mongoose = require("mongoose");  // Import mongoose module

            // Define a schema for registration
            const employeeSchema = new mongoose.Schema({
                firstname: {
                    type:String,
                    required:true
                },
                lastname: {
                    type:String,
                    required:true
                },
                email: {
                    type:String,
                    required:true,
                    unique:true
                },
                gender: {
                    type:String,
                    required:true,
                },
                phone: {
                    type:Number,
                    required:true,
                    unique:true
                },
                age: {
                    type:Number,
                    required:true,
                },
                password: {
                    type:String,
                    required:true,
                },
                confirmpassword: {
                    type:String,
                    required:true,
                }
            })

            // Create a Register model
            const Register = new mongoose.model("Register", employeeSchema);

            // Export the model
            module.exports = Register;