const mongoose = require("mongoose");  // Import the mongoose model
 
            // Define the schema for login
            const employeeSchema = new mongoose.Schema({
                email: {
                    type:String,
                    required:true,
                    unique:true
                },
                password: {
                    type:String,
                    required:true,
                }
            })

            // Create a Login model
            const Login = new mongoose.model("Login", employeeSchema);

            // Export the model
            module.exports = Login;