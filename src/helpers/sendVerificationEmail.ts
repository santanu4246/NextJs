import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifycode:string
):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'hello world',
            react: VerificationEmail({username,otp:verifycode}),
          });
        return {success:true,messgae:'Verification email send sucessfully'}
    } catch (emailError) {
        console.error("Error sending verification email",emailError)
        return {success:false,messgae:'Failed to send verificaion email'}
    }
}