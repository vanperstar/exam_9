import { createTransport } from "nodemailer";

let transporter = createTransport({
  service: "gmail",
  auth: {
    user: "majidovanvar47@gmail.com", // generated ethereal user
    pass: "jgdzdfukgihnekuj", // generated ethereal password
  },
});

const mailer = async (message) => {
  transporter.sendMail(message, (err, info) => {
    if(err) return console.log(err.message);
    console.log(info);
  });
};
export default mailer;