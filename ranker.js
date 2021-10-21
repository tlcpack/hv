let entities = []

function Entity(p, o, v) {
  this.p = p;
  this.o = o;
  this.v = v;
}

function ranker(str) {
  var section = str.split('|')
 
  for (let i = 0; i < section.length; i++ ) {
  	
    var total = section[i].split(",")
    
    entities.push(new Entity(total[0], total[1], total[2]))
  }
  
  entities.sort((a,b) =>  a.p.localeCompare(b.p) || b.v - a.v)
  
  return entities
}
