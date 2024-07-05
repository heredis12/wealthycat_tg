const { Telegraf,Markup } = require('telegraf')
const { message } = require('telegraf/filters')

const gameShortName = 'wealthycat'
const gameUrl = 'https://heredis12.github.io/wealthycat_tg/'

const bot = new Telegraf("7247649430:AAGq1xQz2uebcReb4Rx4KpGDbQffPtrQJcA")
bot.start((ctx) => ctx.replyWithGame(gameShortName))
bot.gameQuery((ctx) => ctx.answerGameQuery(gameUrl))


bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
//bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.start((ctx)=>{
//   ctx.reply('Check out this link: https://example.com\n\nPlease share it with your friends by forwarding this message!', 
//     Markup.inlineKeyboard([
//       Markup.button.callback('Share this link', 'share')
//     ])
//   );
// })

bot.action('share', (ctx) => {
  ctx.reply(
    'Forward this message to your friends!',
    Markup.inlineKeyboard([
      Markup.button.url('Open Telegram', 'https://t.me/share/url?url=https://example.com')
    ])
  );
});

// function ShareWithFriends(){
//   navigator.share({
//     title: 'Share Example',
//     text: 'https://example.com'
// });
//   open('https://t.me/share/url?url=https://example.com');
//    https://web.telegram.org/a/#?tgaddr=tg%3A%2F%2Fmsg_url%3Furl%3Dhttps%253A%252F%252Fexample.com
// }

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))



// const markup = Markup.inlineKeyboard([
//   Markup.button.game('🎮 Play now!'),
//   Markup.button.url('Telegraf help', 'https://telegraf.js.org')
// ])

// const bot = new Telegraf(token)

// bot.start((ctx) => ctx.replyWithGame(gameShortName))
// bot.command('foo', (ctx) => ctx.replyWithGame(gameShortName, markup))
// bot.gameQuery((ctx) => ctx.answerGameQuery(gameUrl))
// bot.launch()


// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))

//Sharing link
//Saving player info
//

//Telegram API commands as URL
//https://api.telegram.org/bot7247649430:AAGq1xQz2uebcReb4Rx4KpGDbQffPtrQJcA/sendMessage?chat_id=6108613484&text=Hello+World
//https://api.telegram.org/bot7247649430:AAGq1xQz2uebcReb4Rx4KpGDbQffPtrQJcA/sendGame?chat_id=6108613484&game_short_name=wealthycat
//https://api.telegram.org/bot7247649430:AAGq1xQz2uebcReb4Rx4KpGDbQffPtrQJcA/sendMessage?chat_id=6108613484&text=https://example.com&parse_mode=Markdown
//https://api.telegram.org/bot7247649430:AAGq1xQz2uebcReb4Rx4KpGDbQffPtrQJcA/sendMessage?chat_id=6108613484&text=Please%20share%20your%20contact%20information%3A&reply_markup=%7B%22keyboard%22%3A%5B%5B%7B%22text%22%3A%22Share%20Contact%22%2C%22request_contact%22%3Atrue%7D%5D%5D%2C%22one_time_keyboard%22%3Atrue%7D