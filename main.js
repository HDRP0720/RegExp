const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
https://localhost:1234
동해물과_ 백두산이 마르고 닳도록
`

console.log(str.match(/(?<=@).{1,}/g));