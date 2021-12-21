let widget = await createWidget()
if (!config.runsInWidget) {
  await widget.presentSmall()
}
Script.setWidget(widget)
Script.complete

async function createWidget (items) {
  var confession = new Date('Jul 19, 2020')
  var now = new Date('Dec 19, 2021')

  // calculate months
  var months = (now.getFullYear() - confession.getFullYear()) * 12
  months -= confession.getMonth()
  months += now.getMonth()

  // calculate days
  var num = now.getDate()
  var distance = now - confession + 1000 * 60 * 60 * 24
  var days = Math.floor(distance / (1000 * 60 * 60 * 24))

  const gradient = new LinearGradient()
  gradient.locations = [0, 1]
  gradient.colors = [new Color('89CFF0'), new Color('B8E2F2')]
  const list = new ListWidget()
  list.backgroundGradient = gradient
  const title = list.addText('🐧 Yammy')
  title.font = Font.boldRoundedSystemFont(24)
  title.textColor = new Color('000080')
  list.addSpacer()

  // anniversary
  if (num == 19) {
    const anniversary = list.addText('HAPPY ANNIVERSARY')
    anniversary.font = Font.boldRoundedSystemFont(14)
    anniversary.textColor = new Color('000080')
    anniversary.centerAlignText()

    list.addSpacer()
    const label = list.addText(months + '')
    label.font = Font.boldRoundedSystemFont(24)
    label.textColor = new Color('000080')
    label.centerAlignText()
    return list
  } else {
    list.addSpacer()
    const label = list.addText(days + '')
    label.font = Font.boldRoundedSystemFont(24)
    label.textColor = new Color('000080')
    label.centerAlignText()
    return list
  }
}
