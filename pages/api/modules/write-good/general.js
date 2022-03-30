module.exports = {
  lyHypen: {
    fn: function (text) {
      var re = /\s[^\s-]+ly-/gi;
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation:
      "Don't hyphenate adverbs ending in -ly except where needed for clarity. [Google Style Guide](https://developers.google.com/style/hyphens)",
  },
  optionalPlurals: {
    fn: function (text) {
      var re = /\b\w+\(s\)/gi;
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation:
      'Don\'t use plurals in parentheses. If it\'s important in a specific context to indicate singular and plural, use "one or more". [Google Style Guide](https://developers.google.com/style/plurals-parentheses)',
  },
  ordinals: {
    fn: function (text) {
      var re = /\d+(?:st|nd|rd|th)/gi;
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation:
      'Spell out all ordinal numbers in text. [Google Style Guide](https://developers.google.com/style/numbers)',
  },
  // oxfordComma: {
  //   fn: function (text) {
  //     var re = /\w+, [\w\s]+ (?:and|or)/gi;
  //     var suggestions = [];
  //     while ((match = re.exec(text))) {
  //       suggestions.push({
  //         index: match.index,
  //         offset: match[0].length,
  //       });
  //     }
  //     return suggestions;
  //   },
  //   explanation:
  //     'In a series of three or more items, use a comma before the final "and" or "or". [Google Style Guide](https://developers.google.com/style/commas)',
  // },
  // parentheses: {
  //     fn: function (text) {
  //         var re = /\(.+\)/gi
  //         var suggestions = [];
  //         while (match = re.exec(text)) {
  //             suggestions.push({
  //                 index: match.index,
  //                 offset: match[0].length,
  //             });
  //         }
  //         return suggestions;
  //     },
  //     explanation: 'Don\'t put important information in parentheses if you can help it. [Google Style Guide](https://developers.google.com/style/parentheses)'
  // },
  quotes: {
    fn: function (text) {
      var re = /"[^"]+"[.,?]/gi;
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation:
      'Commas and periods go inside quotation marks. [Google Style Guide](https://developers.google.com/style/quotation-marks)',
  },
  ranges: {
    fn: function (text) {
      var re = /(?:from|between)\s\d+\s?-\s?\d+/gi;
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation:
      "Don't add words such as 'from' or 'between' to describe a range of numbers. [Google Style Guide](https://developers.google.com/style/hyphens)",
  },

  spacing: {
    fn: function (text) {
      var positives = ['[a-z][.?!] {2,}[A-Z]', '[a-z][.?!] {2,}[A-Z]'];
      var suggestions = [];
      var re = new RegExp(positives.join('|'), 'gi');
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation:
      'Leave only one space between sentences. [Google Style Guide](https://developers.google.com/style/sentence-spacing)',
  },
  unitesOfMeasurement: {
    fn: function (text) {
      var positives = ['\\d+(?:B|kB|MB|GB|TB)', '\\d+(?:ns|ms|s|min|h|d)'];
      var suggestions = [];
      var re = new RegExp(positives.join('|'), 'gi');
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation:
      'Put a nonbreaking space between the number and the unit. [Google Style Guide](https://developers.google.com/style/units-of-measure)',
  },
  // personalPronouns: {
  //     fn: function (text) {
  //         var positives = ['\\bwe\\b', '\\bwe\'(?:ve|re)', '\\bours?', '\\bus\\b'];
  //         var suggestions = [];
  //         var re = new RegExp(positives.join('|'), 'gi');
  //         while (match = re.exec(text)) {
  //             suggestions.push({
  //                 index: match.index,
  //                 offset: match[0].length,
  //             });
  //         }
  //         return suggestions;
  //     },
  //     explanation: 'Try to avoid using first-person plural unless using *we* to refer to your organization, after using your organization\'s name. [Google Style Guide](https://developers.google.com/style/pronouns#personal-pronouns)'
  // },
  // futureTense: {
  //   fn: function (text) {
  //     var positives = ['will'];
  //     var suggestions = [];
  //     var re = new RegExp(positives.join('|'), 'gi');
  //     while ((match = re.exec(text))) {
  //       suggestions.push({
  //         index: match.index,
  //         offset: match[0].length,
  //       });
  //     }
  //     return suggestions;
  //   },
  //   explanation:
  //     "Avoid 'will' and the future tense. [Google Style Guide](https://developers.google.com/style/tense)",
  // },
};
