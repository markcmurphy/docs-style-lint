// const weaselWords = require('weasel-words');
const passiveVoice = require('passive-voice');
const adverbWhere = require('adverb-where');
const tooWordy = require('too-wordy');
const noCliches = require('no-cliches');
// const testGloss = require('./testGloss.js');
const ePrime = require('e-prime');

module.exports = {
  // weasel: {
  //   fn: weaselWords,
  //   explanation: 'is a weasel word'
  // },
  passive: {
    fn: passiveVoice,
    explanation: 'may be passive voice',
  },
  adverb: {
    fn: adverbWhere,
    explanation: 'can weaken meaning',
  },
  // tooWordy: {
  //   fn: tooWordy,
  //   explanation: 'is wordy or unneeded',
  // },
  cliches: {
    fn: noCliches,
    explanation: 'is a cliche',
  },
  eprime: {
    fn: ePrime,
    explanation: "is a form of 'to be'",
  },
};
