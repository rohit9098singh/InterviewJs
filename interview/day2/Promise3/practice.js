const MyPromise = new Promise((res, rej) => {
      document.getElementById("btn").addEventListener("click", () => {
        res("✅ Resolved");
      });

      document.getElementById("btn2").addEventListener("click", () => {
        rej("❌ Rejected");
      });
    });

    async function myPromiseFunction() {
      try {
        const result = await MyPromise;
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    myPromiseFunction();