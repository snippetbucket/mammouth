v = "sdf{{\ntry\n edsdf\ncatch error\n dsfd\nfinally\n see}}"
mammouth = require('./lib/mammouth')
//console.log(mammouth.parse(v)[1])
console.log(mammouth.compile(v))
/*lexer = require('./lib/lexer.js'),
lexer.setInput(v)
m= 0
while(m!=undefined) {
	m=lexer.lex()
	console.log(m)
}*/