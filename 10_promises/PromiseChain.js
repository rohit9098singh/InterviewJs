const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    const user = { name: "rohit", age: 38 };
    console.log("first Promise");
    res(user);
  }, 1000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout((user) => {
    const name = user.name;
    console.log("first Promise");
    res(name);
  }, 1000);
});

const promise3 = new Promise((res, rej) => {
  setTimeout((name) => {
    const greeting = `hello ${name}`;
    console.log("first Promise");
    res(greeting);
  }, 1000);
});

const promise4 = new Promise((res, rej) => {
  setTimeout((greeting) => {
    console.log("final output", greeting);
    res();
  }, 1000);
});

promise1()
  .then((user) => promise2(user))
  .then((name) => promise3(name))
  .then((greeting) => promise4(greeting))
  .catch((e) => console.log("❌ Error:", e));

const execute = async () => {
  try {
    const user = await promise1();
    const name = await promise2(user);
    const greeting = await promise3(name);
    await promise4(greeting);
  } catch (error) {
    console.log(error);
  }
};
execute();


