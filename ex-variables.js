//1. Tập đặt tên biến với từ khóa `let` `const` càng nhiều càng tốt, sử dụng các kiểu dữ liệu đã học như null, undefined, number, string, boolean.
// #null
{
  let myName = null;
  console.log(myName);
  const study = null;
  console.log(study);
}
// #undefined
{
  let coding;
  let online;
  console.log("type of coding is", typeof coding);
  console.log("type of coding is", typeof online);
}
// #number
{
  const amount = 144;
  console.log(Math.sqrt(amount));
  let max = 144;
  let min = 12;
  console.log(Math.floor(Math.random() * (max - min) + min));
  console.log(Math.pow(12, 2));
}
// #string
{
  let hisName = "evon";
  let hisJob = "my teacher";
  const content = `His name is ${hisName} and he is a ${hisJob}`;
  console.log(content);
}
// #boolean
{
  let iAmAnEngineer = true;
  console.log(iAmAnEngineer);
  console.log(!iAmAnEngineer);
}
// 2. Tạo ra random số từ `100 - 1000`.
{
  let start = 100;
  let end = 1000;
  console.log(Math.floor(Math.random() * (end - start) + start));
}
// 3. Cho 1 số là `1.234567` dùng các kíen thức đã học để làm tròn thành `1.2345`.
{
  let num = 1.234567;
  console.log(Math.floor(num * 10000) / 10000);
  console.log(Number(num.toFixed(4)));
}
// 4. Viết 1 đoạn code ví dụ có Hoisting.
{
  console.log(Hoisting);
  var Hoisting = true;
}
// 5. Viết 1 đoạn code ví dụ có Temporal Dead Zone.
{
  console.log(TDZ);
  let TDZ = "Example for TDZ";
}
