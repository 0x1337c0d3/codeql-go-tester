var r = /^(?:\/\/|[^\/]+)*\//
       
var s = 'https://github.com/0x1337C0D3/codeql-go-tester/'

console.log('Running regular expression... please wait')
console.time('benchmark')
console.log(r.test(s))
var res = s.replace(r, "")
console.log(res)
console.timeEnd('benchmark')
