

var quotes = [
    {
        quote : '“So many books, so little time.”',
        author : '--Frank Zappa'
    },
    {
        quote : '“Two things are infinite: the universe and human stupidity; and I am not sure about the universe.”',
        author : '--Albert Einstein'
    },
    {
        quote : '“A room without books is like a body without a soul.”',
        author : '--Frank Zappa'
    },
    {
        quote : '“You only live once, but if you do it right, once is enough.”',
        author : '--Mae West'
    },
    {
        quote : '“Be the change that you wish to see in the world.”',
        author : '--Mahatma Gandhi'
    },
    {
        quote : '“If you tell the truth, you do not have to remember anything.”',
        author : '-- Mark Twain'
    },
    {
        quote : '“A friend is someone who knows all about you and still loves you.”',
        author : '--Elbert Hubbard'
    },
    {
        quote : '“To live is the rarest thing in the world. Most people exist, that is all.”',
        author : '--Oscar Wilde'
    },
    {
        quote : '“Always forgive your enemies; nothing annoys them so much.”',
        author : '--Oscar Wilde'
    },
    {
        quote : '“Be yourself; everyone else is already taken.”',
        author : '--Oscar Wilde'
    },
    {
        quote : '“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        author : '--Mahatma Gandhi'
    },
    {
        quote : '“We accept the love we think we deserve.”',
        author : '--Stephen Chbosky'
    },
    {
        quote : '“Without music, life would be a mistake.”',
        author : '--Friedrich Nietzsche'
    },
    {
        quote : '“I am so clever that sometimes I do not understand a single word of what I am saying.”',
        author : '--Oscar Wilde'
    },
    {
        quote : '“It is better to be hated for what you are than to be loved for what you are not.”',
        author : '--Andre Gide'
    }
]


function changeQuote(){
    var randomNumber = Math.floor(Math.random() * 16); // Random number btw 0 and 15
    document.getElementById("quote").innerHTML = `${quotes[randomNumber].quote}`
    document.getElementById("author").innerHTML = `${quotes[randomNumber].author}`
}