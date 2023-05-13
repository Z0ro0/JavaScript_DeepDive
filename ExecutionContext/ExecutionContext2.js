function execute(param1, param2){
    var a = 1, b = 2;
    function func(){
        return a + b;//3
    }
    return param1 + param2 + func();// 3+4+3=10
}

execute(3, 4);