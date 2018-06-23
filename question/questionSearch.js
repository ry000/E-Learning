cola(function (model) {
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

    model.describe("condition","question");
    model.set("condition",{});
    model.set("condition", {
        questionType: "",
        questionSubject: "",
        questionContent: "",
    });

    model.set("questionSearchResult",{});

    model.describe("questionSearchResult", {
        dataType: "question",
        provider: {
            url: "controller/demo/E_learning/question/listQuestion?from={{$from}}&limit={{$limit}}",
            pageSize: 10, method: "POST",
            parameter: "{{condition}}",
            ajaxOptions: {contentType: "application/json", sendJson: true}
        }
    });

    model.describe("questionSearchResult","question");

    model.action({
        test: function () {
            cola.alert("方法被调用");
        },

        queryQuestion: function () {
            model.flush("questionSearchResult");
        },

        checkQuestion: function () {
            var question = model.get("questionSearchResult").current;
            var questionId = question.get("questionId");
            window.open("E-Learning/question/questionShow.html?questionId="+questionId);
        },

        modifyQuestion: function () {
            var question = model.get("questionSearchResult").current;
            var questionId = question.get("questionId");
            window.open("E-Learning/question/questionModify.html?questionId="+questionId);
        },

        deleteQuestion:function () {
            var question = model.get("questionSearchResult").current;
            if (question) {
                debugger
                cola.util.update("controller/demo/E_learning/question/deleteQuestion", question)
                    .then(function(){
                        cola.NotifyTipManager.info({
                            message: "系统消息", description: "保存成功！", showDuration: 5000
                        });
                        model.set("questionNew", {});
                    })
                    .fail(function(){
                        if (result === "NO_DATA") cola.alert("数据没有改变");
                    })
            }
        },
    })

    model.action.queryQuestion();
})
