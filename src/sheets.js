let ss = SpreadsheetApp.openById('1h2mZPw-CIv0ajfLYrGS0lpYUk8yAM-_OKBFK_YSTzEk');

//get data from sheets
function getStudentList() {
  let sheet = ss.getSheetByName('Signups'),
    lr = sheet.getLastRow(),
    lc = sheet.getLastColumn(),
    // students = sheet.getRange(2, 1, lr, lc).getValues();
    students = sheet.getRange('A:J').getValues();

    Logger.log(JSON.stringify(students));
    return sheet.getRange('A:J').getValues();
}