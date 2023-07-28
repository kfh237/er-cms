// pagination:
// every time the browser requests a page, we check the "?page=" 
// part of the URL and load a template & dataset accordingly.
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

  return htmlService.evaluate().setTitle('NYU Game Center ER CMS | ' + title);
}

// static file include for css and js partials.
// note we can't render template syntax via this include function 
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
