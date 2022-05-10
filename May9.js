/* VIDEO 110 - 111 */

//1.

const  [players1, player2] = game.players;
console.log(player1, player2);

//2.
const [gk, ...fieldplayers] = players1;
console.log(gk, fieldPlayers);

//3.
 const allPlayers = [...players1, ...player2];
 console.log(allPlayers);

 //4.
 const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisctic'];

 //5.
 const {
     odds: {team1, x: draw, team2}
    } = game;
 console.log(team1, draw, team2);

 //6.
 const printGoals = function(...players) {
     console.log(players);
    console.log(`${players.length} goals were socred`);
 };

 printGoals('Davies', 'Muller', 'Lewandowski',
 'Kimmchi');
 printGoals('Davies', 'Muller',);
 printGoals(...game.scored);

 //7.
 team1 < team2 && console.log('team 1 is more likely to win');

 /* VIDEO 111 */

 const menu = [...resturant.starterMenu, ... resturant.mainMenu];

 for (const item of menu) console.log(item);

 for (const item of menu.entries()) {
     console.log(item);
 }

 console.log([...menu.entries()])[
     console.log(`${item[0] + 1}: ${item[1]}`)
    ]; 

/* bye! */

 