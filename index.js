const { Telegraf, Markup } = require('telegraf')

const token = "7247649430:AAGq1xQz2uebcReb4Rx4KpGDbQffPtrQJcA";
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

const gameShortName = 'wealthycat'
const gameUrl = 'https://heredis12.github.io/wealthycat_tg/'

const markup = Markup.inlineKeyboard([
  Markup.button.game('🎮 Play now!'),
  Markup.button.url('Telegraf help', 'https://telegraf.js.org')
])

const bot = new Telegraf(token)

bot.start((ctx) => ctx.replyWithGame(gameShortName))
bot.command('foo', (ctx) => ctx.replyWithGame(gameShortName, markup))
bot.gameQuery((ctx) => ctx.answerGameQuery(gameUrl))
bot.launch()


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

//Sharing link
//Saving player info
//