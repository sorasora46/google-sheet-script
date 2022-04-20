function listClasses(table) {
    var data = [];
    for (var i = 0; i < table.length; i++) {
        data.push(createJSONCL(table[i][0], table[i][1]));
    }
    return ({
        "fulfillmentMessages": [{
            "platform": "line",
            "type": 4,
            "payload": {
                "line": {
                    "type": "flex",
                    "altText": "Classes Enrolled",
                    "contents": {
                        "type": "bubble",
                        "direction": "ltr",
                        "header": {
                            "type": "box",
                            "layout": "vertical",
                            "backgroundColor": "#05E903FF",
                            "contents": [
                                {
                                    "type": "text",
                                    "text": "Classes Enrolled",
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
                            "spacing": "lg",
                            "contents": data
                        }
                    }
                }
            }
        }]
    });
}