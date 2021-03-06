cola(function (model) {

    model.dataType({
        name: "QuestionNew",
        properties: [
            {
                property: "questionID"
            },
            {
                property: "questionType",
                validators: ["required"]
            },
            {
                property: "questionSubject",
                validators: ["required"]
            },
            {
                property: "questionContent",
                validators: ["required"]
            },
            {
                property: "choiceA",
            },
            {
                property: "choiceB",
            },
            {
                property: "choiceC",
            },
            {
                property: "choiceD",
            },
            {
                property: "choiceE",
            },
            {
                property: "questionAnswer",
                validators: ["required"]
            },
            {
                property: "questionScore",
                validators: ["required"]
            },
        ]
    })

    model.set("choice", [
        {
            key: "A",
            value: "A"
        },
        {
            key: "B",
            value: "B"
        },
        {
            key: "C",
            value: "C"
        },
        {
            key: "D",
            value: "D"
        },
        {
            key: "E",
            value: "E"
        }
    ]);

    model.set("typename",[
        {
            key:"01",
            name:"单选"
        }
    ]);

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

    model.describe("questionNew","QuestionNew"); //entity person和数据类型Person绑定
    model.set("questionNew",[]);
    model.set("questionNew", {
        questionID: "",
        questionType: "",
        questionSubject: "",
        questionContent: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        choiceE: "",
        questionAnswer: "",
        questionScore: ""
    });

    model.action({
        test: function () {
            cola.alert("方法被调用");
        },

        createQuestion:function () {
            var question = model.get("questionNew");
            if (question) {
                debugger
                cola.util.update("controller/demo/E_learning/question/createQuestion", question)
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
})
