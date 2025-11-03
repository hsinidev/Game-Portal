
interface Game {
  GAME_NAME: string;
  SLUG: string;
  IFRAME_URL: string;
  ICON_URL: string;
  EXCERPT: string;
  SEO_ARTICLE_FULL: string;
  RELATED_GAMES: string[];
  HOW_TO_PLAY: string;
}

const RAW_URL_INPUT: string[] = ["https://playszgames.com/wp-content/uploads/unblocked/11-11.html","https://playszgames.com/wp-content/uploads/unblocked/12-minibattles.html","https://playszgames.com/wp-content/uploads/unblocked/2048.html","https://playszgames.com/wp-content/uploads/unblocked/3d-car-simulator.html","https://playszgames.com/wp-content/uploads/unblocked/3d-moto-simulator-2.html","https://playszgames.com/wp-content/uploads/unblocked/4th-and-goal-2022.html","https://playszgames.com/wp-content/uploads/unblocked/4x4-drive-offroad.html","https://playszgames.com/wp-content/uploads/unblocked/8-ball-pool.html","https://playszgames.com/wp-content/uploads/unblocked/a-dance-of-fire-and-ice.html","https://playszgames.com/wp-content/uploads/unblocked/adventure-drivers.html","https://playszgames.com/wp-content/uploads/unblocked/air-hockey-championship-deluxe.html","https://playszgames.com/wp-content/uploads/unblocked/among-us.html","https://playszgames.com/wp-content/uploads/unblocked/aqua-thrills.html","https://playszgames.com/wp-content/uploads/unblocked/arithmetica.html","https://playszgames.com/wp-content/uploads/unblocked/athletics-hero.html","https://playszgames.com/wp-content/uploads/unblocked/basket-and-ball.html","https://playszgames.com/wp-content/uploads/unblocked/basket-bros.html","https://playszgames.com/wp-content/uploads/unblocked/basket-champs.html","https://playszgames.com/wp-content/uploads/unblocked/basket-swooshes.html","https://playszgames.com/wp-content/uploads/unblocked/basketball-legends.html","https://playszgames.com/wp-content/uploads/unblocked/basketball-line.html","https://playszgames.com/wp-content/uploads/unblocked/basketball-stars.html","https://playszgames.com/wp-content/uploads/unblocked/battle-wheels.html","https://playszgames.com/wp-content/uploads/unblocked/bearsus.html","https://playszgames.com/wp-content/uploads/unblocked/bike-trials-offroad-1.html","https://playszgames.com/wp-content/uploads/unblocked/bike-trials-winter-1.html","https://playszgames.com/wp-content/uploads/unblocked/block-the-pig.html","https://playszgames.com/wp-content/uploads/unblocked/blocky-cars.html","https://playszgames.com/wp-content/uploads/unblocked/blocky-trials.html","https://playszgames.com/wp-content/uploads/unblocked/blumgi-ball.html","https://playszgames.com/wp-content/uploads/unblocked/blumgi-castle.html","https://playszgames.com/wp-content/uploads/unblocked/blumgi-rocket.html","https://playszgames.com/wp-content/uploads/unblocked/blumgi-slime.html","https://playszgames.com/wp-content/uploads/unblocked/bowling-stars.html","https://playszgames.com/wp-content/uploads/unblocked/boxing-physics-2.html","https://playszgames.com/wp-content/uploads/unblocked/brain-for-monster-truck.html","https://playszgames.com/wp-content/uploads/unblocked/brain-test-3-tricky-quests.html","https://playszgames.com/wp-content/uploads/unblocked/brain-test-tricky-puzzles.html","https://playszgames.com/wp-content/uploads/unblocked/bubble-trouble.html","https://playszgames.com/wp-content/uploads/unblocked/bubble-trouble-3.html","https://playszgames.com/wp-content/uploads/unblocked/bumper-cars-soccer.html","https://playszgames.com/wp-content/uploads/unblocked/burnin-rubber-5-xs.html","https://playszgames.com/wp-content/uploads/unblocked/burnin-rubber-crash-n-burn.html","https://playszgames.com/wp-content/uploads/unblocked/burnout-drift-seaport-max.html","https://playszgames.com/wp-content/uploads/unblocked/cannon-strike.html","https://playszgames.com/wp-content/uploads/unblocked/cars-thief.html","https://playszgames.com/wp-content/uploads/unblocked/stick-merge.html","https://playszgames.com/wp-content/uploads/unblocked/stock-car-hero.html","https://playszgames.com/wp-content/uploads/unblocked/street-ball-jam.html","https://playszgames.com/wp-content/uploads/unblocked/striker-dummies.html","https://playszgames.com/wp-content/uploads/unblocked/stunt-car-challenge-3.html","https://playszgames.com/wp-content/uploads/unblocked/super-liquid-soccer.html","https://playszgames.com/wp-content/uploads/unblocked/super-racing-gt-drag-pro.html","https://playszgames.com/wp-content/uploads/unblocked/super-star-car.html","https://playszgames.com/wp-content/uploads/unblocked/super-tunnel-rush.html","https://playszgames.com/wp-content/uploads/unblocked/superbattle-2.html","https://playszgames.com/wp-content/uploads/unblocked/superbike-hero.html","https://playszgames.com/wp-content/uploads/unblocked/swingo.html","https://playszgames.com/wp-content/uploads/unblocked/tag.html","https://playszgames.com/wp-content/uploads/unblocked/tennis-masters.html","https://playszgames.com/wp-content/uploads/unblocked/the-spear-stickman.html","https://playszgames.com/wp-content/uploads/unblocked/thumb-fighter-christmas.html","https://playszgames.com/wp-content/uploads/unblocked/tinytownracing.html","https://playszgames.com/wp-content/uploads/unblocked/top-speed-3d.html","https://playszgames.com/wp-content/uploads/unblocked/traffic-mania.html","https://playszgames.com/wp-content/uploads/unblocked/truck-traffic.html","https://playszgames.com/wp-content/uploads/unblocked/tube-jumpers.html","https://playszgames.com/wp-content/uploads/unblocked/unicycle-hero.html","https://playszgames.com/wp-content/uploads/unblocked/water-color-sort.html","https://playszgames.com/wp-content/uploads/unblocked/where-is-my-cat.html","https://playszgames.com/wp-content/uploads/unblocked/who-is.html","https://playszgames.com/wp-content/uploads/unblocked/wizard-mike.html","https://playszgames.com/wp-content/uploads/unblocked/wood-blocks-3d.html","https://playszgames.com/wp-content/uploads/unblocked/word-city-crossed.html","https://playszgames.com/wp-content/uploads/unblocked/word-city-uncrossed.html","https://playszgames.com/wp-content/uploads/unblocked/wrassling.html","https://playszgames.com/wp-content/uploads/unblocked/zombie-derby-pixel-survival.html","https://playszgames.com/wp-content/uploads/unblocked/cats.html","https://playszgames.com/wp-content/uploads/unblocked/chicken-merge.html","https://playszgames.com/wp-content/uploads/unblocked/city-car-driving-stunt-master.html","https://playszgames.com/wp-content/uploads/unblocked/city-rider.html","https://playszgames.com/wp-content/uploads/unblocked/crazy-cars.html","https://playszgames.com/wp-content/uploads/unblocked/cricket-world-cup.html","https://playszgames.com/wp-content/uploads/unblocked/cyber-cars-punk-racing.html","https://playszgames.com/wp-content/uploads/unblocked/death-chase.html","https://playszgames.com/wp-content/uploads/unblocked/demolition-derby-crash-racing.html","https://playszgames.com/wp-content/uploads/unblocked/detective-loupe-puzzle.html","https://playszgames.com/wp-content/uploads/unblocked/dunkers.html","https://playszgames.com/wp-content/uploads/unblocked/energy.html","https://playszgames.com/wp-content/uploads/unblocked/eugenes-life.html","https://playszgames.com/wp-content/uploads/unblocked/extreme-car-parking.html","https://playszgames.com/wp-content/uploads/unblocked/fancy-pants.html","https://playszgames.com/wp-content/uploads/unblocked/fancy-pants-2.html","https://playszgames.com/wp-content/uploads/unblocked/fancy-pants-3.html","https://playszgames.com/wp-content/uploads/unblocked/flying-car-simulator.html","https://playszgames.com/wp-content/uploads/unblocked/foot-chinko.html","https://playszgames.com/wp-content/uploads/unblocked/free-kick-shooter.html","https://playszgames.com/wp-content/uploads/unblocked/free-the-key.html","https://playszgames.com/wp-content/uploads/unblocked/g-switch-3.html","https://playszgames.com/wp-content/uploads/unblocked/getaway-shootout.html","https://playszgames.com/wp-content/uploads/unblocked/gold-digger-frvr.html","https://playszgames.com/wp-content/uploads/unblocked/golfinity.html","https://playszgames.com/wp-content/uploads/unblocked/grand-prix-hero.html","https://playszgames.com/wp-content/uploads/unblocked/gravity-soccer.html","https://playszgames.com/wp-content/uploads/unblocked/head-soccer-2023.html","https://playszgames.com/wp-content/uploads/unblocked/heads-arena-soccer-all-stars.html","https://playszgames.com/wp-content/uploads/unblocked/heart-star-html5.html","https://playszgames.com/wp-content/uploads/unblocked/horse-shoeing.html","https://playszgames.com/wp-content/uploads/unblocked/icy-purple-head-3.html","https://playszgames.com/wp-content/uploads/unblocked/idle-ants.html","https://playszgames.com/wp-content/uploads/unblocked/idle-digging-tycoon.html","https://playszgames.com/wp-content/uploads/unblocked/idle-mining-empire.html","https://playszgames.com/wp-content/uploads/unblocked/idle-startup-tycoon.html","https://playszgames.com/wp-content/uploads/unblocked/infinity-loop.html","https://playszgames.com/wp-content/uploads/unblocked/jollyworld.html","https://playszgames.com/wp-content/uploads/unblocked/kawaii-dressup.html","https://playszgames.com/wp-content/uploads/unblocked/life-the-game.html","https://playszgames.com/wp-content/uploads/unblocked/ludo-multiplayer.html","https://playszgames.com/wp-content/uploads/unblocked/mad-truck-challenge-special.html","https://playszgames.com/wp-content/uploads/unblocked/marble-dash.html","https://playszgames.com/wp-content/uploads/unblocked/maze-path-of-light.html","https://playszgames.com/wp-content/uploads/unblocked/merge-cyber-racers.html","https://playszgames.com/wp-content/uploads/unblocked/minibattles.html","https://playszgames.com/wp-content/uploads/unblocked/monster-tracks.html","https://playszgames.com/wp-content/uploads/unblocked/monsters-wheels-special.html","https://playszgames.com/wp-content/uploads/unblocked/mosaic-puzzle-art.html","https://playszgames.com/wp-content/uploads/unblocked/moto-trial-racing-2.html","https://playszgames.com/wp-content/uploads/unblocked/moto-maniac.html","https://playszgames.com/wp-content/uploads/unblocked/my-pony-my-little-race.html","https://playszgames.com/wp-content/uploads/unblocked/neon-war.html","https://playszgames.com/wp-content/uploads/unblocked/noob-drive.html","https://playszgames.com/wp-content/uploads/unblocked/offroader-v5.html","https://playszgames.com/wp-content/uploads/unblocked/ping-pong-html5.html","https://playszgames.com/wp-content/uploads/unblocked/pixwars-2.html","https://playszgames.com/wp-content/uploads/unblocked/plactions.html","https://playszgames.com/wp-content/uploads/unblocked/pool-club.html","https://playszgames.com/wp-content/uploads/unblocked/poor-bunny.html","https://playszgames.com/wp-content/uploads/unblocked/pop-it-master.html","https://playszgames.com/wp-content/uploads/unblocked/power-badminton.html","https://playszgames.com/wp-content/uploads/unblocked/raft-wars-2.html","https://playszgames.com/wp-content/uploads/unblocked/raft-wars-multiplayer.html","https://playszgames.com/wp-content/uploads/unblocked/rally-champion.html","https://playszgames.com/wp-content/uploads/unblocked/real-cars-in-city.html","https://playszgames.com/wp-content/uploads/unblocked/real-simulator-monster-truck.html","https://playszgames.com/wp-content/uploads/unblocked/recoil.html","https://playszgames.com/wp-content/uploads/unblocked/riddle-school.html","https://playszgames.com/wp-content/uploads/unblocked/roly-poly-monsters.html","https://playszgames.com/wp-content/uploads/unblocked/rooftop-snipers-2.html","https://playszgames.com/wp-content/uploads/unblocked/rowdy-wrestling.html","https://playszgames.com/wp-content/uploads/unblocked/running-fred.html","https://playszgames.com/wp-content/uploads/unblocked/rusher-crusher.html","https://playszgames.com/wp-content/uploads/unblocked/school-bus-demolition-derby.html","https://playszgames.com/wp-content/uploads/unblocked/short-life.html","https://playszgames.com/wp-content/uploads/unblocked/slime-road.html","https://playszgames.com/wp-content/uploads/unblocked/slope-2.html","https://playszgames.com/wp-content/uploads/unblocked/soccar.html","https://playszgames.com/wp-content/uploads/unblocked/soccer-skills-champions-league.html","https://playszgames.com/wp-content/uploads/unblocked/soccer-skills-euro-cup.html","https://playszgames.com/wp-content/uploads/unblocked/squish-run.html","https://playszgames.com/wp-content/uploads/unblocked/stacktris.html","https://playszgames.com/wp-content/uploads/unblocked/stair-race-3d.html","https://playszgames.com/wp-content/uploads/unblocked/stick-defenders.html","https://playszgames.com/wp-content/uploads/unblocked/stick-fighter.html","https://playszgames.com/wp-content/uploads/unblocked/stickman-army-team-battle.html","https://playszgames.com/wp-content/uploads/unblocked/stickman-army-the-resistance.html","https://playszgames.com/wp-content/uploads/unblocked/stickman-bike.html","https://playszgames.com/wp-content/uploads/unblocked/stickman-bike-pr.html","https://playszgames.com/wp-content/uploads/unblocked/stickman-boxing-ko-champion.html","https://playszgames.com/wp-content/uploads/unblocked/stickman-bridge-constructor.html","https://playszgames.com/wp-content/uploads/unblocked/stickman-climb-2.html","https://playszgames.com/wp-content/uploads/unblocked/breaking-the-bank.html","https://playszgames.com/wp-content/uploads/unblocked/bullet-force.html","https://playszgames.com/wp-content/uploads/unblocked/car-climb-racing.html","https://playszgames.com/wp-content/uploads/unblocked/cubes-king.html","https://playszgames.com/wp-content/uploads/unblocked/death-run-3d.html","https://playszgames.com/wp-content/uploads/unblocked/dinosaur-game.html","https://playszgames.com/wp-content/uploads/unblocked/doodle-champion-island.html","https://playszgames.com/wp-content/uploads/unblocked/draw-the-hill.html","https://playszgames.com/wp-content/uploads/unblocked/dreadhead-parkour.html","https://playszgames.com/wp-content/uploads/unblocked/electron-dash.html","https://playszgames.com/wp-content/uploads/unblocked/escaping-the-prison.html","https://playszgames.com/wp-content/uploads/unblocked/extreme-car-driving-simulator.html","https://playszgames.com/wp-content/uploads/unblocked/fleeing-the-complex.html","https://playszgames.com/wp-content/uploads/unblocked/furious-racing-3d.html","https://playszgames.com/wp-content/uploads/unblocked/gun-mayhem.html","https://playszgames.com/wp-content/uploads/unblocked/gun-mayhem-3.html","https://playszgames.com/wp-content/uploads/unblocked/highway-traffic.html","https://playszgames.com/wp-content/uploads/unblocked/impossible-tic-tac-toe.html","https://playszgames.com/wp-content/uploads/unblocked/jetpack-joyride.html","https://playszgames.com/wp-content/uploads/unblocked/leader-strike.html","https://playszgames.com/wp-content/uploads/unblocked/master-chess.html","https://playszgames.com/wp-content/uploads/unblocked/maze-planet-3d.html","https://playszgames.com/wp-content/uploads/unblocked/merge-round-racers.html","https://playszgames.com/wp-content/uploads/unblocked/minesweeper.html","https://playszgames.com/wp-content/uploads/unblocked/moto-road-rash-3d.html","https://playszgames.com/wp-content/uploads/unblocked/slope-2-multiplayer.html","https://playszgames.com/wp-content/uploads/unblocked/slope-city.html","https://playszgames.com/wp-content/uploads/unblocked/solitaire.html","https://playszgames.com/wp-content/uploads/unblocked/subway-runner.html","https://playszgames.com/wp-content/uploads/unblocked/tetris-flash.html","https://playszgames.com/wp-content/uploads/unblocked/drive-mad.html","https://playszgames.com/wp-content/uploads/unblocked/cat-trap.html","https://playszgames.com/wp-content/uploads/unblocked/color-switch.html","https://playszgames.com/wp-content/uploads/unblocked/deepest-sword.html","https://playszgames.com/wp-content/uploads/unblocked/earn-to-die.html","https://playszgames.com/wp-content/uploads/unblocked/flappy-bird-origin.html","https://playszgames.com/wp-content/uploads/unblocked/masked-forces.html","https://playszgames.com/wp-content/uploads/unblocked/n-gon.html","https://playszgames.com/wp-content/uploads/unblocked/orbital-survival.html","https://playszgames.com/wp-content/uploads/unblocked/scrap-metal.html","https://playszgames.com/wp-content/uploads/unblocked/sketchbook-04.html","https://playszgames.com/wp-content/uploads/unblocked/soccer-random.html","https://playszgames.com/wp-content/uploads/unblocked/stickman-golf.html","https://playszgames.com/wp-content/uploads/unblocked/subway-surfers-newyork.html","https://playszgames.com/wp-content/uploads/unblocked/subway-surfers-san-francisco.html","https://playszgames.com/wp-content/uploads/unblocked/tanuki-sunset.html","https://playszgames.com/wp-content/uploads/unblocked/tank-trouble-2.html","https://playszgames.com/wp-content/uploads/unblocked/temple-run-2.html","https://playszgames.com/wp-content/uploads/unblocked/tomb-of-the-mask.html","https://playszgames.com/wp-content/uploads/unblocked/tomb-of-the-mask-color.html","https://playszgames.com/wp-content/uploads/unblocked/vex-4.html","https://playszgames.com/wp-content/uploads/unblocked/vex-5.html","https://playszgames.com/wp-content/uploads/unblocked/paper-fighter-3d.html","https://playszgames.com/wp-content/uploads/unblocked/pixel-gun-survival.html","https://playszgames.com/wp-content/uploads/unblocked/rocket-pult.html","https://playszgames.com/wp-content/uploads/unblocked/rolly-vortex.html","https://playszgames.com/wp-content/uploads/unblocked/shoot-stickman.html","https://playszgames.com/wp-content/uploads/unblocked/shortcut-race.html","https://playszgames.com/wp-content/uploads/unblocked/skiing-fred.html","https://playszgames.com/wp-content/uploads/unblocked/speed-boat-extreme-racing.html","https://playszgames.com/wp-content/uploads/unblocked/two-ball-3d-dark.html","https://playszgames.com/wp-content/uploads/unblocked/two-neon-boxes.html","https://playszgames.com/wp-content/uploads/unblocked/ultimate-car-driving.html","https://playszgames.com/wp-content/uploads/unblocked/vex-6.html","https://playszgames.com/wp-content/uploads/unblocked/vex-7.html","https://playszgames.com/wp-content/uploads/unblocked/volleyball-challenge.html","https://playszgames.com/wp-content/uploads/unblocked/wordle-unlimited.html"];

const slugToGameName = (slug: string): string => {
  const specialWords = ['pr', 'xs', 'ko', 'gt'];
  return slug
    .split('-')
    .map(word => {
      if (/^\d+d$/.test(word)) return word.toUpperCase();
      if (specialWords.includes(word.toLowerCase())) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

const gameContent: Record<string, { EXCERPT: string; HOW_TO_PLAY: string }> = {
  '11-11': {
    EXCERPT: `<p>A challenging puzzle game where you strategically place blocks on an 11x11 grid. Clear lines to score points and prevent the board from filling up in this engaging brain-teaser.</p>`,
    HOW_TO_PLAY: `<article class="space-y-4">
      <h3 class="text-xl font-semibold text-cyan-300">Objective</h3>
      <p>Score as many points as possible by placing blocks to complete full rows or columns.</p>
      <h3 class="text-xl font-semibold text-cyan-300">Controls</h3>
      <ul class="list-disc pl-5">
        <li><strong>Mouse:</strong> Drag and drop the given blocks onto the grid.</li>
      </ul>
      <h3 class="text-xl font-semibold text-cyan-300">Gameplay</h3>
      <p>Place the three shapes shown at the bottom of the screen onto the board. When you form a complete horizontal or vertical line, it is removed, and you score points. The game ends when no more moves can be made.</p>
    </article>`,
  },
  '12-minibattles': {
    EXCERPT: `<p>Challenge a friend to a frantic series of duels in 12 Minibattles! This two-player game tests your reflexes across a variety of quirky and competitive challenges.</p>`,
    HOW_TO_PLAY: `<article class="space-y-4">
      <h3 class="text-xl font-semibold text-cyan-300">Objective</h3>
      <p>Win more minigames than your opponent in a random selection of head-to-head battles.</p>
      <h3 class="text-xl font-semibold text-cyan-300">Controls</h3>
      <ul class="list-disc pl-5">
        <li><strong>Player 1:</strong> 'A' key</li>
        <li><strong>Player 2:</strong> 'L' key</li>
      </ul>
      <h3 class="text-xl font-semibold text-cyan-300">Gameplay</h3>
      <p>A random minigame is chosen. Use your single button to perform the action required, whether it's jumping, shooting, or something else entirely. React faster than your opponent to win the round.</p>
    </article>`,
  },
  '2048': {
    EXCERPT: `<p>The classic sliding puzzle game that took the world by storm. Combine numbered tiles to reach the coveted 2048 tile, but plan your moves carefully or you'll run out of space!</p>`,
    HOW_TO_PLAY: `<article class="space-y-4">
      <h3 class="text-xl font-semibold text-cyan-300">Objective</h3>
      <p>Combine tiles with the same number to create a tile with the value of 2048.</p>
      <h3 class="text-xl font-semibold text-cyan-300">Controls</h3>
      <ul class="list-disc pl-5">
        <li><strong>Arrow Keys:</strong> Use the up, down, left, and right arrow keys to move all tiles on the grid in that direction.</li>
      </ul>
      <h3 class="text-xl font-semibold text-cyan-300">Gameplay</h3>
      <p>When two tiles with the same number touch, they merge into one tile with the total value. After every move, a new tile (either a 2 or a 4) appears in a random empty spot. The game is over when the board is full and no more moves can be made.</p>
    </article>`,
  },
  '3d-car-simulator': {
    EXCERPT: `<p>Get behind the wheel of powerful sports cars in this realistic driving simulator. Explore a vast city, perform stunts, and push your vehicle to its limits with no rules to hold you back.</p>`,
    HOW_TO_PLAY: `<article class="space-y-4">
      <h3 class="text-xl font-semibold text-cyan-300">Objective</h3>
      <p>Freely drive and explore the city, practice your driving skills, and perform stunts.</p>
      <h3 class="text-xl font-semibold text-cyan-300">Controls</h3>
      <ul class="list-disc pl-5">
        <li><strong>W/Up Arrow:</strong> Accelerate</li>
        <li><strong>S/Down Arrow:</strong> Brake/Reverse</li>
        <li><strong>A/Left Arrow:</strong> Steer Left</li>
        <li><strong>D/Right Arrow:</strong> Steer Right</li>
        <li><strong>Spacebar:</strong> Handbrake</li>
        <li><strong>C:</strong> Change Camera View</li>
      </ul>
    </article>`,
  },
   '3d-moto-simulator-2': {
    EXCERPT: `<p>Experience the thrill of high-speed motorcycle riding in a stunning 3D open world. Choose from different bikes and explore cities, highways, and off-road tracks at your own pace.</p>`,
    HOW_TO_PLAY: `<article class="space-y-4">
      <h3 class="text-xl font-semibold text-cyan-300">Objective</h3>
      <p>Drive your motorcycle freely through a diverse map, perform stunts, and enjoy the ride.</p>
      <h3 class="text-xl font-semibold text-cyan-300">Controls</h3>
      <ul class="list-disc pl-5">
        <li><strong>W/Up Arrow:</strong> Accelerate</li>
        <li><strong>S/Down Arrow:</strong> Brake</li>
        <li><strong>A/Left Arrow:</strong> Steer Left</li>
        <li><strong>D/Right Arrow:</strong> Steer Right</li>
        <li><strong>Spacebar:</strong> Handbrake</li>
        <li><strong>C:</strong> Change Camera View</li>
      </ul>
    </article>`,
  },
  '4th-and-goal-2022': {
    EXCERPT: `<p>Lead your team to victory in this action-packed American football game. Call plays, make crushing tackles, and score game-winning touchdowns to become the champion.</p>`,
    HOW_TO_PLAY: `<article class="space-y-4">
      <h3 class="text-xl font-semibold text-cyan-300">Objective</h3>
      <p>Outscore your opponent by scoring touchdowns and field goals. Manage the clock and call strategic plays on both offense and defense.</p>
      <h3 class="text-xl font-semibold text-cyan-300">Controls</h3>
      <ul class="list-disc pl-5">
        <li><strong>Arrow Keys:</strong> Move your player.</li>
        <li><strong>Spacebar:</strong> Snap the ball, make tackles, or perform action moves.</li>
        <li><strong>A, S, D:</strong> Pass to different receivers on offense.</li>
      </ul>
    </article>`,
  },
  '4x4-drive-offroad': {
    EXCERPT: `<p>Take your powerful 4x4 truck through challenging off-road terrain. Navigate mud, rocks, and steep hills in this realistic driving simulation that tests your control and precision.</p>`,
    HOW_TO_PLAY: `<article class="space-y-4">
      <h3 class="text-xl font-semibold text-cyan-300">Objective</h3>
      <p>Drive your 4x4 vehicle through difficult off-road environments without getting stuck or flipping over.</p>
      <h3 class="text-xl font-semibold text-cyan-300">Controls</h3>
      <ul class="list-disc pl-5">
        <li><strong>W/Up Arrow:</strong> Accelerate</li>
        <li><strong>S/Down Arrow:</strong> Brake/Reverse</li>
        <li><strong>A/Left Arrow:</strong> Steer Left</li>
        <li><strong>D/Right Arrow:</strong> Steer Right</li>
        <li><strong>Spacebar:</strong> Handbrake</li>
      </ul>
    </article>`,
  },
  '8-ball-pool': {
    EXCERPT: `<p>The classic game of 8-Ball Pool, now in your browser. Sharpen your skills, aim carefully, and sink your designated balls before pocketing the 8-ball to win.</p>`,
    HOW_TO_PLAY: `<article class="space-y-4">
      <h3 class="text-xl font-semibold text-cyan-300">Objective</h3>
      <p>Be the first player to legally pocket all of your assigned balls (solids or stripes) and then sink the 8-ball.</p>
      <h3 class="text-xl font-semibold text-cyan-300">Controls</h3>
      <ul class="list-disc pl-5">
        <li><strong>Mouse:</strong> Aim your cue stick.</li>
        <li><strong>Click and Drag:</strong> Pull back the cue to set the power of your shot.</li>
        <li><strong>Release:</strong> Release the mouse button to shoot.</li>
      </ul>
    </article>`,
  },
    'a-dance-of-fire-and-ice': {
    EXCERPT: `<p>A unique one-button rhythm game that tests your timing and focus. Guide two orbiting planets along a winding path without breaking their perfect equilibrium. Every beat matters!</p>`,
    HOW_TO_PLAY: `<article class="space-y-4">
      <h3 class="text-xl font-semibold text-cyan-300">Objective</h3>
      <p>Navigate a path by tapping to the beat of the music. Each tap moves one planet to the next tile, causing the other to orbit around it.</p>
      <h3 class="text-xl font-semibold text-cyan-300">Controls</h3>
      <ul class="list-disc pl-5">
        <li><strong>Any Key (e.g., Spacebar):</strong> Tap in time with the music beat to advance along the path.</li>
      </ul>
      <h3 class="text-xl font-semibold text-cyan-300">Gameplay</h3>
      <p>Listen carefully to the rhythm. Your goal is to press the key on every beat to move the planets forward. A single mis-timed press can end your run.</p>
    </article>`,
  },
  // Add other games here...
  default: {
    EXCERPT: "<!-- Placeholder: Insert 3-line SEO excerpt here -->",
    HOW_TO_PLAY: "<!-- Placeholder: How to play instructions go here. -->",
  }
};

const uniqueUrls = [...new Set(RAW_URL_INPUT)];

const generatedGames: Game[] = uniqueUrls.map(url => {
  const slug = url.split('/').pop()?.replace('.html', '') || '';
  const content = gameContent[slug] || gameContent.default;
  return {
    GAME_NAME: slugToGameName(slug),
    SLUG: slug,
    IFRAME_URL: url,
    ICON_URL: `https://abinbins.github.io/thumb/${slug}.png`,
    EXCERPT: content.EXCERPT,
    SEO_ARTICLE_FULL: "<!-- Placeholder: Insert full 1000-word HTML article here -->",
    RELATED_GAMES: [],
    HOW_TO_PLAY: content.HOW_TO_PLAY,
  };
});

// Preserve the rich content for Arithmetica
const arithmeticaIndex = generatedGames.findIndex(game => game.SLUG === 'arithmetica');
if (arithmeticaIndex !== -1) {
  generatedGames[arithmeticaIndex].EXCERPT = `<p class="text-lg italic text-gray-400 mb-6">Arithmetica is a thrilling, fast-paced math puzzle game designed to sharpen your cognitive abilities and reaction time. It challenges players to solve complex arithmetic equations—involving addition, subtraction, multiplication, and division—under increasing time pressure. The game provides a mental workout, improving both mathematical fluency and decision-making speed.</p>`;
  generatedGames[arithmeticaIndex].SEO_ARTICLE_FULL = `
    <article class="space-y-6">
      <h2 class="text-3xl font-bold text-cyan-400 border-b-2 border-cyan-800 pb-2">Master Your Mind with Arithmetica</h2>
      <p class="text-base leading-relaxed">In a world saturated with action-packed shooters and sprawling open-world adventures, a different kind of challenge emerges—one that tests not your reflexes in a firefight, but the speed and agility of your mind. Welcome to Arithmetica, the fast-paced math puzzle game that’s as addictive as it is educational. It’s a mental gymnasium where numbers are your weights, and every correct answer is a new personal best.</p>
      
      <h3 class="text-2xl font-semibold text-cyan-300 mt-8">The Core Gameplay: A Race Against Time</h3>
      <p class="text-base leading-relaxed">The premise of Arithmetica is deceptively simple: solve the arithmetic equation presented on screen. These aren't your leisurely classroom problems, however. A relentless timer ticks down, demanding quick calculations and even quicker inputs. The equations span the four basic operations: addition, subtraction, multiplication, and division. As you progress, the complexity ramps up. Numbers grow larger, multi-step problems appear, and the time you have to solve them shrinks, creating a thrilling sense of urgency.</p>
      
      <h3 class="text-2xl font-semibold text-cyan-300 mt-8">More Than Just a Game: Cognitive Benefits</h3>
      <p class="text-base leading-relaxed">Playing Arithmetica is more than just a way to pass the time; it's a potent cognitive workout. Regularly engaging with the game can lead to significant improvements in several key areas:</p>
      <ul class="list-disc list-inside space-y-2 pl-4 text-base leading-relaxed">
        <li><strong>Numerical Fluency:</strong> Your ability to manipulate numbers and perform mental calculations will skyrocket.</li>
        <li><strong>Problem-Solving Speed:</strong> The time pressure forces you to develop shortcuts and strategies for faster problem-solving.</li>
        <li><strong>Focus and Concentration:</strong> To succeed, you must block out distractions and maintain intense focus on the task at hand.</li>
        <li><strong>Working Memory:</strong> Juggling numbers and operations in your head strengthens your working memory, a critical component of overall intelligence.</li>
      </ul>
    </article>
  `;
  generatedGames[arithmeticaIndex].HOW_TO_PLAY = `
    <article class="space-y-6">
      <h2 class="text-3xl font-bold text-cyan-400 border-b-2 border-cyan-800 pb-2">How to Play Arithmetica</h2>
      <p class="text-base leading-relaxed">Arithmetica is designed to be intuitive and easy to pick up, but challenging to master. Follow these simple steps to start your mental workout.</p>
      
      <h3 class="text-2xl font-semibold text-cyan-300 mt-8">1. Start the Game</h3>
      <p class="text-base leading-relaxed">Once the game loads, you'll see the main menu. Click the "Start" button to begin a new session.</p>

      <h3 class="text-2xl font-semibold text-cyan-300 mt-8">2. Solve the Equation</h3>
      <p class="text-base leading-relaxed">An arithmetic problem will appear at the center of the screen (e.g., "5 + 8 = ?"). Below it, you'll find a numerical keypad.</p>
      <ul class="list-disc list-inside space-y-2 pl-4 text-base leading-relaxed">
        <li>Calculate the answer in your head as quickly as possible.</li>
        <li>Use your mouse to click the numbers on the on-screen keypad to enter your answer.</li>
        <li>Press the "Enter" key on the keypad to submit your solution.</li>
      </ul>

      <h3 class="text-2xl font-semibold text-cyan-300 mt-8">3. Beat the Clock</h3>
      <p class="text-base leading-relaxed">A timer bar at the top of the screen will continuously decrease. You must submit your correct answer before the timer runs out. If you're correct, the timer will reset (often with slightly less time for the next round) and a new problem will appear.</p>
      
      <h3 class="text-2xl font-semibold text-cyan-300 mt-8">Scoring and Progression</h3>
      <p class="text-base leading-relaxed">
        Your score increases with each correct answer. The faster you answer, the more points you may receive. The game ends when you either run out of time or submit an incorrect answer. Your final score will be displayed, challenging you to beat it in the next round. Good luck!
      </p>
    </article>
  `;
}

generatedGames.sort((a, b) => a.GAME_NAME.localeCompare(b.GAME_NAME));

export const gamesList: Game[] = generatedGames;
