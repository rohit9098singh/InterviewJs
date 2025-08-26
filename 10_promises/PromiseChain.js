// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     const user = { name: "rohit", age: 38 };
//     console.log("first Promise");
//     res(user);
//   }, 1000);
// });

// function promise2(user) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const name = user.name;
//       console.log("second Promise");
//       res(name);
//     }, 1000);
//   });
// }

// function promise3(name) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const greeting = `hello ${name}`;
//       console.log("third Promise");
//       res(greeting);
//     }, 1000);
//   });
// }

// function promise4(greeting) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("final output", greeting);
//       res();
//     }, 1000);
//   });
// }

// promise1
//   .then((user) => promise2(user))
//   .then((name) => promise3(name))
//   .then((greeting) => promise4(greeting))
//   .catch((e) => console.log("❌ Error:", e));

// const execute = async () => {
//   try {
//     const user = await promise1;               // ✅ no parentheses
//     const name = await promise2(user);         // ✅ these are functions
//     const greeting = await promise3(name);
//     await promise4(greeting);
//   } catch (error) {
//     console.log("❌ Error:", error);
//   }
// };

// execute();

const addMilk = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("add milk");
      res();
    }, 1000);
  });
};
const addTeaLeaves = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("add tea leaves");
      res();
    }, 1000);
  });
};
const addSugar = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("add sugars");
      res();
    }, 1000);
  });
};
const serve = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("serve");
    }, 1000);
  });
};

addMilk()
  .then(() => addTeaLeaves())
  .then(() => addSugar())
  .then(() => serve())
  .catch((err) => {
    console.log(err);
  });

const result = async () => {
  await addMilk();
  await addTeaLeaves();
  await addSugar();
  await serve();
};

result();





