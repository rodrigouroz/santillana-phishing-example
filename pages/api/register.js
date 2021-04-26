// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { google } from "googleapis";
import moment from "moment";

async function recordEntry(date, username) {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets"];
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes
    );

    const sheets = google.sheets({ version: "v4", auth: jwt });

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

export default (req, res) => {
  recordEntry(moment().format('DD-MM-YY, h:mm A'), req.body.username);
  res.status(200).end();
}
