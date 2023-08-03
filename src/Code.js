const siteName = "NYU.GC.ER.CMS";

function doGet(e) {
  let htmlService, title, page;

  switch (e.parameter.page) {
    case 'signups':
      htmlService = HtmlService.createTemplateFromFile('signups');
      title = 'Registered Students';
      page = 'signups';
      htmlService.studentList = getStudentList();
      htmlService.netid = !!e.parameters.netid ? e.parameters.netid[0] : false;
      if (!!htmlService.netid) htmlService.student = getStudent(htmlService.netid, htmlService.studentList);
      break;

    default:
      htmlService = HtmlService.createTemplateFromFile('index');
      title = 'Welcome';
      page = 'welcome';
      break;    
  }

  htmlService.title = title;
  htmlService.page = page;
  htmlService.url = ScriptApp.getService().getUrl();
  htmlService.siteName = siteName;

  return htmlService.evaluate().setTitle(siteName + ' | ' + title);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
