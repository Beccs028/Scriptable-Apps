let widget = await createWidget()
if (!config.runsInWidget) {
  await widget.presentSmall()
}
Script.setWidget(widget)
Script.complete

async function createWidget(items) {
    var confession = new Date("Jul 19, 2020")
    var now = new Date()
    var distance = now - confession + (1000 * 60 * 60 * 24)
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const gradient = new LinearGradient()
    gradient.locations = [0, 1]
    gradient.colors = [
        new Color("152238"),
        new Color("23395d")
    ]
    const list = new ListWidget()
    list.backgroundGradient = gradient
    const title = list.addText("Yammy")
    title.font = Font.boldSystemFont(24)
    list.addSpacer()
    const label = list.addText(days+"")
    label.font = Font.boldSystemFont(24)
    label.centerAlignText()
    return list
}