let obj = {
  count: 0,
  increment: function () {
    setTimeout(function () {
      console.log(this.count++);
    }, 1000);
  },
};

obj.increment();
