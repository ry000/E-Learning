cola(function (model) {
    debugger

    model.dataType({
        name: "PaperNew",
        properties: [
            {
                property: "paperID"
            },
            {
                property: "paperName",
                validators: ["required"]
            },
            {
                property: "paperSubject",
                validators: ["required"]
            },
            {
                property: "paperQuestions",
                validators: ["required"]
            },
            {
                property: "paperScore",
            },
            {
                property: "paperTime",
                validators: ["required"]
            },
            {
                property: "paperQuantity",
            }
        ]
    })

    model.set("subjectname",[
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
        name: "QuestionSearchResult",
        properties: [
            {
                property: "questionID"
            },
            {
                property: "questionType"
            },
            {
                property: "questionSubject"
            },
            {
                property: "questionContent"
            },
            {
                property: "isValid"
            }
        ]
    })
    
    model.set("typename",[
        {
            key:"00",
            name:"所有题型"
        },
        {
            key:"01",
            name:"单选"
        }
    ]);

    model.describe("paperNew","PaperNew"); //entity person和数据类型Person绑定
    model.set("paperNew",[]);
    model.set("paperNew", {
        paperID: "",
        paperName: "",
        paperSubject: "",
        paperQuestions: "",
        paperScore: "",
        paperTime: "",
        paperQuantity: ""
    });

    model.describe("questionSearchResult","QuestionSearchResult");
    model.set("questionSearchResult",[]);
    model.set("questionSearchResult", {
        questionStates: "",
        questionID: "",
        questionType: "",
        questionSubject: "",
        questionScore: ""
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
