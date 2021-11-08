let widget = await createWidget()
if (!config.runsInWidget) {
  await widget.presentSmall()
}
Script.setWidget(widget)
Script.complete

async function createWidget(items) {
    var confession = new Date("Jul 19, 2020")
//     var now = new Date("Oct 19,2020")
    var now = new Date()
    var num = now.getDate()
    var distance = now - confession + (1000 * 60 * 60 * 24)
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const gradient = new LinearGradient()
    gradient.locations = [0, 1]
    gradient.colors = [
        new Color("89CFF0"),
        new Color("B8E2F2")
    ]
    const list = new ListWidget()
    list.backgroundGradient = gradient
    const title = list.addText("🐧 Yammy")
    title.font = Font.boldRoundedSystemFont(24)
    title.textColor = new Color("000080")
    list.addSpacer()
    if (num == 19) {
      const anniversary = list.addText("HAPPY ANNIVERSARY")
      anniversary.font = Font.boldRoundedSystemFont(14)
      anniversary.textColor = new Color("000080")
      anniversary.centerAlignText()
  }
    list.addSpacer()
    const label = list.addText(days+"")
    label.font = Font.boldRoundedSystemFont(24)
    label.textColor = new Color("000080")
    label.centerAlignText()
    return list
}