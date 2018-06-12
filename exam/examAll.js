cola(function (model) {
    debugger

    model.dataType({
        name: "ExamAll",
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
                property: "paperQuantity",
            },
            {
                property: "paperScore",
            }
        ]
    })

    model.describe("examAll","ExamAll"); //entity person和数据类型Person绑定
    model.set("examAll",[]);
    model.set("examAll", {
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
