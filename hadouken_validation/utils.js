const isEmpty = (value) => {
    if (typeof value === "string") {
        return !value;
    }

    if (typeof value === "number") {
        return false;
    }

    if (typeof value === "boolean") {
        return false;
    }

    return true;
};

const isPasswordValid = (value) => {
    value.match(
        /^((?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,})$/
    );
};

const isEmail = (value) =>
    value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const formValid = (value, key) => {
    if (isEmpty(value)) {
        return `${key} is empty\n`;
    }

    if (key === "email" && !isEmail(value)) {
        return `${value} is not email\n`;
    }
    if (key === "password" && !isPasswordValid(value)) {
        return `${key} is not valid, it should have a minimum of eight characters, at least one letter, one number and one special character`;
    }
};

module.exports = { isEmpty, formValid };
