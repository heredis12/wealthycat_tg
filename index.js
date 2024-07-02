const { Telegraf, Markup } = require('telegraf')

const token = "7403988653:AAG-rRgaKUiXPzqy40OcBm8vHCQjjScPJSE";
if (token === undefined) {
  throw new Error('BOT_TOKEN must be provided!')
}

const gameShortName = 'wealthycat_tg'
const gameUrl = 'https://github.com/heredis12/wealthycat_tg'

const markup = Markup.inlineKeyboard([
  Markup.button.game('🎮 Play now!'),
  Markup.button.url('Telegraf help', 'http://telegraf.js.org')
])

bot.on(message('text'), async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)
  
    // Using context shortcut
    await ctx.reply(`Hello ${ctx.state.role}`)
  })

const bot = new Telegraf(token)
bot.start((ctx) => ctx.replyWithGame(gameShortName))
bot.command('foo', (ctx) => ctx.replyWithGame(gameShortName, markup))
bot.gameQuery((ctx) => ctx.answerGameQuery(gameUrl))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))