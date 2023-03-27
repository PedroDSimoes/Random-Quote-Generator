const quotes = [`“Yesterday I was walking to an interview. There was a starving dog on the road. I stopped to feed him & missed the interview. The next day I got a call asking to come in to do the interview. I was surprised, but I went. Then the interviewer came in. He was the dog.” - Every single LinkedIn Influencer`,
`“When I was a kid my parents moved a lot, but I always found them.” —Rodney Dangerfield`,
`“If you can’t beat them, arrange to have them beaten.” —George Carlin`,
`Doing nothing is very hard to do. You never know when you’re finished.” —Leslie Nielsen`,
`“If God did not intend for us to eat animals, then why did he make them out of meat?” —John Cleese`,
`“If at first you don’t succeed, try, try again. Then quit. There’s no use being a damn fool about it.” —W.C. Fields`,
`“The optimist proclaims that we live in the best of all possible worlds; and the pessimist fears this is true.” —James Branch Cabell`,
`“is meatball an fruit” —Post Malone`,
`“If you love something, let it go. So that's what I did with my body” —Homer Simpson`,
`“Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.” —Michael Scott`,
`“Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.” —Michael Scott`,
`“I’m not an executioner. I’m the best goddamn bird lawyer in the world.” —Charlie Kelly`,
`“I immersed myself in the culture. Tasting the cuisine. But mostly doing cocaine.”  —Frank Reynolds`,
`“Give a man a fire, and he's warm for a night. Set him on fire, and he's warm for the rest on his life.” —Terry Pratchett`,
`I know a man who gave up smoking, drinking, sex, and rich food. He was healthy right up to the day he killed himself.” —Johnny Carson`,
`“It’s so hard being goth. You have to have a bad time everywhere.” —Clint Catalyst`,
`“Being sober on a bus is, like, totally different than being drunk on a bus.” —Ozzy Osbourne`];

const btnEl = document.getElementById("generate-btn");
const quoteEl = document.getElementById("quote-container");
quoteEl.classList.add('slideIn');
const twitterBtn = document.getElementById("twitter-btn");
const facebookBtn = document.getElementById("facebook-btn");

btnEl.addEventListener('click', function () {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = quote;
    quoteEl.classList.remove('slideIn');
    void quoteEl.offsetWidth;
    quoteEl.classList.add('slideIn');
  });

twitterBtn.addEventListener('click', function () {
    const quote = document.getElementById("quote-container").textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}`;
  
    window.open(twitterUrl, '_blank');
  });