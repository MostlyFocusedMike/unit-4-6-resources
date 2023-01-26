// temp proof of concept, will be replaced with a more robust solution by hooking into jest output directly
// console.log(expect.getState().currentTestName); // use in before each and in test


const fs = require('fs');
const path = require('path');

const compileScore = (testSuiteName) => {
  let scoreData = { score: 0, maxPoints: 0 }

  const saveTestResults = () => {
    const resultsPath = path.join(__dirname,'..', 'test-score.json');
    let results = {};
    if (fs.existsSync(resultsPath)) {
      results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
    }
    results[testSuiteName] = scoreData;
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  }

  return (addToScore = 0, addToMax = 0, shouldReset) => {
    if (shouldReset) scoreData = { score: 0, maxPoints: 0 }
    scoreData.score += addToScore;
    scoreData.maxPoints += addToMax;

    return {
      ...scoreData,
      saveTestResults,
    };
  }
}

module.exports = { compileScore };