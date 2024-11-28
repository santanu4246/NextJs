import { Message } from "@/model/User.model"
export interface ApiResponse{
    success:boolean,
    messgae:string,
    isAcceptingMessages?:boolean
    messages?:Array<Message>
}
