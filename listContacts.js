function listContacts(table) {
  var data = [];
  for (var i = 0; i < table.length; i++) {
    data.push(createJSONCT(table[i][0], table[i][1]));
  }

  return ({
    "fulfillmentMessages": [{
      "platform": "line",
      "type": 4,
      "payload": {
        "line": {
          "type": "flex",
          "altText": "Contacts",
          "contents": {
            // "type": "carousel",
            // "contents": data
            "type": "bubble",
            "direction": "ltr",
            "header": {
              "type": "box",
              "layout": "vertical",
              "backgroundColor": "#05E903FF",
              "contents": [
                {
                  "type": "text",
                  "text": "Contacts List",
                  "weight": "bold",
                  "color": "#FFFFFFFF",
                  "align": "center",
                  "contents": []
                }
              ]
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Contact",
                  "align": "center",
                  "contents": data
                }
              ]
            }
          }
        }
      }
    }]
  });
}
