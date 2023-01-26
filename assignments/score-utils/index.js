// temp proof of concept, will be replaced with a more robust solution by hooking into jest output directly
const fs = require('fs');
const path = require('path');

class ScoreCompiler {
  constructor(testSuite) {
    this.getId = ((id = 1) => () => id++)();
    this.testSuite = testSuite;
    this.testSuitePrefix = testSuite.split(' ').map(str => str[0]).join('');
    this.idToTestName = {};
    this.testNameToId = {};
    this.testScores = { [testSuite]: {} };
    this.shortAnswerScores = {};
  }

  getTestNameFromExpect = (jestExpectObj) => {
    return jestExpectObj.getState().currentTestName;
  }

  add = (jestExpectObj) => {
    const testName = this.getTestNameFromExpect(jestExpectObj);
    const testId = this.testSuitePrefix + this.getId();
    this.idToTestName[testId] = testName;
    this.testNameToId[testName] = testId;
    this.testScores[this.testSuite][testId] = 0;
    return { [testId]: 0 };
  }

  correct = (jestExpectObj, points = 1) => {
    const testName = this.getTestNameFromExpect(jestExpectObj);
    const testId = this.testNameToId[testName];
    this.testScores[this.testSuite][testId] += points;
    return this.testScores[this.testSuite];
  }

  getHumanReadable = (results) => {
    const readableOutput = {};
    let totalScore = 0;
    let totalMax = 0;
    Object.keys(results.testScores || [])
      .forEach(testSuite => {
        const score = Object.values(results.testScores[testSuite])
          .map(testIdObj => testIdObj)
          .reduce((sum, val) => sum + val, 0)
        const maxScore = Object.values(results.testScores[testSuite]).length
        totalScore += score;
        totalMax += maxScore;
        readableOutput[testSuite] = `${score}/${maxScore}`
      })

    readableOutput.finalTestScore = `FINAL SCORE: ${totalScore}/${totalMax}`
    return readableOutput;
  }

  export = () => {
    const resultsPath = path.join(__dirname, 'scores.json');
    let results = {};
    if (fs.existsSync(resultsPath)) {
      results = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
    }
    results.idToTestName = {
      ...results.idToTestName,
      ...this.idToTestName
    };
    results.testNameToId = {
      ...results.testNameToId,
      ...this.testNameToId
    };
    results.testScores = {
      ...results.testScores,
      ...this.testScores
    };
    results.shortAnswerScores = {
      ...results.shortAnswerScores,
      ...this.shortAnswerScores
    };

    // Must go last since we're compiling the results that we JUST built
    results.humanReadable = {
      ...results.humanReadable,
      ...this.getHumanReadable(results)
    }
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
  }


}

module.exports = { ScoreCompiler };