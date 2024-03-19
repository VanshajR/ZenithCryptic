import nodemailer from "nodemailer";

async function sendMail(username,mail){
    const transporter = nodemailer.createTransport({
        service : "gmail",
        // host: 'smtp.thapar.edu', // Replace with SMTP server address
        // port: 465, // Replace with port number
        // secure: true,
        auth :{
            // user : process.env.EMAIL || "vp2005rawal@gmail,com",
            // pass: process.env.PASSWORD || "vp2005rawal"
            user : "backslash_sc@thapar.edu", //Add BCS Gmail ID
            pass: "iqwd aenc yznf fmjl" //BCS Gmail App password
        }
    }

    );

    //email content
    const mailOptions = {
        // from:process.env.EMAIL || "vp2005rawal@gmail.com",
        from:"backslash_sc@thapar.edu",
        to:mail,
        subject : "Get Ready Comarade!",
        text:`Major ${username}, Your account is successfully created, now prepare yourself to embark on an adventure into a world of Virtual Riot and Warfare. -Backslash Computing Society `
    }

    try{
        const result = await transporter.sendMail(mailOptions);
        console.log("email sent successfully");
    }catch(err){
        // console.log("Email Failed to be sent");
        console.log(err);
    }
}

export default sendMail;