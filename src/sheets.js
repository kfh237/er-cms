const ss = SpreadsheetApp.openById('1h2mZPw-CIv0ajfLYrGS0lpYUk8yAM-_OKBFK_YSTzEk');

//get data from sheets
function getStudentList() {
  const sheet = ss.getSheetByName('Signups'),
    lr = sheet.getLastRow(),
    lc = sheet.getLastColumn(),
    students = sheet.getRange(2, 1, lr, lc).getValues();

  Logger.log(JSON.stringify(students));
  return JSON.stringify(students);
}

function getStudent(netid, index) {
  let student = {
    'netid': netid,
    'index': index
  };

  //load strikes and penalties from pivot table
  //suspension table

  return JSON.stringify(student);
}