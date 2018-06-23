cola(function (model) {

    model.dataType({
        name: "QuestionNew",
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


    })

})
