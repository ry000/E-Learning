cola(function (model) {
    debugger

    model.dataType({
        name: "User",
        properties: [
            {
                property: "userId",
                validators: ["required"]
            },
            {
                property: "name",
                validators: ["required"]
            },
            {
                property: "idCard",
                validators: ["required"]
            },

            {
                property: "birthday",
            },
            {
                property: "phone",
            },
            {
                property: "addr",
            },

            {
                property: "email",
            },
            {
                property: "remark",
            },
            {
                property: "groupId",
            },

            {
                property: "roleId",
            },
        ]
    })

    model.describe("user","User"); //entity person和数据类型Person绑定
    model.set("user",[]);
    model.set("user", {
        userId: "user100",
        name: "Name",
        idCard: "110102",
        birthday: "1991",
        phone: "010",
        addr: "beijing",
        email: "@",
        remark: "remark",
        groupId: "g100",
        roleId: "r100"
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
