const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric){
  let highScore = 0;
  let winnerName = '';
  for (let i = 0; i < vegetables.length; i++){
    if (vegetables[i][metric] > highScore){
      highScore = vegetables[i][metric]
      winnerName = vegetables[i]['submitter']
    }
  }
  return winnerName; 
  
}


judgeVegetable(vegetables, metric)