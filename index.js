export default function io (fn, input, ...args) {
  return fn.call(this, [input, input], ...args)
}
