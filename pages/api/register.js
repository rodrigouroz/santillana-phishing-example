// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from "googleapis";
import moment from "moment";

async function recordEntry(date, username) {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];

    let buff = Buffer.from(process.env.GOOGLE_SHEETS_PRIVATE_KEY, 'base64');
    let key = buff.toString('ascii');

    const googleAuth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: key
      },
      scopes
    });

    const sheets = google.sheets({ version: "v4", auth: googleAuth });

    let values = [
      [
        date, username
      ]
    ];
    let resource = {
      values,
    };
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Users',
      valueInputOption: 'USER_ENTERED',
      resource,
    });

  } catch (err) {
    console.log(err);
  }
}

export default async (req, res) => {
  await recordEntry(moment().format('DD-MM-YY, h:mm A'), req.body.username);
  res.status(200).end();
}
