function runProgram(input) {
    input = input.trim().split("\n");
    var tc = +input[0];
    var line=1;
    for(var i=0;i<tc;i++){
        var n = +input[line];
        line++
        var arr = input[line].trim().split(" ").map(Number);
        line++
        var k =+input[line]
        line++
        
        var sum  =0;
        var max = -Infinity
        
        for(var j=0;j<n;j++){
            for(var r=j+1;r<n;r++){ // 
               //  console.log(sum)
                if(arr[j]+arr[r]<k){
                  sum = arr[j]+arr[r] ;
                  if(sum>max){
                      max=sum;
                  }
                }
            }
            
        }
        
        if(sum==0){
            console.log(-1);
        }else{
            console.log(max)
        }
    }
   }
   if (process.env.USER === "") {
     runProgram(``);
   } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }
   