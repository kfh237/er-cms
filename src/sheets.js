const ss = SpreadsheetApp.openById('1h2mZPw-CIv0ajfLYrGS0lpYUk8yAM-_OKBFK_YSTzEk');

//get data from sheets
function getStudentList() {
  const sheet = ss.getSheetByName('Signups'),
    lr = sheet.getLastRow(),
    lc = sheet.getLastColumn(),
    students = sheet.getRange(2, 1, lr, lc).getValues();

  return students;
}

function getStudent(netid, studentList) {
  let student = {
    basicInfo: [],
    strikes: 0,
    penalties: 0,
    suspended: false
  };

  for (s of studentList) {
    if (s[5] == netid) {
      student.basicInfo = s;
      break;
    }
  }

  //load strikes and penalties from pivot table
  const pivotTables = ss.getSheetByName('Incidents').getPivotTables();

  // for (const pt of pivotTables) {
  //   Logger.log(JSON.stringify(pt.getPivotValues()));
  // }

  //fetch all rows from suspension table w/ matching id.

  return student;
}