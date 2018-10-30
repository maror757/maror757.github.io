d3.queue()
  .defer(d3.csv,'./data/dialog.csv')
  .await(draw)

var bubbles, showsankey, topbar
var edited_data
var banned = ['DON', 'ISN', 'LL', 'RE', 'DIDN','DOESN']

function draw(error, data){
  if (error) throw error

  edited_data = calculate(data, banned)

  topbar = new topbar(edited_data)
  bubbles = new bubbles(edited_data)
  showsankey = new showsankey(edited_data)
  showsankey.draw()
  bubbles.draw()
}
