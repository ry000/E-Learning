cola(function (model) {
    model.dataType({
        name: "exam",
        properties: {
            paperID: {caption: "试卷ID"},
            paperName: {caption: "试卷名称"},
            subject: {caption: "科目"},
            totalScore: {caption: "总分"},
        }
    });

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

    model.set("examAll",[]);
    model.set("examAll", {
        paperID: "",
        paperName: "",
        subject: "",
        totalScore: ""
    });

    model.describe("examAll", {
        dataType: "exam",
        provider: {
            url: "controller/demo/paper/paper/queryPaper?from={{$from}}&limit={{$limit}}",
            pageSize: 10, method: "POST",
            ajaxOptions: {contentType: "application/json", sendJson: true}
        }
    });
    model.describe("examAll","exam");

    model.action({
        test: function () {
            var aaa = model.get("examAll").current;
            debugger
            cola.alert("方法被调用");
        },

        queryPaper: function () {
            model.flush("examAll");
        },

        takeExam: function () {
            var exam = model.get("examAll").current;
            var examId = exam.get("paperId");
            debugger
            window.open("E-Learning/exam/takeExam.html?paperId="+examId);
        },
    })

    model.action.queryPaper();
})
