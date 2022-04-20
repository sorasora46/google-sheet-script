function createJSONCT(name, contact) {
  return ({
    "type": "box",
    "layout": "vertical",
    "spacing": "md",
    "contents": [
      {
        "type": "text",
        "text": "Mr. Sorrawit Kwanja",
        "weight": "bold",
        "align": "start",
        "contents": []
      },
      {
        "type": "text",
        "text": "0881234567",
        "contents": []
      },
      {
        "type": "text",
        "text": "sorrawit.kwan@kmutt.ac.th",
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
