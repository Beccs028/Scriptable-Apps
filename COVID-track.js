const apiUrl = (location) => `https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?where=1%3D1&outFields=GEN,cases7_per_100k&geometry=${location.longitude.toFixed(3)}%2C${location.latitude.toFixed(3)}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelWithin&returnGeometry=false&outSR=4326&f=json`

let widget = await createWidget()
if (!config.runsInWidget) {
  await widget.presentSmall()
}
Script.setWidget(widget)
Script.complete()

async function createWidget(items) {
  Location.setAccuracyToKilometer()
  const location = await Location.current()
  const data = await new Request(apiUrl(location)).loadJSON()
  const attr = data.features[0].attributes
  const incidence = attr.cases7_per_100k.toFixed(1)
  const cityName = attr.GEN
  const gradient = new LinearGradient()
  gradient.locations = [0, 1]
  gradient.colors = [
    new Color("111111"),
    new Color("222222")
  ]
  const list = new ListWidget()
  list.backgroundGradient = gradient
  list.addText("🦠 Cases")
  list.addSpacer()
  const label = list.addText(incidence+"")
  label.font = Font.boldSystemFont(24)
  list.addText(cityName)
  return list
}
