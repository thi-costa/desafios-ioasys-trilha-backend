const utils = require("./utils.js");

const userTest = {
    name: "",
    email: "@ioasys.com.br",
    age: 18,
    password: "Rafael@123",
    confirmPassword: "Rafal@123",
};

const formValid = (user) => {
    try {
        let exceptions = "";

        for (const prop in user) {
            exceptions += utils.formValid(user[prop], prop)
                ? utils.formValid(user[prop], prop)
                : "";
        }

        if (user["password"] !== user["confirmPassword"]) {
            exceptions += `password does not match\n`;
        }
        if (exceptions.length > 0) {
            throw exceptions;
        }

        console.log("user valid");
    } catch (e) {
        console.error(e);
    }
};

formValid(userTest);
