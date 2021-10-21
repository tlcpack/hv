let entities = []
let proposals = []

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

function addRank(obj) {
    let rank = 1;
  
    for (x of obj) {
  	
    	if (!proposals.includes(x.p)) {
    		rank = 1; 
    		proposals.push(x.p)
    	} 
    
    x.rank = rank;
      
    rank++;
  }
}

let ents = ranker({user input});

addRank(ents);

for (e of ents) {
	console.log(e.p + ", " + e.rank + ", " + e.o)
}
