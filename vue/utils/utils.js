import { createTransport } from 'nodemailer'
export function sendMail (params, callback) {
  let email = params.email
  let body = sendSupportMail(params.body)
  let subject = params.subject
  if (email == null || body == null || subject == null) { return { status: 'failed', err: 'the required parameters were not supplied' } }
  let transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service: 'Gmail',
    auth: {
      user: 'support@comflo.com',
      pass: 'comflodey4you'
    }
  })

  let mailOptions = {
    from: email,
    to: 'support@comflo.com',
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

/**
 * Send a user token
 * @param {object} user
 * @param {string} token
 */
export function sendSupportMail(body) {
  const body = `
      <!DOCTYPE html>
      <html lang="en">
          <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
          <meta name="description" content="">
          <meta name="author" content="">
          <link href="https://fonts.googleapis.com/css?family=Muli:200" rel="stylesheet">
          <title>Comflo Portal</title>
          </head>

          <body style="max-width: 600px;margin: 10px auto;padding: 70px;border: 1px solid #ccc;background: #ffffff;color: #4e4e4e;font-family: Muli;">
          <div>
              <div style="margin-bottom: 3rem;">
              <img src="http://comflo-app.herokuapp.com/static/images/comflologo/colorlogotrans.png" width='120px' alt="Comflo">
              </div>
              
              <p style="margin-bottom: 2em;line-height: 26px;font-size: 14px;">
                 ${body}
              </p>
              <p style="margin-bottom: 2em;line-height: 26px;font-size: 14px;">
                  Cheers, <br>
                  The Comflo Team
              </p>
          </div>
          </body>
      </html>
  `
  return body
}
