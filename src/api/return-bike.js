import { google } from "googleapis"

export default async function (req, res) {
  const { bike_id, condition } = req.body

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"]
  })

  const sheets = google.sheets({ version: "v4", auth })
  const sheetId = process.env.SHEET_ID

  const rows = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: "bicycles!A2:K"
  })

  const index = rows.data.values.findIndex(r => r[4] === bike_id)

  await sheets.spreadsheets.values.update({
    spreadsheetId: sheetId,
    range: `bicycles!H${index + 2}:I${index + 2}`,
    valueInputOption: "RAW",
    requestBody: {
      values: [[condition, "returned"]]
    }
  })

  res.json({ success: true })
}
