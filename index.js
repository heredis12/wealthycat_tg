const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");
const TOKEN = "7247649430:AAGq1xQz2uebcReb4Rx4KpGDbQffPtrQJcA";
const server = express();
const bot = new TelegramBot(TOKEN, {
    polling: false
});
const port = process.env.PORT || 5000;
const gameName = "wealthycat";
const queries = {};

server.use(express.static(path.join(__dirname, '')));
bot.onText(/help/, (msg) => bot.sendMessage(msg.from.id, "Say /game if you want to play."));
bot.onText(/start|game/, (msg) => bot.sendGame(msg.from.id, gameName));

bot.on("callback_query", function (query) {
    if (query.game_short_name !== gameName) {
        bot.answerCallbackQuery(query.id, "Sorry, '" + query.game_short_name + "' is not available.");
    } else {
        queries[query.id] = query;
        let gameurl = "https://heredis12.github.io/wealthycat_tg/";
        bot.answerCallbackQuery({
            callback_query_id: query.id,
            url: gameurl
        });
    }
});

bot.on("inline_query", function (iq) {
    bot.answerInlineQuery(iq.id, [{
        type: "game",
        id: "1",
        game_short_name: gameName
    }]);
});

server.get("/highscore/:score", function (req, res, next) {
    if (!Object.hasOwnProperty.call(queries, req.query.id)) return next();
    let query = queries[req.query.id];
    let options;
    if (query.message) {
        options = {
            chat_id: query.message.chat.id,
            message_id: query.message.message_id
        };
    } else {
        options = {
            inline_message_id: query.inline_message_id
        };
    }
    bot.setGameScore(query.from.id, parseInt(req.params.score), options,
        function (err, result) {});
});
server.listen(port);



// const { Telegraf, Markup } = require('telegraf')

// const token = "7247649430:AAGq1xQz2uebcReb4Rx4KpGDbQffPtrQJcA";
// if (token === undefined) {
//   throw new Error('BOT_TOKEN must be provided!')
// }

// const gameShortName = 'wealthycat'
// const gameUrl = 'https://github.com/heredis12/wealthycat_tg'

// const markup = Markup.inlineKeyboard([
//   Markup.button.game('🎮 Play now!'),
//   Markup.button.url('Telegraf help', 'http://telegraf.js.org')
// ])

// const bot = new Telegraf(token)

// bot.start((ctx) => ctx.replyWithGame(gameShortName))
// bot.command('foo', (ctx) => ctx.replyWithGame(gameShortName, markup))
// bot.gameQuery((ctx) => ctx.answerGameQuery(gameUrl))
// bot.launch()


// // Enable graceful stop
// process.once('SIGINT', () => bot.stop('SIGINT'))
// process.once('SIGTERM', () => bot.stop('SIGTERM'))