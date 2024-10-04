
function test() {
  console.log(foo);
  var foo = 10;
  function foo() {}
  console.log(foo);
}
test();
