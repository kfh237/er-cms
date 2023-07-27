// pagination:
// every time the browser requests a page, we check the "?page=" 
// part of the URL and load a template & dataset accordingly.
function doGet(event) {
  let htmlService, title, page;

  switch (event.parameter.page) {
    case 'signups':
      htmlService = HtmlService.createTemplateFromFile('signups');
      htmlService.students = getStudentList();
      title = 'Registered Students';
      page = 'signups';
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

  return htmlService.evaluate().setTitle('PeopleSoft Friend Manager Pro | ' + title);
}

// static file include for css and js partials.
// note we can't render template syntax via this include function 
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
