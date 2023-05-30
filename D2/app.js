// 1.
// const str = "I love to learn Javascript";
// // expected: "i-love-to-learn-javascript"
{
  const str = "I love to learn Javascript";
  console.log(str.split(" ").join("-"));
}
// 2. Cắt chuỗi còn 30 kí tự cùng với dấu 3 chấm ...
// const longStr =
//   "Write a JavaScript function to split a string and convert it into an array of words";
// // expected: Write a JavaScript function to ...
{
  const longStr =
    "Write a JavaScript function to split a string and convert it into an array of words";
  const output = longStr.slice(0, 31) + "...";
  console.log(output);
}
// 3. Chuyển đổi chuỗi để được kết quả như dưới
// const newStr = `javascript is awesome`;
// // expected: Javascript is awesome
{
  const newStr = `javascript is awesome`;

  console.log(newStr.replace("j", "J"));
}
