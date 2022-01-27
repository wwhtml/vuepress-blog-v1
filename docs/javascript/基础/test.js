const node = {
    loc: {
      start: {
        line: 1,
        column: 5
      }
    }
  };
  
  let { loc, loc: { start }, loc: { start: { line }} } = node;
  line // 1
  loc  // Object {start: Object}
  start // Object {line: 1, column: 5}