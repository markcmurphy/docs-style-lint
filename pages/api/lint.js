const _ = require('lodash');
// const argv = require('minimist')(process.argv.slice(2));
// const chalk = require('chalk');
const en_US = require('dictionary-en-us');
const fs = require('fs');
// const lint = require('remark-lint-maximum-line-length');
// const lint = require('remark-cli');
// const lint = require('remark-preset-lint-markdown-style-guide');
const map = require('async/map');
// const meow = require('meow');
const path = require('path');
// import('remark');
// const remark = require('remark');
import { remark } from 'remark';
import remarkRetext from 'remark-retext';
import('vfile-reporter');
import { retext } from 'retext';
import('nlcst-to-string');
import('to-vfile');
import('unist-util-visit');
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();

// remark and retext plugins
// import { equality } from 'retext-equality';
import retextEquality from 'retext-equality';
import { retextIntensify as intensify } from 'retext-intensify';
import remarkMessageControl from 'remark-message-control';
import retextSpell from 'retext-spell';
import remarkLint from 'remark-lint';
import remarkValidateLinks from 'remark-validate-links';
import * as validateExternalLinks from 'remark-lint-no-dead-urls';
import { retextSyntaxUrls as syntaxURLS } from 'retext-syntax-urls';
import retextRepeatedWords from 'retext-repeated-words';
import { retextIndefiniteArticle as indefiniteArticles } from 'retext-indefinite-article';
import * as assuming from 'retext-assuming';
import retextReadability from 'retext-readability';
import retextSimplify from 'retext-simplify';

// writeGood modules
import { remarkWriteGood } from './modules/write-good/index.js';
import * as writeGood from 'remark-lint-write-good';
import * as writeGoodExtension from './modules/write-good/writeGoodExtension.js';
import * as firstPerson from './modules/write-good/firstPerson.js';
import * as genderBias from './modules/write-good/genderBias.js';
import * as dateFormat from './modules/write-good/dateFormat.js';
import * as ellipses from './modules/write-good/ellipses.js';
import * as emdash from './modules/write-good/emdash.js';
import * as exclamation from './modules/write-good/exclamation.js';
import * as general from './modules/write-good/general.js';
import * as glossery from './modules/write-good/glossery.js';

// import { json } from 'express';
// import multer from 'multer';
import nextConnect from 'next-connect';
import { VFile } from 'vfile';
// import { reporter } from 'vfile-reporter';

// const storage = multer.memoryStorage();

// const upload = multer({
//   storage: storage,
// });

const apiRoute = nextConnect({
  onError(error, req, res) {
    console.log('🚀 ~ file: lint.js ~ line 62 ~ onError ~ error', error);
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
}).post((req, res) => {
  // const uploadMiddleware = upload.single('file');

  // apiRoute.use(uploadMiddleware);

  // var silent = cli.flags.silent || false;
  // export default handler(req, res) {
  // if (req.method === 'POST') {
  var silent = false;
  // // Build array of files that match input glob

  // // Use --config file if provided, otherwise defaults
  var config = {};
  var customConfig = {};
  var defaultConfig = require('./default-config.json');
  // var defaultConfig = require(serverRuntimeConfig.PROJECT_ROOT +
  //   '\\default-config.json');

  defaultConfig.dictionaries.forEach((dictPath, index, arr) => {
    arr[index] = path.join(__dirname, dictPath);
  });

  // if (!cli.flags.config) {
  //   config = defaultConfig;
  // } else {
  //   customConfig = JSON.parse(fs.readFileSync(cli.flags.config, 'utf8'));

  //   // If --config and --ignore are specified, update the config with new ignore
  //   if (customConfig.ignore && cli.flags.ignore) {
  //     var isValidString = /^[ A-Za-z0-9_@./#&+-]*$/.test(cli.flags.ignore);
  //     var isUnique = !_.includes(customConfig.ignore, cli.flags.ignore);
  //     if (isValidString && isUnique) {
  //       customConfig.ignore.push(cli.flags.ignore);
  //       customConfig.ignore.sort();
  //       fs.writeFile(
  //         cli.flags.rules,
  //         JSON.stringify(rules, null, 2),
  //         function (err) {
  //           if (err) {
  //             return
  //           }
  //           console.log(
  //             "Added '" +
  //               cli.flags.ignore +
  //               "' to ignore list. Don't forget to commit the changes to " +
  //               cli.flags.config +
  //               '.'
  //           );
  //         }
  //       );
  //     } else {
  //       console.log(
  //         "Could not add '" +
  //           cli.flags.ignore +
  //           "' to ignore list. Please add it manually."
  //       );
  //     }
  //   }

  // If custom dictionaries are provided, prepare their paths
  if (customConfig.dictionaries) {
    // Convert dictionaries string to an array
    var customDict = customConfig.dictionaries;
    if (typeof customDict === 'string' || customDict instanceof String) {
      customConfig.dictionaries = [customDict];
    }

    // Add cwd to custom dictionary paths
    customConfig.dictionaries.forEach((dictionaryPath) => {
      dictionaryPath = process.cwd() + dictionaryPath;
      // dictionaryPath = serverRuntimeConfig.PROJECT_ROOT + dictionaryPath;
    });
  } else {
    // Remove empty dictonaries key so it doesn't override default config
    delete customConfig.dictionaries;
  }

  //   // Merge default and custom rules, preferring customRules and concating arrays
  config = _.mergeWith(defaultConfig, customConfig, (objValue, srcValue) => {
    if (_.isArray(objValue)) {
      return _.uniq(objValue.concat(srcValue));
    }
  });
  // }

  let dictionary = en_US;

  var myReadFile = function (dictPath, cb) {
    fs.readFile(dictPath, function (err, buffer) {
      console.log('🚀 ~ file: lint.js ~ line 164 ~ dictPath', dictPath);
      console.log('🚀 ~ file: lint.js ~ line 163 ~ buffer', buffer);
      cb(err, !err && buffer);
    });
  };

  if (config.dictionaries && config.dictionaries.length >= 1) {
    dictionary = function (cb) {
      en_US(function (err, primary) {
        map(config.dictionaries, myReadFile, function (err, results) {
          console.log('🚀 ~ file: lint.js ~ line 173 ~ results', results);
          console.log('🚀 ~ file: lint.js ~ line 172 ~ err', err);
          results.unshift(primary.dic);
          var combinedDictionaries = Buffer.concat(results);
          cb(
            err,
            !err && {
              aff: primary.aff,
              dic: combinedDictionaries,
            }
          );
        });
      });
    };
  }

  // var lintRules = _.mapValues(config.rules, (value) => {
  //   var keys = Object.keys(value);
  //   if (_.isBoolean(value)) return value;
  //   if (value.hasOwnProperty('severity')) {
  //     if (Object.keys(value).length == 1) return true;
  //     var newValue = {};
  //     for (var prop in value) {
  //       if (prop !== 'severity') newValue[prop] = value[prop];
  //     }
  //     return newValue;
  //   }
  //   return value;
  // });

  var fatalRules = _.keys(
    _.pickBy(config.rules, function (value) {
      return value.severity == 'fatal';
    })
  );

  var warnRules = _.keys(
    _.pickBy(config.rules, function (value) {
      return value && (value.severity == 'warn' || !value.severity);
    })
  );

  var suggestRules = _.keys(
    _.pickBy(config.rules, function (value) {
      return value.severity == 'suggest';
    })
  );

  // const linterRules = [
  //   require('remark-lint'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#file-extension
  //   [require('remark-lint-file-extension'), 'md'],

  //   // http://www.cirosantilli.com/markdown-style-guide/#file-name
  //   require('remark-lint-no-file-name-mixed-case'),
  //   require('remark-lint-no-file-name-articles'),
  //   require('remark-lint-no-file-name-irregular-characters'),
  //   require('remark-lint-no-file-name-consecutive-dashes'),
  //   require('remark-lint-no-file-name-outer-dashes'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#newlines
  //   // http://www.cirosantilli.com/markdown-style-guide/#empty-lines-around-lists
  //   // http://www.cirosantilli.com/markdown-style-guide/#tables
  //   require('remark-lint-no-consecutive-blank-lines'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#spaces-after-sentences.
  //   // Not enforced, cannot be done properly without false positives, if you
  //   // want this, use remark-retext and retext-sentence-spacing.

  //   // http://www.cirosantilli.com/markdown-style-guide/#line-wrapping
  //   [require('remark-lint-maximum-line-length'), 60],

  //   // http://www.cirosantilli.com/markdown-style-guide/#dollar-signs-in-shell-code
  //   require('remark-lint-no-shell-dollars'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#what-to-mark-as-code.
  //   // This is a tip, not a rule.

  //   // http://www.cirosantilli.com/markdown-style-guide/#spelling-and-grammar.
  //   // Spelling is not in the scope of remark-lint.  If you want this,
  //   // use remark-retext and retext-spell.

  //   // http://www.cirosantilli.com/markdown-style-guide/#line-breaks
  //   require('remark-lint-hard-break-spaces'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#headers
  //   [require('remark-lint-heading-style'), 'atx'],
  //   require('remark-lint-heading-increment'),
  //   require('remark-lint-no-duplicate-headings'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#top-level-header
  //   require('remark-lint-no-multiple-toplevel-headings'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#header-case.
  //   // Heading case isn’t tested yet: new rules to fix this are ok though!

  //   // http://www.cirosantilli.com/markdown-style-guide/#end-of-a-header.
  //   // Cannot be checked?

  //   // http://www.cirosantilli.com/markdown-style-guide/#header-length
  //   require('remark-lint-maximum-heading-length'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#punctuation-at-the-end-of-headers
  //   [require('remark-lint-no-heading-punctuation'), ':.'],

  //   // http://www.cirosantilli.com/markdown-style-guide/#header-synonyms.
  //   // Cannot be checked?

  //   // http://www.cirosantilli.com/markdown-style-guide/#blockquotes
  //   [require('remark-lint-blockquote-indentation'), 2],
  //   require('remark-lint-no-blockquote-without-marker'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#unordered
  //   [require('remark-lint-unordered-list-marker-style'), '-'],

  //   // http://www.cirosantilli.com/markdown-style-guide/#ordered
  //   [require('remark-lint-ordered-list-marker-style'), '.'],
  //   [require('remark-lint-ordered-list-marker-value'), 'one'],

  //   // http://www.cirosantilli.com/markdown-style-guide/#spaces-after-list-marker
  //   [require('remark-lint-list-item-indent'), 'mixed'],

  //   // http://www.cirosantilli.com/markdown-style-guide/#indentation-of-content-inside-lists
  //   require('remark-lint-list-item-content-indent'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#empty-lines-inside-lists
  //   require('remark-lint-list-item-spacing'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#case-of-first-letter-of-list-item
  //   // Not checked.

  //   // http://www.cirosantilli.com/markdown-style-guide/#punctuation-at-the-end-of-list-items.
  //   // Not checked.

  //   // http://www.cirosantilli.com/markdown-style-guide/#definition-lists.
  //   // Not checked.

  //   // http://www.cirosantilli.com/markdown-style-guide/#code-blocks
  //   [require('remark-lint-code-block-style'), 'fenced'],
  //   [
  //     require('remark-lint-fenced-code-flag'),
  //     {
  //       allowEmpty: false,
  //     },
  //   ],
  //   [require('remark-lint-fenced-code-marker'), '`'],

  //   // http://www.cirosantilli.com/markdown-style-guide/#horizontal-rules
  //   [require('remark-lint-rule-style'), '---'],

  //   // http://www.cirosantilli.com/markdown-style-guide/#tables
  //   require('remark-lint-no-table-indentation'),
  //   require('remark-lint-table-pipes'),
  //   require('remark-lint-table-pipe-alignment'),
  //   [require('remark-lint-table-cell-padding'), 'padded'],

  //   // http://www.cirosantilli.com/markdown-style-guide/#separate-consecutive-elements.
  //   // Not checked.

  //   // http://www.cirosantilli.com/markdown-style-guide/#span-elements
  //   require('remark-lint-no-inline-padding'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#reference-style-links
  //   require('remark-lint-no-shortcut-reference-image'),
  //   require('remark-lint-no-shortcut-reference-link'),
  //   require('remark-lint-final-definition'),
  //   require('remark-lint-definition-case'),
  //   require('remark-lint-definition-spacing'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#single-or-double-quote-titles
  //   [require('remark-lint-link-title-style'), '"'],

  //   // http://www.cirosantilli.com/markdown-style-guide/#bold
  //   [require('remark-lint-strong-marker'), '*'],

  //   // http://www.cirosantilli.com/markdown-style-guide/#italic
  //   [require('remark-lint-emphasis-marker'), '*'],

  //   // http://www.cirosantilli.com/markdown-style-guide/#uppercase-for-emphasis.
  //   // Not checked.

  //   // http://www.cirosantilli.com/markdown-style-guide/#emphasis-vs-headers
  //   require('remark-lint-no-emphasis-as-heading'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#automatic-links-without-angle-brackets
  //   require('remark-lint-no-literal-urls'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#content-of-automatic-links
  //   require('remark-lint-no-auto-link-without-protocol'),

  //   // http://www.cirosantilli.com/markdown-style-guide/#email-automatic-links.
  //   // Not checked.)
  // ];

  var readabilityConfig = config.rules['retext-readability'];

  var ignoreWords = _.difference(config.ignore, config.noIgnore);

  // if (cli.flags.verbose) {
  //
  //
  //
  //
  // }

  let fileToCheck = new VFile(req.body.toString('utf-8'));
  let docFiles = [];
  docFiles.push(fileToCheck);

  // map(docFiles, toVFile.read, function (err, files) {

  map(docFiles, checkFile, function (err, results) {
    // results[0].messages?.forEach((message) => {
    //   console.log(message);
    // });
    // console.log('🚀 ~ file: lint.js ~ line 377 ~ err', err);
    var hasErrors = false;
    // report(err || results, {
    //   silent: silent,
    // });
    // res.send(
    // const resReport = report(err || results, {
    //   silent: silent,
    // });
    let resSendArr = [];

    results.forEach((result) => {
      result.messages.forEach((message) => {
        resSendArr.push(message);
      });
    });
    res.send(resSendArr);
    // );

    // Check for errors and exit with error code if found
    results.forEach((result) => {
      result.messages.forEach((message) => {
        if (message.fatal) hasErrors = true;
      });
    });
    if (hasErrors) process.exit(1);
  });

  function checkFile(filez, cb) {
    remark()
      // TODO: fix MD lint rules
      // .use(remarkLint)
      .use(remarkValidateLinks, {})
      .use(validateExternalLinks, {
        skipLocalhost: true,
        skipUrlPatterns: ['https://github.com', '//s3.amazonaws.com'],
        gotOptions: {
          // baseUrl: 'https://developer-beta.bigcommerce.com',
          baseUrl: 'https://developer.bigcommerce.com',
        },
      })
      .use(writeGood, {
        checks: general,
        whitelist: ignoreWords,
      })
      .use(writeGood, {
        checks: dateFormat,
        whitelist: ignoreWords,
      })
      .use(writeGood, {
        checks: ellipses,
        whitelist: ignoreWords,
      })
      .use(writeGood, {
        checks: emdash,
        whitelist: ignoreWords,
      })
      .use(writeGood, {
        checks: exclamation,
        whitelist: ignoreWords,
      })
      .use(writeGood, {
        checks: firstPerson,
        whitelist: ignoreWords,
      })
      .use(writeGood, {
        checks: writeGoodExtension,
        whitelist: ignoreWords.concat('In order to'),
        //   // ignore: ignoreWords.concat(['in order to']),
      })
      // TODO: consolidate some writeGood modules
      .use(
        remarkRetext,
        retext() // Convert markdown to plain text
          // .use(remarkWriteGood, {
          //   checks: glossery,
          //   whitelist: ignoreWords.concat(['as']),
          // })
          // TODO: configure readability thresholds to make it useful
          .use(retextReadability, readabilityConfig || {})
          // TODO: configure simplify to be less sensitive
          .use(retextSimplify, {
            ignore: ignoreWords.concat([
              'multiple',
              'render',
              'forward',
              'should',
              'in order to',
            ]),
          })
          .use(retextEquality, {
            ignore: ignoreWords.concat([
              'just',
              'easy',
              'disable',
              'disabled',
              'host',
            ]),
          })
          .use(syntaxURLS)
          // .use(intensify, {
          //   ignore: ignoreWords.concat([]),
          // })
          .use(retextRepeatedWords)
          .use(indefiniteArticles)
        // .use(assuming, {
        //   ignore: ignoreWords.concat([]),
        // })
        // TODO: have spell not check URLS or file names
        // .use(retextSpell, {
        //   dictionary: dictionary,
        //   ignore: ignoreWords.concat([]),
        //   ignoreLiteral: true,
        // })
      )
      // plugin to enable, disable, and ignore messages.
      // .use(remarkMessageControl, {
      //   name: 'quality-docs',
      //   source: [
      //     'remark-lint',
      //     // 'remark-lint-write-good',
      //     'retext-readability',
      //     'retext-simplify',
      //     'retext-equality',
      //     'retext-intensify',
      //     'retext-google-styleguide',
      //   ],
      // })
      .process(filez, function (err, results) {
        console.log('🚀 ~ file: lint.js ~ line 513 ~ err', err);
        console.log('🚀 ~ file: lint.js ~ line 513 ~ results', results);
        var filteredMessages = [];
        if (results !== undefined) {
          results.messages?.forEach((message) => {
            // var hasFatalRuleId = _.includes(fatalRules, message.ruleId);
            // var hasFatalSource = _.includes(fatalRules, message.source);
            var hasSuggestedRuleId = _.includes(suggestRules, message.ruleId);
            var hasSuggestedSource = _.includes(suggestRules, message.source);

            if (suggestRules && (hasSuggestedRuleId || hasSuggestedSource)) {
              message.message = message.message.replace(
                /don\’t use “(.*)”/gi,
                (match, word) => {
                  return 'Use “' + word + '” sparingly';
                }
              );
              delete message.fatal;
            }

            // if (fatalRules && (hasFatalRuleId || hasFatalSource)) {
            //   message.fatal = true;
            // }

            filteredMessages.push(message);
          });
        }
        results.messages = filteredMessages;
        // console.log('🚀 ~ file: lint.js ~ line 525 ~ results', results);
        cb(null, results);
      });
  }

  // let fileToCheck = new VFile(stream.toString('utf-8'));
  // let fileToCheck = new VFile(req.body.toString('utf-8'));

  // checkFile(fileToCheck, function (err, results) {
  //   console.log('🚀 ~ file: lint.js ~ line 519 ~ err', err);
  //   console.log('🚀 ~ file: lint.js ~ line 519 ~ results', results.messages);
  //   // report(err || results, {
  //   //   silent: silent,
  //   // });
  // });
  // });

  // checkFile(fileToCheck.value);
});

export default apiRoute;
