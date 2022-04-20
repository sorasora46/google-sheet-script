function createJSONCT(name, className, phone, email) {
  return ({
    "type": "box",
    "layout": "vertical",
    "spacing": "md",
    "contents": [
      {
        "type": "text",
        "text": "Mr./Mrs. " +  name + " (" + className + ")",
        "weight": "bold",
        "align": "start",
        "contents": []
      },
      {
        "type": "text",
        "text": phone+"",
        "contents": []
      },
      {
        "type": "text",
        "text": email,
        "align": "start",
        "contents": []
      },
      {
        "type": "separator",
        "margin": "lg",
        "color": "#000000FF"
      }
    ]
  });
}
