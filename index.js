console.log("Dony WhatsApp Bot ap demare...");

const commands = {
  ".ping": "🏓 Pong! Bot la ap mache.",
  ".menu": "🤖 Dony Bot\n\n.ping\n.menu\n.sticker\n.toimg\n.vv\n.tts\n.ai"
};

function handleCommand(message) {
  const text = message.trim().toLowerCase();

  if (commands[text]) {
    return commands[text];
  }

  return null;
}

console.log(handleCommand(".ping"));
