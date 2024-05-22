var arr = [

    {author: "--Mahatma Gandhi", 

     text: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”"},

    {author: "--Martin Luther King Jr.", 

    text: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”"},

    {author: "--Ralph Waldo Emerson", 

    text: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"},

    {author: "--H. Jackson Brown Jr.", 

     text: "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”"},
    
];

function Quotes(){

    var quote = arr[ Math.floor ( Math.random() * arr.length ) ];

    document.getElementById("quote").textContent = quote.text;
    
    document.getElementById("author").textContent = quote.author;

}