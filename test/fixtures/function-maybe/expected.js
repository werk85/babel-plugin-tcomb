function foo(x: ?t.String) {
  t.assert(t.maybe(t.String).is(x));

  return x;
}