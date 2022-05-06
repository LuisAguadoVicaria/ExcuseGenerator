function rand(c){return Math.floor(Math.random() * (c-1));}

function load() {
      let who = ['The dog','My grandma','His turtle','My bird', 'My Brother', 'My Teacher'];
			let action = ['ate','peed','crushed','broke', 'steal', 'grab'];
			let what = ['my homework', 'the keys', 'the car', 'my clock', 'the radio', 'the code'];
			let when = ['before the class','right on time','when I finished','during my lunch','while I was praying', 'in the church', 'were I left the phone', 'in the beach'];
        document.getElementById("pp").innerHTML = who[rand(who.length)]+' '+action[rand(action.length)]+' '+what[rand(what.length)]+' '+when[rand(when.length)];
      }
window.onload = load;