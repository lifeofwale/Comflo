import { createTransport } from 'nodemailer'
export function sendMail (params, callback) {
  let email = params.email
  let fromEmail = params.from_email
  let body = params.body
  let subject = params.subject
  if (email == null || fromEmail == null || body == null || subject == null) { return { status: 'failed', err: 'the required parameters were not supplied' } }
  let transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service: 'Gmail',
    auth: {
      user: 'jude.dike@comflo.com',
      pass: 'dyke2010'
    }
  })

  let mailOptions = {
    from: fromEmail,
    to: email,
    subject: subject,
    html: body
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      callback(error, null)
    } else {
      callback(error, info.response)
    }
  })
}
