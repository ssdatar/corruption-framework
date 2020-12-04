module.exports = function(s, opts) {
  if(s.length > 2) return opts.fn(this);
  else return opts.inverse(this);
}
