---
layout: post
title: A Discord Bot, setTimeout and setInterval
excerpt: >-
    A countdown timer Discord bot written in Discord.js, Node.js, and some tricks about setTimeout() and setInterval() functions.
tags: [JavaScript, Node.js, Discord.js, Electron.js]
---

# {{ page.title }}

<div class="post_date">{{ page.date | date: "%d.%m.%Y" }}</div>
<div class="post_tags">{{ page.tags | sort | join: ", " }}</div>

***

My friend asked me if I can write a Pomodoro bot for Discord, thus he can study nearby an online Pomodoro timer which warns him periodically according to pomodoro algorithm. Pomodoro is a working technique which can be found [on the web](https://www.google.com/search?sxsrf=ALeKk01WQwuEZkGaewswu69rX9GgSTsx5Q%3A1590490363776&ei=-_TMXrS9Ls7ergSfjJLoCA&q=pomodoro+technique&oq=pomodoro+tech&gs_lcp=CgZwc3ktYWIQAxgAMgIIADICCAAyAggAMgIIADIFCAAQywEyAggAMgIIADIFCAAQywEyBQgAEMsBMgUIABDLAToECAAQRzoECCMQJzoECAAQQzoFCAAQgwE6BwgAEIMBEENQ2ihYuDRg9kBoAHABeACAAbsBiAHDBpIBAzAuNZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab).

### Discord and its Frameworks

I like Discord. It should not be thought as just a gamer communication tool, but one of the best digital communication tools on our time. Additionally, my symphaty to Discord also comes from its software: it is written in `Electron.js`, and its core `Node.js`. These JavaScript frameworks are some of the most preferred application and back-end frameworks in UI technologies. I am kind of familiar with them and I like them. 

`Discord.js` is a module that Discord developers use it, the whole procedure can be found on the web: [instance link](https://www.digitaltrends.com/gaming/how-to-make-a-discord-bot/).

A lot of example can be found, but here is also a hello-world-level Discord bot which responds "Hi, how are you?" when user types "hello".

```javascript
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    // bot.user.tag: like Pomodoro#9876
    console.log(`bot is online as ${bot.user.tag}`); 
})

bot.on('message', async message => {
    if (message.content === 'hello') {
        message.reply("Hi, how are you?");
    }
}
```

### Pomodoro Algorithm with Vanilla JavaScript

#### setTimeout() and setInterval()

I want to write about some tricks/warnings about using timing functions like `setTimeout()` and `setInterval()`. 

```javascript
function oneSet() {
    oneWorking();
    oneTimeout();
}

function oneWorking() {
    setTimeout(() => {
        message.channel.send('3 seconds');
    }, 3000);
}

function oneTimeout() {
    setTimeout(() => {
        message.channel.send('1 second');
    }, 1000);
}
```

If these functions are written like above, these behave like a `thread` in general programming. When `oneSet()` function called, the output would be like below:

```
1 second 
3 seconds
```

As we may understand here, our purpose was a 3 second delay and then a 1 second delay, so we wanted the output to be `...3 seconds ..1 second`. But like `thread`, program executes both of the functions same time, thus our goal is not fulfilled. 

To get such a goal, we have to use setTimeout function with `recursion`, and with a variable parameter which changes periodically.

```javascript
function setPart(interval) {
    intervalCount++;
    interval = 3000;
    if (intervalCount % 2 == 0) 
        interval = 1000;
    
    let timer = setTimeout(() => {
        message.channel.send(`${interval} seconds`);
        setPart();
    }, interval);
}
```

`setInterval()` is something like `setTimeout()`, the only difference is that `setInterval()` calls time forever as a loop. That means if first example would be set with interval, the output would be like that:

```
1 second 
1 second 
1 second
3 seconds
1 second
...
```

And if we set the second example with `setInterval()`, the output finally would be nice ( do not mind gramatically wrong '1 seconds' :) ):

```
3 seconds
1 seconds
3 seconds
1 seconds
...
```

I wrote everything too shortly but I hope I can provide an idea. All of these properties can be found on documentations and StackOverFlow with more explaination. 

So, here is a simple pomodoro example which sends you message periodically (when working and timeout sets start/end). I do not consider the bot program as worthy for a GitHub repository, if I will later, I put the codes there and I put a link here.

```javascript
const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = '-pom';
const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;

bot.on('ready', () => {
  console.log(`bot is online as ${bot.user.tag}`);
})

bot.on('message', message => {
  var args = message.content.substring(prefix.length).split(' ');
  var command = args[1];

  if (message.content.substring(0, prefix.length) == prefix) {
    if (command == 'start') {
      var intervalCount = 0, interval = 0;
      message.reply('One brain is started.');
      setPart(interval);

      function setPart(interval) {
        intervalCount++;
        interval = 25;
        if (intervalCount % 2 == 0) 
          interval = 5;
        if (intervalCount == 9)     
          interval = 20;
                
        let timer = setTimeout(() => {
          message.channel.send(`count ${intervalCount}, 
            ${interval} minutes ended.`);
          setPart();
        }, interval * minute);
        if (intervalCount >= 10) {
            message.reply('The brain is ended.');
            clearTimeout(timer);
            return;
        }
      }
    }
  }
}
```

The result is below after 140 minutes.

![pomodoro screenshot]({{ "/assets/images/pomodoro_ss.png" | prepend: site.baseurl }})

### Bonus: A Countdown Clock

For displaying how much minutes left, I also coded a primitive clock which counts only minutes. To do that, firstly we have to understand `async` and `await` in [Node.js documentation of Discord](https://discordjs.guide/additional-info/async-await.html). Because, we do not want to an ugly interface like "25 minutes, 24 minutes, 23 ..." and so on a banch of messages lined up, just one changing (being edited) message as a clock.

```javascript
bot.on('message', async message => {
    // ... other codes

  // countdown clock for displaying
  var remainingTime = 25, remainingCount = 1, status = 'working';
  var countdown = await message.channel.send(`
    started! ${remainingTime} minutes
  `);
  let clock = setInterval(() => {
    remainingTime--;
    if (remainingTime == 1)
        remainingCount++;
    countdown.edit(`
      ${remainingTime} minutes remain. :: ${status} ::
    `);
    if (remainingCount == 10) {
        clearInterval(clock);
    }
    if (remainingTime == 0 && remainingCount % 2 == 0) {
        status = 'timeout';
        remainingTime += 5;
    }
    // looks like dirty code but this works instead of
    // else { status = 'working' if ... } instead.
    else if (remainingTime == 0 && remainingCount == 9) {
        remainingTime += 20;
        status = 'working';
    }
    else if (remainingTime == 0) {
        remainingTime += 25;
        status = 'working';
    }
  }, 1 * minute);
}
```

This code initializes a dynamic message that changes according to the remaining time, and wheter it is working time or a timeout interval.

```
12 minutes remain. :: working :: (edited)
```