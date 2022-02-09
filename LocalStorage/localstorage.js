let nome, idade

nome= prompt('digite o seu nome: ')
idade = Number(prompt('digite a sua idade: '))

localStorage.setItem('nomes',nome)
localStorage.setItem('idades',idade)

nome= localStorage.getItem('nomes')
idade= localStorage.getItem('idades')


alert(nome)
alert(idade)

