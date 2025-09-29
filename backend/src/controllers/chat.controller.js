import { generateStreamUseToken } from "../lib/stream.js";

export async function getStreamToken(req,res){
    try {
        const token = generateStreamUseToken(req.user.id);
        res.status(200).json({token});
    } catch (error) {
        console.error("Error generating stream token:", error);
        res.status(500).json({message:"Internal Server Error"});
    }
};