import {StreamChat} from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const secretKey = process.env.STREAM_API_SECRET;

if(!apiKey || !secretKey){
    console.error("STREAM API KEY and STREAM API SECRET is missing");
}

const streamClient = StreamChat.getInstance(apiKey,secretKey);

export const upsertStreamUser = async (userData) =>{
    try{
        await streamClient.upsertUsers([userData]);
        return userData;
    }
    catch(error){
        console.error("Error upserting stream user",error);
    }
};

// to do it 
export const  generateStreamUseToken = (userId) =>{}