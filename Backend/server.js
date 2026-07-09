import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";


dotenv.config();


const app = express();

app.use(cors());
app.use(express.json());


const resend = new Resend(process.env.RESEND_API_KEY);



app.post("/send-bill-email", async(req,res)=>{

    const {email, name, amount, month}=req.body;


    try{

        await resend.emails.send({

            from:"onboarding@resend.dev",

            to:email,

            subject:`Maintenance Bill - ${month}`,

            html:`
            
            <h2>Gharkul Society</h2>

            <p>Hello ${name},</p>

            <p>Your maintenance bill has been generated.</p>

            <h3>
            Amount: ₹${amount}
            </h3>

            <p>Month: ${month}</p>

            <br/>

            <p>Thank you.</p>

            `

        });


        res.json({
            success:true
        });


    }catch(error){

        res.status(500).json({
            error:error.message
        });

    }

});



app.listen(5000,()=>{

console.log("Backend running on 5000");

});