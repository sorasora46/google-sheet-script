function listHomeworks(table) {
  var data = [];
  for (var i = 0; i < table.length; i++) {
    if (table[i][1] === 1) {
      data.push(createJSONHW(table[i][0], table[i][2]));
    }
  }

  return ({
    "fulfillmentMessages": [{
      "platform": "line",
      "type": 4,
      "payload": {
        "line": {
          "type": "flex",
          "altText": "Your Homework",
          "contents": {
            "type": "carousel",
            "contents": data
          }
        }
      }
    }]
  });
}
