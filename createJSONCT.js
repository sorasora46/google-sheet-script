function createJSONCT(name, contact) {
  return ({
    "type": "bubble",
    "direction": "ltr",
    "header": {
      "type": "box",
      "layout": "vertical",
      "backgroundColor": "#12D218FF",
      "contents": [
        {
          "type": "text",
          "text": name,
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
          "text": contact+"",
          "color": "#FF0000FF",
          "align": "center",
          "contents": []
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "horizontal",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "See more",
            "uri": "https://linecorp.com"
          },
          "color": "#949AEBFF",
          "style": "primary",
          "gravity": "center"
        }
      ]
    }
  });
}
