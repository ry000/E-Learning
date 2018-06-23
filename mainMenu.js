cola(function (model) {
    var aaa=[
        {
            "label":"用户管理",
            "path":"E-Learning/user/userMain.html"
        },
        {
            "label":"试题管理",
            "path":"E-Learning/question/questionMain.html"
        },
        {
            "label":"试卷管理",
            "path":"E-Learning/paper/paperMain.html"
        },
        {
            "label":"考试管理",
            "path":"E-Learning/exam/examMain.html"
        }

    ];
    model.set("homemenus",aaa);
    model.widgetConfig({
        homemenuTree: {
            autoCollapse: true,
            autoExpand: true,
            bind: {
                expression: "homemenu in homemenus",
                textProperty: "label",
                child: {
                    recursive: true,
                    textProperty: "label",
                    expression: "homemenu in homemenu.homemenus"
                }
            },
            itemClick: function (self, arg) {
                var data = arg.item.get("data").toJSON();

                if (data.path) {
                    cola.widget("changeIframe").set("path",data.path);
                }

            }
        }
    })
})

