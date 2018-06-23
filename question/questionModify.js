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
            var questionId = question.get("questionID");
            debugger
            $.ajax({
                url: "controller/demo/E_learning/question/modifyQuestion",
                type: "POST",
                data: {
                    all: question.get("questionID"),
                    questionId: question.get("questionID"),
                    questionType: question.get("questionType"),
                    questionSubject: question.get("questionSubject"),
                    questionContent: question.get("questionContent"),
                    choiceA: question.get("choiceA"),
                    choiceB: question.get("choiceB"),
                    choiceC: question.get("choiceC"),
                    choiceD: question.get("choiceD"),
                    choiceE: question.get("choiceE"),
                    questionAnswer: question.get("questionAnswer"),
                    questionScore: question.get("questionScore")
                },
                error: function () {
                    cola.alert("操作失败")
                },
                success: function (data) {
                    cola.alert("操作成功")
                    model.action.initial();
                }
            })

        },

        initial:function(){
            var params = cola.util.queryParams();
            var questionId = params.questionId;
            $.ajax({
                url: "controller/demo/E_learning/question/findbyQuestionId",
                type: "POST",
                data: {
                    subjectId:questionId
                },
                error: function () {
                    cola.alert("操作失败")
                },
                success: function (data) {
                    model.set("questionNew", {
                        questionID: data.questionId,
                        questionType: data.questionType,
                        questionSubject: data.questionSubject,
                        questionContent: data.questionContent,
                        choiceA: data.choiceA,
                        choiceB: data.choiceB,
                        choiceC: data.choiceC,
                        choiceD: data.choiceD,
                        choiceE: data.choiceE,
                        questionAnswer: data.questionAnswer,
                        questionScore: data.questionScore
                    });
                }
            })
        }
    })

    model.action.initial();
})
