cola(function (model) {
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
        name: "question",
        properties: {
            questionID: {caption: "试题ID"},
            questionType: {caption: "题型"},
            questionSubject: {caption: "科目"},
            questionContent: {caption: "题干"},
            choiceA: {caption: "A"},
            choiceB:{caption:"B"},
            choiceC: {caption: "C"},
            choiceD:{caption:"D"},
            choiceE:{caption:"E"},
            questionAnswer: {caption: "答案"},
            questionScore:{caption:"分值"},
            isValid:{caption:"是否有效"},
        }
    });

    model.set("typename",[
        {
            key:"",
            name:"所有题型"
        },
        {
            key:"01",
            name:"单选"
        }
    ]);

    model.set("subjectname",[
        {
            key:"",
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

    model.describe("questionSearchResult","question");
    model.set("questionSearchResult",[]);
    model.set("questionSearchResult", {
        questionStates: "",
        questionID: "",
        questionType: "",
        questionSubject: "",
        questionScore: ""
    });

    model.dataType({
        name: "Condition",
        properties: {
            questionContent: {caption: "[(#{questionContent})]"},
            questionType: {caption: "[(#{questionType})]"},
            questionSubject: {caption: "[(#{questionSubject})]"}
        }
    })
    model.describe("condition","question");
    model.set("condition",{});
    model.set("condition", {
        questionType: "",
        questionSubject: "",
        questionContent: "",
    });

    model.describe("questionSearchResult", {
        dataType: "question",
        provider: {
            url: "controller/demo/E_learning/question/listQuestion?from={{$from}}&limit={{$limit}}",
            pageSize: 10, method: "POST",
            parameter: "{{condition}}",
            ajaxOptions: {contentType: "application/json", sendJson: true}
        }
    });

    model.action({
        test: function () {
            cola.alert("方法被调用");
        },

        queryQuestion: function () {
            model.flush("questionSearchResult");
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
