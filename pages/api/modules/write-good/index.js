import { lintRule } from 'unified-lint-rule';
import { visit } from 'unist-util-visit';
import('nlcst-to-string');
import { writeGood } from 'remark-lint-write-good';

function astProcessor(ast, file, options) {
  console.log('🚀 ~ file: index.js ~ line 7 ~ astProcessor ~ file', file);
  //   console.log('🚀 ~ file: index.js ~ line 7 ~ astProcessor ~ ast', ast);

  visit(ast, ['SentenceNode'], (node, _, parent) => {
    // if (node.children.some(e => e.type === 'SourceNode')) {
    //     return visit.SKIP;
    // }
    if (node.type === 'blockquote') {
      return visit.SKIP;
    }
    let text = '';
    try {
      let pretext = toString(node);
      // removes portions of strings that are between two backticks
      text = pretext.replace(/`(?:[^`])*`/g, '');
    } catch (e) {
      return;
    }

    const newLines = findNewlines(text);
    writeGood(text, options).forEach((suggestion) => {
      let startLineOffset = 0;
      let endLineOffset = 0;
      let lastLinebreakBeforEnd = 0;
      let lastLineBreakBeforeStart = 0;
      newLines.forEach((idx) => {
        if (idx < suggestion.index) {
          startLineOffset++;
          lastLineBreakBeforeStart = idx;
        }
        if (idx < suggestion.offset + suggestion.index) {
          endLineOffset++;
          lastLinebreakBeforEnd = idx;
        }
      });
      const startLine = node.position.start.line + startLineOffset;
      const endLine = node.position.start.line + endLineOffset;
      const startColumn = suggestion.index - lastLineBreakBeforeStart;
      const endColumn =
        suggestion.index + suggestion.offset - lastLinebreakBeforEnd;
      const pos = {
        start: {
          line: startLine,
          column: startColumn + 1 - startLineOffset,
        },
        end: {
          line: endLine,
          column: endColumn + 1 - endLineOffset,
        },
      };
      file.message(suggestion.reason, pos);
    });
  });
}

const remarkWriteGood = lintRule(
  'remark-lint:remark-lint-write-good',
  astProcessor
);
// module.exports.astProcessor = astProcessor;

function findNewlines(str) {
  const indices = [];
  let prev = 0;
  while (true) {
    const idx = str.indexOf('\n');
    if (idx === -1) {
      break;
    }
    indices.push(prev + idx);
    prev += idx;
    str = str.substring(idx + 1);
  }
  return indices;
}

export default remarkWriteGood;
