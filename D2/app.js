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
// 4. Type coercion
// - 1 + "1" + 5 + 7 -> "11"+5+7 -> "1157"
// - null + undefined -> NaN
// - null + '' + false + 1 ->'nullfalse1'
// - false + true -> 0 + 1 ->1
// - 'true' + false -> 'truefalse'
// - !!'0' + Boolean('1') -> 1+1->2
// - !'false' + 9 -> 0 + 9=9
// - 'js' + +'59' ->'js59'
// - 'evondev' + -'frontend' -> 'evondevNaN'
// - true == 'true' ->
