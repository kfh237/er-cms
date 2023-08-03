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
    netid: netid
  };

  student.basicInfo = getBasicInfo(netid, studentList);

  let pt = ss.getSheetByName('Incidents'),
    lr = pt.getLastRow(),
    lc = pt.getLastColumn(),
    r = pt.getRange(1, 1, lr, lc).getValues();

  student.incidents = getIncidents(netid, r);

  Logger.log(JSON.stringify(student));

  //fetch all rows from suspension table w/ matching id.

  return student;
}

function getBasicInfo(netid, studentList) {
  for (s of studentList) {
    if (s[5] == netid) return s;
  }
}

function getIncidents(netid, incidentList) {
  const incidents = {
    strikes: 0,
    penalties: 0
  };

  for (i of incidentList) {
    if (i[1] == netid) {
      const type = i[2] == 'Strike' ? 'strikes' : 'penalties';
      incidents[type]++;
    }
  }

  return incidents;
}