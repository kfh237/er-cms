let ss = SpreadsheetApp.openById('1h2mZPw-CIv0ajfLYrGS0lpYUk8yAM-_OKBFK_YSTzEk');

//get data from sheets
function getStudentList() {
  let students;

  students = ss.getSheetByName('Signups').getRange('A:H').getValues();

  return students;
}