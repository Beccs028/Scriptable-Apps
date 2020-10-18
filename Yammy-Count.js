let widget = await createWidget();
Script.setWidget(widget)
Script.complete

async function createWidget(items) {
    var confession = new Date("Jul 19, 2020")
    var now = new Date()
    var distance = now - confession + (1000 * 60 * 60 * 24)
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    gradient.locations = [0, 1]
    gradient.colors = [
    new Color("111111"),
    new Color("222222")
    ]
    const list = new ListWidget()
    list.backgroundGradient = gradient
    list.addText("Yammy Days")
    list.addSpacer()
    const label = list.addText(days+"")
    label.font = Font.boldSystemFont(24)
    return list
}