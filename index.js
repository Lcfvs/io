export default function io (fn, input, ...args) {
  if (new.target) {
    return new fn([input, input], ...args)
  }

  return fn.call(this, [input, input], ...args)
}
