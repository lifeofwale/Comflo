// import { createTransport } from 'nodemailer'
// export function sendMail (params, callback) {
//   let email = params.email
//   let body = sendSupportMail(params.body)
//   let subject = params.subject
//   if (email == null || body == null || subject == null) { return { status: 'failed', err: 'the required parameters were not supplied' } }
//   let transporter = createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     service: 'Gmail',
//     auth: {
//       user: 'support@comflo.com',
//       pass: 'comflodey4you'
//     }
//   })

//   let mailOptions = {
//     from: email,
//     to: 'support@comflo.com',
//     subject: subject,
//     html: body
//   }

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       callback(error, null)
//     } else {
//       callback(error, info.response)
//     }
//   })
// }


