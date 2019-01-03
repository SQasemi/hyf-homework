const watchFirstEpisode = function() {
  // watch first episode
  console.log('Watch first episode');
};

const watchBreakingBad = function() {
  console.log('Watching Breaking bad');
  // watching breaking bad
  watchFirstEpisode();
  console.log('No more for today');
};

const goForARun = function() {
  console.log('Im running! look at me!');
}

const helpStudentsWithHomework = function() {
  console.log('Help help help');
}

function finishMondayEvening(functionThatIsParameter) {
  functionThatIsParameter();
  // no more for today
  goForARun();
  // I am running look at me!
  helpStudentsWithHomework();
  // Help help help
  console.log('done for today')
}

// done for today
finishMondayEvening(watchBreakingBad);
// draw call stack