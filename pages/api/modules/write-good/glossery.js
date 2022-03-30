module.exports = {
  semicolons: {
    fn: function (text) {
      var positives = [';(?=(?:[^`]*`[^`]*`)*[^`]*$)'];
      var suggestions = [];
      var re = new RegExp(positives.join('|'), 'g');
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation:
      'Use semicolons judiciously. [Google Style Guide](https://developers.google.com/style/semicolons)',
  },
  controlPanel: {
    fn: function (text) {
      var positives = ['Control Panel'];
      var re = new RegExp(positives.join('|'), 'g');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "control panel" instead',
  },
  bigcommerce: {
    fn: function (text) {
      var positives = ['Big Commerce', 'bigcommerce', 'big commerce'];
      var re = new RegExp(positives.join('|'), 'g');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "BigCommerce" instead',
  },
  blueprint: {
    fn: function (text) {
      var positives = ['Blueprint Themes', 'Blueprint-based themes'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "Blueprint themes" instead',
  },
  channelManager: {
    fn: function (text) {
      var positives = ['channel manager'];
      var re = new RegExp(positives.join('|'), 'g');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "Channel Manager" instead',
  },
  ecommerce: {
    fn: function (text) {
      var positives = ['e-commerce', 'Ecommerce', 'eCommerce'];
      var re = new RegExp(positives.join('|'), 'g');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "ecommerce" instead',
  },
  community: {
    fn: function (text) {
      var positives = ['community'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "Community" instead when referring to the BC Community.',
  },
  devcenter: {
    fn: function (text) {
      var positives = [
        'Developer Center',
        'DevCenter',
        'devcenter',
        'developer center',
      ];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "Dev Center" instead.',
  },
  frontmatter: {
    fn: function (text) {
      var positives = ['frontmatter'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "front matter" instead.',
  },
  handlebars: {
    fn: function (text) {
      var positives = ['handlebars'];
      var re = new RegExp(positives.join('|'), 'g');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "Handlebars" instead.',
  },
  permanentURL: {
    fn: function (text) {
      var positives = [
        'temporary URL',
        'alternate URL',
        'canonical URL',
        'mybigcommerce.com URL',
      ];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Use "permanent URL" instead in reference to permanent BigCommerce store URL.',
  },
  sku: {
    fn: function (text) {
      var positives = ['sku'];
      var re = new RegExp(positives.join('|'), 'g');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "SKU" instead.',
  },
  stencil: {
    fn: function (text) {
      var positives = ['Stencil Themes', 'Stencil-based themes'];
      var re = new RegExp(positives.join('|'), 'g');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "Stencil themes" instead',
  },
  storefront: {
    fn: function (text) {
      var positives = ['Store Front'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "storefront" instead',
  },
  wordPress: {
    fn: function (text) {
      var positives = [
        'Word Press',
        'word press',
        'Word press',
        'Wordpress',
        'wordpress',
      ];
      var re = new RegExp(positives.join('|'), 'g');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "WordPress" instead',
  },
  ampersand: {
    fn: function (text) {
      var positives = ['&'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "and" instead unless referencing code',
  },
  access: {
    fn: function (text) {
      var positives = ['access/w'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Avoid using \"access\" as a verb, if possible. Instead, use friendlier words like 'see',  'edit',  'find',  'use', or  'view.'",
  },
  addin: {
    fn: function (text) {
      var positives = ['\\baddin\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "add-in" instead',
  },
  allowsYouTo: {
    fn: function (text) {
      var positives = ['allows you'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "lets you" instead',
  },
  apis: {
    fn: function (text) {
      var positives = ["API's"];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "APIs" instead',
  },
  abnormal: {
    fn: function (text) {
      var positives = ['abnormal'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use to refer to a person. OK to use to refer to a condition of a computer system.",
  },
  abort: {
    fn: function (text) {
      var positives = ['abort'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Avoid in general usage. Instead, use words like stop, exit, cancel, or end. In Linux, abort refers to a type of signal that terminates an abnormal process.',
  },
  above: {
    fn: function (text) {
      var positives = ['above'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Don\'t use. Instead, use "preceding."',
  },
  accountName: {
    fn: function (text) {
      var positives = ['account name'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Don\'t use. Instead, use "username."',
  },
  actionable: {
    fn: function (text) {
      var positives = ['actionable'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Avoid unless it\'s the clearest and simplest phrasing for your audience.Instead of using it, leave it out or replace it with a phrase like "that you can act on" or "useful." Don\'t use it in the legal sense without consulting a lawyer.',
  },
  addOn: {
    fn: function (text) {
      var positives = ['\\baddon\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "add-on" instead',
  },
  addressBar: {
    fn: function (text) {
      var positives = ['url bar', 'omnibox'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use "address bar" instead',
  },
  adHoc: {
    fn: function (text) {
      var positives = ['ad hoc'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Okay to use in database and analytics contexts to mean *free-form* or *user-written* (for example, ad hoc queries or an ad hoc chart). Don't hyphenate or italicize the term. For other contexts, try to find a more specific English equivalent.",
  },
  agnostic: {
    fn: function (text) {
      var positives = ['agnostic'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, use a precise term like platform-independent.",
  },
  agnostic: {
    fn: function (text) {
      var positives = ['agnostic'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, use a precise term like platform-independent.",
  },
  ajax: {
    fn: function (text) {
      var positives = ['Ajax', 'ajax'];
      var re = new RegExp(positives.join('|'), 'g');
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
      "At the moment (as of mid-2017), our help site writes the term as AJAX, so that's how we currently write it in developer documentation as well. Our impression is that over time, more people are writing it as Ajax, but AJAX is not uncommon. Jesse James Garrett, who coined the term, says it's not an acronym, but many others treat it as one.",
  },
  aka: {
    fn: function (text) {
      var positives = ['aka'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, write out also known as, or present an alternative term using parentheses or the word or. You can also write out a definition.",
  },
  allowlist: {
    fn: function (text) {
      var positives = ['allowlist'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use as a verb. Instead, rewrite to improve clarity. OK to use allowlist as a noun.",
  },
  allowsYouTo: {
    fn: function (text) {
      var positives = ['allows you to'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use. Instead, use *lets you.*",
  },
  alpha: {
    fn: function (text) {
      var positives = ['Alpha'];
      var re = new RegExp(positives.join('|'), 'g');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Lowercase except when part of a product name.',
  },
  andSoOn: {
    fn: function (text) {
      var positives = ['and so on'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Avoid using *and so on* whenever possible.',
  },
  // as: {
  //     fn: function (text) {
  //         var positives = ["\\bas\\b"];
  //         var re = new RegExp(positives.join('|'), 'gi');
  //         var suggestions = [];
  //         while (match = re.exec(text)) {
  //             suggestions.push({
  //                 index: match.index,
  //                 offset: match[0].length,
  //             });
  //         }
  //         return suggestions;
  //     },
  //     explanation: 'If you mean *because,* then use *because* instead of *as.* *As* is ambiguous; it can refer to the passage of time. *Because* refers to causation or the reason for something.'
  // },
  autopopulate: {
    fn: function (text) {
      var positives = ['auto populate', 'auto-populate'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *autopopulate* instead.',
  },
  autoscaling: {
    fn: function (text) {
      var positives = ['auto-scaling'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *autoscaling* instead.',
  },
  autotagging: {
    fn: function (text) {
      var positives = ['auto-tagging'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *autotagging* instead.',
  },
  autoupdate: {
    fn: function (text) {
      var positives = ['autoupdate'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use. Instead, use *automatically update.*",
  },
  backend: {
    fn: function (text) {
      var positives = ['back-end', 'back end'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *backend* instead."',
  },
  backwardsCompatible: {
    fn: function (text) {
      var positives = ['backwards compatible'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *backward compatible* instead."',
  },
  below: {
    fn: function (text) {
      var positives = ['below'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use. Instead, use *following.*",
  },
  blackHat: {
    fn: function (text) {
      var positives = ['blackhat', 'black hat', 'black-hat'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, use precise terms for the kind of violation or practice, such as illegal, unethical, or in violation of rules.",
  },
  blind: {
    fn: function (text) {
      var positives = ['blind'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Avoid using *blind to* or *blind eye to*. Instead, use more precise terms like ignore, unaware of, disregard, avoid, or reject.\nAvoid using blind writes. Instead, use a more precise phrase, such as a write operation without a read operation.\nAvoid using blind change or change blindly. Instead, use a more precise phrase such as change without first confirming the value.\nWhen referring to people, use terms like person who is blind, screen reader user (if applicable), person who is visually impaired, person who is low-vision, magnification user (if applicable).',
  },
  builtIn: {
    fn: function (text) {
      var positives = ['builtsin'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *built-in* instead if referring to a feature."',
  },
  checkBox: {
    fn: function (text) {
      var positives = ['check box'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *checkbox* instead."',
  },
  cli: {
    fn: function (text) {
      var re = /(?<=^|\s|$)cli(?=^|\s|$)/gi;
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
      'Don\'t use. Instead, use "command-line tool" or a similar noun.',
  },
  clickOn: {
    fn: function (text) {
      var positives = ['click on'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Use *click* instead. When the environment is a desktop with a mouse, use click for most targets, such as buttons, links, list items, and radio buttons.',
  },
  clickHere: {
    fn: function (text) {
      var positives = ['click here'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead use the exact title of the linked-to page, capitalized the same way the title is capitalized. OR A description of the linked-to page, cap\nitalized like ordinary text instead of like a title. Don't use a URL as link text. Instead, use the page title or a description of the page. ",
  },
  codebase: {
    fn: function (text) {
      var positives = ['code base'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *codebase* instead.',
  },
  comprise: {
    fn: function (text) {
      var positives = ['comprise'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, use *consist of,* *contain,* or *include.*",
  },
  config: {
    fn: function (text) {
      var positives = ['\\b(?<!-)config\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Avoid when possible. Instead, spell out the full word when it's used in a non-code sense: *configuration* or *configuring.* Use the verbatim code item name when referring to, for example, a data structure or file with that name.",
  },
  cons: {
    fn: function (text) {
      var positives = ['\\bcons\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use. Instead, use something like *disadvantages.*",
  },
  cpu: {
    fn: function (text) {
      var positives = ['\\bcpu\\b'];
      var re = new RegExp(positives.join('|'), 'g');
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
      'Use *CPU* instead. All caps. No need to expand the abbreviation on first mention.',
  },
  currently: {
    fn: function (text) {
      var positives = ['currently'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use *currently* to imply that a feature might become available in the future, as in *currently doesn't support this feature.*",
  },
  data: {
    fn: function (text) {
      var positives = ['data are'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'In our usage, *data* is singular, not plural. Say the *data is,* not the *data are.* Also, in our usage, data is a mass noun, not a count noun; for example, say *less data* rather than *fewer data.*',
  },
  deepLinking: {
    fn: function (text) {
      var positives = ['deep-linking'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Use *deep linking* instead. However, if it would work to replace with *linking,* then do that.',
  },
  desire: {
    fn: function (text) {
      var positives = ['desire'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use. Instead, use a word like *want* or *need.*",
  },
  disable: {
    fn: function (text) {
      var positives = ['disable'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use *disabled* to describe something that's broken. When describing a user action or the state of a UI element, use a more precise term where possible, like *turn off,* *inactive,* *deactivated,* or *deselect.*",
  },
  documentation: {
    fn: function (text) {
      var positives = ['\\bdoc\\b', '\\bdocs\\b', 'article', 'topic'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Within a document, use *in this document,* and not *in this article* or *in this topic.* It's okay to use *in this tutorial* or *in this codelab.*",
  },
  dropdown: {
    fn: function (text) {
      var positives = ['dropdown'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'In most cases, you can omit *drop-down* in favor of *list* or *menu.* If the omission results in ambiguity, then include *drop-down* as a modifier.',
  },
  dropdown: {
    fn: function (text) {
      var positives = ['dropdown'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'In most cases, you can omit *drop-down* in favor of *list* or *menu.* If the omission results in ambiguity, then include *drop-down* as a modifier.',
  },
  // eg: {
  //     fn: function (text) {
  //         var positives = ["e.g."];
  //         var re = new RegExp(positives.join('|'), 'gi');
  //         var suggestions = [];
  //         while (match = re.exec(text)) {
  //             suggestions.push({
  //                 index: match.index,
  //                 offset: match[0].length,
  //             });
  //         }
  //         return suggestions;
  //     },
  //     explanation: 'Don\'t use. Instead, use phrases like *for example* or *such as.* Too many people mix up *e.g.* and *i.e.*'
  // },
  endpoint: {
    fn: function (text) {
      var positives = ['end point'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *endpoint* instead.',
  },
  etc: {
    fn: function (text) {
      var positives = ['\\betc'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Avoid both *etc.* and and *so on* wherever possible, but if you really need to use one, use *etc.* Always include the period, even if a comma follows immediately after.',
  },
  filename: {
    fn: function (text) {
      var positives = ['file name'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *filename* instead.',
  },
  filesystem: {
    fn: function (text) {
      var positives = ['file system'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *filesystem* instead.',
  },
  firstClass: {
    fn: function (text) {
      var positives = ['first-class', 'first class'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use socially-charged terms for technical concepts where possible. Instead, consider terms such as *core feature,* *built-in,* *top-level.*",
  },
  forInstance: {
    fn: function (text) {
      var positives = ['for instance'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Avoid when possible. Instead, use *for example* or *such as.*',
  },
  frontend: {
    fn: function (text) {
      var positives = ['front-end', 'front end'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *frontend* instead.',
  },
  grandfather: {
    fn: function (text) {
      var positives = ['grandfather'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use to refer to something that is allowed to violate a rule because it predates the rule. Instead, use an adjective like *legacy* or *exempt* or a verb like *made an exception.*",
  },
  grandfather: {
    fn: function (text) {
      var positives = ['grandfather'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use to refer to something that is allowed to violate a rule because it predates the rule. Instead, use an adjective like *legacy* or *exempt* or a verb like *made an exception.*",
  },
  grandfather: {
    fn: function (text) {
      var positives = ['grandfather'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use to refer to something that is allowed to violate a rule because it predates the rule. Instead, use an adjective like *legacy* or *exempt* or a verb like *made an exception.*",
  },
  hamburger: {
    fn: function (text) {
      var positives = ['hamburger'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead use the aria-label for that particular icon. For example, *Menu.*",
  },
  hamburger: {
    fn: function (text) {
      var positives = ['hamburger'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead use the aria-label for that particular icon. For example, *Menu.*",
  },
  health: {
    fn: function (text) {
      var positives = ['health'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Use with caution. When describing an action taken for a computer system, only use the term *health check* if this is the term that appears in the interface. Be certain to remove any ambiguity regarding whether the term refers to health in the medical sense.\n\nUse detailed, non-figurative language as much as possible, such as referring to a node *being responsive* instead of referring to a node *being healthy.*',
  },
  hit: {
    fn: function (text) {
      var positives = ['\\bhit\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use as a synonym for *click,* *press,* or *type.*",
  },
  housekeeping: {
    fn: function (text) {
      var positives = ['housekeeping', 'house keeping', 'house-keeping'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Use less figurative and more precise terms, such as *maintenance* and *cleanup.*",
  },
  hover: {
    fn: function (text) {
      var positives = ['\\bhover\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use. Instead use *hold the pointer over.*",
  },
  // ie: {
  //     fn: function (text) {
  //         var positives = ["\\bi\.e\.", "\\bie\\b"];
  //         var re = new RegExp(positives.join('|'), 'gi');
  //         var suggestions = [];
  //         while (match = re.exec(text)) {
  //             suggestions.push({
  //                 index: match.index,
  //                 offset: match[0].length,
  //             });
  //         }
  //         return suggestions;
  //     },
  //     explanation: `Don\'t use. Instead, use phrases like *that is*. Too many people mix up *e.g.* and *i.e.*`
  // },
  inOrderTo: {
    fn: function (text) {
      var positives = ['in order to'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: `If at all possible, don\'t use *in order to*; instead, use *to*. Very occasionally, *in order to* does clarify meaning or make something easier to read.`,
  },
  ip: {
    fn: function (text) {
      var positives = ['\\bIP\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: `*IP* alone is an abbreviation for *intellectual property*. If you mean an IP address, write *IP address*.`,
  },
  keyPair: {
    fn: function (text) {
      var positives = ['key pair'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: `A pair of keys, such as a public key and a private key. Contrast with *key-value pair*, which refers to a pairing that specifies a value for a variable (as in configuration files).`,
  },
  keyPair: {
    fn: function (text) {
      var positives = ['key pair'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: `A pair of keys, such as a public key and a private key. Contrast with *key-value pair*, which refers to a pairing that specifies a value for a variable (as in configuration files).`,
  },
  keyValuePair: {
    fn: function (text) {
      var positives = ['key/value pair', 'key value pair'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: `Use *key-value pair* instead.`,
  },
  kill: {
    fn: function (text) {
      var positives = ['\\bkill'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: `Avoid when possible. Instead, use words like *stop*, *exit*, *cancel*, or *end*.`,
  },
  lame: {
    fn: function (text) {
      var positives = ['\\blame'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: `Don\'t use. Use precise, non-figurative language to refer to a deficiency in a component.`,
  },
  lets: {
    fn: function (text) {
      var positives = ["\\blet's"];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: `Don\'t use as a contraction of *let us* if at all possible.`,
  },
  leverage: {
    fn: function (text) {
      var positives = ['\\bleverage'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Avoid using if you mean *use*. If possible, use a more precise term. For example, *use*, *build on*, or *take advantage of*.',
  },
  lifecycle: {
    fn: function (text) {
      var positives = ['life cycle', 'life-cycle'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *lifecycle* instead.',
  },
  lifetime: {
    fn: function (text) {
      var positives = ['life time', 'life-time'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *lifetime* instead.',
  },
  login: {
    fn: function (text) {
      var positives = ['login', 'log-in'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "For the verb form, *sign in* is generally better, but if you're documenting a tool that uses the term *log in*, then use the term that the tool uses.",
  },
  login: {
    fn: function (text) {
      var positives = ['login', 'log-in'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "For the verb form, *sign in* is generally better, but if you're documenting a tool that uses the term *log in*, then use the term that the tool uses.",
  },
  markdown: {
    fn: function (text) {
      var positives = ['markdown'];
      var re = new RegExp(positives.join('|'), 'g');
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
      "Always capitalized, even when you're referring to a nonstandard version.",
  },
  markup: {
    fn: function (text) {
      var positives = ['mark-up'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "No hyphen. As a verb, it's two words.",
  },
  may: {
    fn: function (text) {
      var positives = ['\\bmay\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'In general, reserve for official policy or legal considerations. To convey *possibility*, use *might* instead. To convey *permission*, use *can* instead.',
  },
  na: {
    fn: function (text) {
      var positives = ['\\bna\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Use *N/A* instead. Spell out as *not available* or *not applicable* on first reference.',
  },
  nameserver: {
    fn: function (text) {
      var positives = ['name server'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *nameserver* instead.',
  },
  namespace: {
    fn: function (text) {
      var positives = ['name space'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *namespace* instead.',
  },
  native: {
    fn: function (text) {
      var positives = ['native'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Avoid using *native* to refer to people. When referring to software products, try to use a more precise term---for example, use *built-in* to describe a feature that's part of a product.\n\nThe term *native* isn't necessarily clear---for example, *cloud-native* could mean that something was written for the cloud, or that it's built in to a cloud platform, or that it currently exists in a cloud platform.",
  },
  neither: {
    fn: function (text) {
      var positives = ['neither\\s\\w\\sor'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Say *neither A nor B*, not *neither A or B*.',
  },
  oauth: {
    fn: function (text) {
      var positives = ['OAuth 2', 'OAuth2', 'Oauth'];
      var re = new RegExp(positives.join('|'), 'g');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *OAuth 2.0* instead.',
  },
  ok: {
    fn: function (text) {
      var positives = ['\\bok\\b', '\\bOkay\\b'];
      var re = new RegExp(positives.join('|'), 'g');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *OK* or *okay* instead.',
  },
  once: {
    fn: function (text) {
      var positives = ['\\bonce\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'If you mean *after*, then use *after* instead of *once*.',
  },
  once: {
    fn: function (text) {
      var positives = ['\\bonce\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'If you mean *after*, then use *after* instead of *once*.',
  },
  openSource: {
    fn: function (text) {
      var positives = ['open-source'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *open source* instead.',
  },
  path: {
    fn: function (text) {
      var positives = ['filepath', 'file path', 'pathname', 'path name'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Use *path* instead. Avoid using *filepath*, *file path*, *pathname*, or *path name* if possible.',
  },
  please: {
    fn: function (text) {
      var positives = ['\\bplease\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use *please* in the normal course of explaining how to use a product, even if you're explaining a difficult task. Also don't use the phrase *please note*.\n\nUse *please* only when you're asking for permission or forgiveness---for example, when what you're asking for benefits us, inconveniences a reader, or suggests a potential issue with a product.",
  },
  predefined: {
    fn: function (text) {
      var positives = ['pre-defined'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *predefined* instead.',
  },
  precondition: {
    fn: function (text) {
      var positives = ['pre-condition'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Use *precondition* instead.',
  },
  pros: {
    fn: function (text) {
      var positives = ['\\bpros\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, use something else, such as *advantages*.",
  },
  quick: {
    fn: function (text) {
      var positives = ['quick'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'What might be quick for you might not be quick for others. Try eliminating this word from the sentence because usually the same meaning can be conveyed without it.',
  },
  quota: {
    fn: function (text) {
      var positives = ['quota'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'In API contexts, often refers to API usage limits. Where possible, best to use a more specific term than *quota*, such as *usage limit*; the word *quota* means many different things to many different people.',
  },
  regex: {
    fn: function (text) {
      var positives = ['regex'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use. Instead, use *regular expression*.",
  },
  repo: {
    fn: function (text) {
      var positives = ['repo\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use. Instead, use *repository*.",
  },
  representationalStateTransfer: {
    fn: function (text) {
      var positives = ['Representational State Transfer'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. To people unfamiliar with REST, this acronym expansion is meaningless; it's better to refer to it as REST and not bother trying to explain what it theoretically stands for.",
  },
  saas: {
    fn: function (text) {
      var positives = ['\\bsaas\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'Write out on first mention: *software as a service (SaaS)*.',
  },
  scale: {
    fn: function (text) {
      var positives = ['\\bscale\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use *scale* alone to say that something is large or increasing. Include supporting words to indicate magnitude or direction of change in magnitude, whether scaling up or down, such as when you change a machine type to add or remove CPUs or RAM, or scaling out or in, such as adding or removing instances from a group.",
  },
  should: {
    fn: function (text) {
      var positives = ['should'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Generally avoid. Because *should* is ambiguous by definition, it can be problematic. For example, if you're telling the reader what to do, *should* implies that the action is recommended but optional, leaving the reader unsure about what to do. Clarify what you mean. Determine if an action is *required* versus *optional*, an outcome is *expected* versus *possible*, or a state is *actual* versus *recommended*.",
  },
  signInTo: {
    fn: function (text) {
      var positives = ['sign into'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use. Instead, use *sign in to*.",
  },
  signout: {
    fn: function (text) {
      var positives = ['signout'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'sign-out (noun or adjective), sign out (verb); not *log out* or *signout*',
  },
  since: {
    fn: function (text) {
      var positives = ['\\bsince\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'If you mean *because*, then use *because* instead of *since*. *Since* is ambiguous; it can refer to the passage of time. *Because* refers to causation or the reason for something.',
  },
  singlemost: {
    fn: function (text) {
      var positives = ['singlemost'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: 'single most; not *singlemost*',
  },
  slave: {
    fn: function (text) {
      var positives = ['\\bslave\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, use alternative terms appropriate to your domain, such as *worker* or *replica*. If you are replacing the terms *master* and *slave* together, then consider such combinations as *primary*/*secondary*, *original*/*replica*, *controller*/*worker*, *initiator*/*responder*, *mixer*/*leaf*, *aggregator*/*collector*, *publisher*/*subscriber*, *leader*/*follower*, and *active*/*standby*.",
  },
  smartphone: {
    fn: function (text) {
      var positives = ['smartphone'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, use [*mobile phone*](https://developers.google.com/style/word-list#mobile) or *phone*.",
  },
  spinUp: {
    fn: function (text) {
      var positives = ['spin up'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "As in *spin up an instance*. Avoid using *spin up* unless you're referring to a hard disk; instead, use a less colloquial term like *create* or *start*.",
  },
  stylesheet: {
    fn: function (text) {
      var positives = ['stylesheet'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Unless used in code, use *style sheet*; not *stylesheet*. This is the official spelling, per the World Wide Web Consortium (W3C).',
  },
  stylesheet: {
    fn: function (text) {
      var positives = ['stylesheet'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      'Unless used in code, use *style sheet*; not *stylesheet*. This is the official spelling, per the World Wide Web Consortium (W3C).',
  },
  textbox: {
    fn: function (text) {
      var positives = ['textbox', 'text box'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, use *box*. For more information, see [Text box](https://developers.google.com/style/ui-elements#term-textbox).",
  },
  textbox: {
    fn: function (text) {
      var positives = ['textbox', 'text box'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, use *box*. For more information, see [Text box](https://developers.google.com/style/ui-elements#term-textbox).",
  },
  uncheck: {
    fn: function (text) {
      var positives = ['uncheck'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use to refer to clearing a check mark from a checkbox. Instead, use *clear*.",
  },
  unselect: {
    fn: function (text) {
      var positives = ['unselect'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, use *clear* for checkboxes, and *deselect* for other UI elements.",
  },
  unarchive: {
    fn: function (text) {
      var positives = ['unarchive', 'uncompress', 'unzip'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use. Instead, use *extract*.",
  },
  url: {
    fn: function (text) {
      var positives = ['\\burl'];
      var re = new RegExp(positives.join('|'), 'g');
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
      'All caps. Plural is *URLs*.\n\nWrite *a URL* rather than *an URL*, because the most common pronunciation starts with a consonant sound.',
  },
  username: {
    fn: function (text) {
      var positives = ['user name'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: '*username*; not *user name*',
  },
  utilize: {
    fn: function (text) {
      var positives = ['utilize', 'utilization'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Use with caution. Don't use *utilize* when you mean *use*. It's OK to use *utilize* or *utilization* when referring to the quantity of a resource being used.",
  },
  via: {
    fn: function (text) {
      var positives = ['\\bvia\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use.",
  },
  viceVersa: {
    fn: function (text) {
      var positives = ['vice versa'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. Instead, use a phrase like *the other way around*, *conversely*, or *otherwise*. In some contexts, vice versa is unclear or imprecise because in a complex sentence it's hard to know which two things are swapped with each other. In such cases, make it explicitly clear what two things are swapped.",
  },
  voila: {
    fn: function (text) {
      var positives = ['voila'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use.",
  },
  vs: {
    fn: function (text) {
      var positives = ['\\bvs'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use *vs.* as an abbreviation for *versus*; instead, use the unabbreviated *versus*.",
  },
  walkthrough: {
    fn: function (text) {
      var positives = ['walk-through'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: '*walkthrough*; not *walk-through*',
  },
  webpage: {
    fn: function (text) {
      var positives = ['webpage'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      '*web page*; not *webpage*. But where possible, avoid both by using *page*.',
  },
  webpage: {
    fn: function (text) {
      var positives = ['webpage'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      '*web page*; not *webpage*. But where possible, avoid both by using *page*.',
  },
  website: {
    fn: function (text) {
      var positives = ['web site'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: '*website*; not *web site*',
  },
  whitelist: {
    fn: function (text) {
      var positives = ['whitelist', 'white list', 'white-list'];
      var re = new RegExp(positives.join('|'), 'gi');
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
      "Don't use. See [blacklist](https://developers.google.com/style/word-list#blacklist).",
  },
  whitespace: {
    fn: function (text) {
      var positives = ['white space'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: '*whitespace*; not *white space*',
  },
  // will: {
  //   fn: function (text) {
  //     var positives = ['\\bwill\\b', 'would'];
  //     var re = new RegExp(positives.join('|'), 'gi');
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
  //     'Avoid. Applies equally to its past tense, *would*. See also [Present tense](https://developers.google.com/style/tense) and [Documenting future features](https://developers.google.com/style/future).',
  // },
  wifi: {
    fn: function (text) {
      var positives = ['wifi', 'WiFi'];
      var re = new RegExp(positives.join('|'), 'g');
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
      '*Wi-Fi*; not *wifi* or *WiFi*. When possible, instead use *wireless*.',
  },
  wildcard: {
    fn: function (text) {
      var positives = ['wild card'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: '*wildcard*; not *wild card*',
  },
  wish: {
    fn: function (text) {
      var positives = ['\\bwish\\b'];
      var re = new RegExp(positives.join('|'), 'gi');
      var suggestions = [];
      while ((match = re.exec(text))) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
        });
      }
      return suggestions;
    },
    explanation: "Don't use. Instead, use a word like *want* or *need*.",
  },
  // with: {
  //     fn: function (text) {
  //         var positives = ["\\bwith\\b"];
  //         var re = new RegExp(positives.join('|'), 'gi');
  //         var suggestions = [];
  //         while (match = re.exec(text)) {
  //             suggestions.push({
  //                 index: match.index,
  //                 offset: match[0].length,
  //             });
  //         }
  //         return suggestions;
  //     },
  //     explanation: 'Don\'t use *with* when expressing ownership:\n**Recommended:** A handset that has 2 GB of RAM.\n**Not recommended:** A handset with 2 GB of RAM.\n\nDon\'t use *with* when expressing use:\n**Recommended:** Use the debugging tool to debug.\n**Not recommended:** Debug this tool with the debugging tool.'
  // },
};
