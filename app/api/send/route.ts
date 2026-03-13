import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";

type ContactData = {
  from_name: string;
  from_email: string;
  message: string;
};

type ExcelRow = {
  Name: string;
  Email: string;
  Message: string;
  Date: string;
};

export async function POST(req: Request) {
  try {
    const body: ContactData = await req.json();

    const filePath = path.join(process.cwd(), "contact-data.xlsx");

    let workbook: XLSX.WorkBook;
    let worksheet: XLSX.WorkSheet;
    let data: ExcelRow[] = [];

    // if file exists read existing data
    if (fs.existsSync(filePath)) {
      workbook = XLSX.readFile(filePath);
      worksheet = workbook.Sheets["Sheet1"];
      data = XLSX.utils.sheet_to_json<ExcelRow>(worksheet);
    }

    // add new row
    data.push({
      Name: body.from_name,
      Email: body.from_email,
      Message: body.message,
      Date: new Date().toLocaleString(),
    });

    // create sheet
    worksheet = XLSX.utils.json_to_sheet(data);
    workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, filePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving Excel:", error);

    return NextResponse.json(
      { error: "Failed to save data" },
      { status: 500 }
    );
  }
}