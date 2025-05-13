function currying(fn){
    function currying2(fn2){
        function currying3(fn3){
            return fn + fn2 + fn3;
        }
        currying3();
    }
    currying2()
}

currying(1)(2)(3)
currying(1)(2 ,3)
currying(1,2)(3)
currying(1,2,3)
