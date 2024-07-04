const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const gameShortName = 'wealthycat'
const gameUrl = 'https://heredis12.github.io/wealthycat_tg/'

const bot = new Telegraf("7247649430:AAGq1xQz2uebcReb4Rx4KpGDbQffPtrQJcA")
bot.start((ctx) => ctx.replyWithGame(gameShortName))
bot.gameQuery((ctx) => ctx.answerGameQuery(gameUrl))

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
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