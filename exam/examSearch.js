cola(function (model) {
    debugger

    model.dataType({
        name: "PaperSearch",
        properties: [
            {
                property: "paperID"
            },
            {
                property: "paperName"
            },
            {
                property: "paperSubject"
            }
        ]
    })

    model.set("subjectname",[
        {
            key:"00",
            name:"所有科目"
        },
        {
            key:"01",
            name:"数学"
        },
        {
            key:"02",
            name:"英语"
        },
    ]);

    model.dataType({
        name: "PaperSearchResult",
        properties: [
            {
                property: "paperID"
            },
            {
                property: "paperName"
            },
            {
                property: "paperSubject"
            },
            {
                property: "paperQuantity"
            },
            {
                property: "paperScore"
            }
        ]
    })

    model.describe("paperSearch","PaperSearch"); //entity person和数据类型Person绑定
    model.set("paperSearch",[]);
    model.set("paperSearch", {
        paperID: "",
        paperName: "",
        paperSubject: ""
    });

    model.describe("paperSearchResult","PaperSearchResult");
    model.set("paperSearchResult",[]);
    model.set("paperSearchResult", {
        paperID: "",
        paperName: "",
        paperSubject: "",
        paperQuantity: "",
        paperScore: ""
    });

    model.action({
        test: function () {
            cola.alert("方法被调用");
        },

        createUser:function () {
            var user = model.get("user");
            if (user) {
                cola.util.update("test/createUser", user)
                    .then(function(){
                        debugger
                        cola.NotifyTipManager.info({
                            message: "系统消息", description: "保存成功！", showDuration: 5000
                        });
                        model.set("user", {});
                        //model.flush("entity1s");
                    })
                    .fail(function(){
                        alert("test");
                        debugger
                        if (result === "NO_DATA") cola.alert("数据没有改变");
                    })
            }
        }
    })
})
