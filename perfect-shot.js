//East and west is X axis
//North and South is Y axis

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


const finalPosition = function (moves) {
  let x = 0;
  let y = 0;

  for (const move of moves){

    if (move === "east"){
      x += 1
    }else if(move === "west"){
      x -= 1
    }else if(move === "north"){
      y += 1
    }else if(move === "south"){
      y -= 1
    }
  }

  return [x, y]
}

//console.log(moves);
console.log(finalPosition(moves));