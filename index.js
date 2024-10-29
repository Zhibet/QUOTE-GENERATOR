const parentContainer = document.querySelector('div');
const btn = document.getElementById('btn');

const quotes = [
    {
       'john cena': 'never give up'
    },
    {
        'janae': 'work harder'
    },
    {
        'michael owen': 'liverpool sucks',
    },
    {
        'mick tyson': 'shut up bitch',
    },
    {
        'amadou bah': 'citlali is the best' 
    }
]

let heading = document.createElement('h1');
document.body.appendChild(heading)

function generateQuote(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    return randomQuote
}

btn.addEventListener('click',()=>{
    let quoteObject = generateQuote();
    let author = Object.keys(quoteObject)
    let quote = quoteObject[author]
    heading.innerHTML = `${author} : "${quote}"`;
})