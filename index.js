#!/usr/bin/env node

const quotes = [
    [`I'm made of rocks, as you can see, but don't let that intimidate you.`, `You don't need to be afraid, unless you're made of scissors!`, `Just a little Rock, Paper, Scissors joke for you.`],
    [`I tried to start a revolution...`, `But I didn't print enough pamphlets, so hardly anyone turned up.`, `Except for my mum and her boyfriend.`, `(Who I hate.)`],
    [`Hey, hey, hey. Hey. Take it easy, man.`, `Over here. The pile of rocks waving at you.`,  `Here. Yeah, I'm actually a thing. I'm a being!`],
    `The revolution has begun!`,
    `Piss off, ghost!`,
    `See you later, New Doug!`,
    [`Oh yeah, no, this whole thing is a circle...`, `But not a real circle.`, `More like a freaky circle.`],
    [`Oh Miek, you're alive!`, `He's alive, guys!`],
    `Oh my god, the hammer pulled you off?`,
    [`Hey, man. We're just about to jump on that ginormous spaceship.`, `Wanna come?`],
    [`As long as the foundations are still strong, we can rebuild this place!`, `It will become a haven for all peoples and aliens of the universe.`, ``, `Oof. Now those foundations are gone.`, `Sorry.`]
]

function run() {
    console.log();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    if (Array.isArray(quote)) {
        quote.forEach((q, i) => {
            i === 0 ? console.log(q) : setTimeout(() => console.log(q), (1000 * i) + (Math.random() * (750 - 250)) + 250 );
        })
        setTimeout(() => process.exit(1), (1750 * (quote.length - 1)))
    } else {
        console.log(quote);
    }
}

run();