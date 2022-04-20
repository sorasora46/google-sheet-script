function createJSONCL(className, isHW) {
    if (isHW) {
        return ({
            "type": "box",
            "layout": "vertical",
            "spacing": "md",
            "backgroundColor": "#12D218FF",
            "contents": [
                {
                    "type": "text",
                    "text": className,
                    "weight": "bold",
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
    return ({
        "type": "box",
        "layout": "vertical",
        "spacing": "md",
        "contents": [
            {
                "type": "text",
                "text": className,
                "weight": "bold",
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