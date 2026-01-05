import { google } from "googleapis"

export default async function (req, res) {
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  })

  const sheets = google.sheets({ version: "v4", auth })
  const sheetId = process.env.SHEET_ID

  const data = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "bicycles!A2:K"
  })

  const row = data.data.values.find(r => r[4] === req.query.id)

  res.json({
    student_name: row[1],
    class: row[2],
    generation: row[3],
    bike_id: row[4],
    borrow_date: row[5],
    status: row[8]
  })
}
