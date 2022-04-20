var ss = SpreadsheetApp.openById("1tc8k09BMuUkECrsaYoAEP0ZYImSvBzX1d9t-BK7gg5s");
var sheet1 = ss.getSheetByName("Sheet1"); // Classes
var sheet2 = ss.getSheetByName("Sheet2"); // Contacts

function doPost(e) {

  var dialogflowDATA = JSON.parse(e.postData.contents);
  var message = dialogflowDATA.queryResult.queryText;
  var tableArray = [];

  switch (message) {
    case 'List Homeworks':
      tableArray = sheet1.getRange(2, 1, sheet1.getLastRow() - 1, sheet1.getLastColumn()).getValues();
      var myData = listHomeworks(tableArray);
      var replyJSON = ContentService.createTextOutput(JSON.stringify(myData)).setMimeType(ContentService.MimeType.JSON);
      return replyJSON;
    case 'List Contacts':
      tableArray = sheet2.getRange(2, 1, sheet2.getLastRow() - 1, sheet2.getLastColumn()).getValues();
      var myData = listContacts(tableArray);
      var replyJSON = ContentService.createTextOutput(JSON.stringify(myData)).setMimeType(ContentService.MimeType.JSON);
      return replyJSON;
  }

}