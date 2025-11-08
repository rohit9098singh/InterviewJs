function fetchUser() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const user = { name: "rohit", age: 36 };
            console.log("then user details");
            res(user);
        }, 1000)

    })
}

function getName(user) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const name = user?.name;
            console.log("the name of the user is", name);
            res(name)
        }, 3000)

    })
}
function greet(name) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const greeting = ` hello ${name} whats up what is going on`;
            res(greeting);
        }, 4000)

    })
}

fetchUser().then((user) => getName(user)).then((name) => greet(name)).then((res) => console.log(res))