import User from "../models/User.js"; 

export async function signup (req,res){
    const {fullName , email,password} = req.body;
    
    try {
        if(!fullName || !email || !password){
            res.send(400).json({message : "All fields are required"});
        }

        if(password.length < 6){
            return res.send(400).json({message : "Password must be atleast 6 characters long"});
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
          return res.status(400).json({ message: "Invalid email format" });
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.send(400).json({message:"Email already exists"});
        }

        const idx = Math.floor(Math.random()*100)+1;
        const randomAvatar = `https://avatar.iran.liara.run/public/${idx}.png`

        const newUser = new User.create({
            fullName,
            email,
            password,
            profilePic : randomAvatar
        })

        
    } catch (error) {
        
    }
};

export function login (req,res){
    res.send("login route")
};

export function logout(req,res){
    res.send("logout route");
};