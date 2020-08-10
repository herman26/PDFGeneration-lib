const fs = require('fs');

const packageName = require('../package.json').name;

function getPackagePath() {
  console.log(packageName);
  let PACKAGE_PATH = `node_modules/${packageName}/`;
  if (!fs.existsSync(PACKAGE_PATH)) {
    PACKAGE_PATH = '';
  }
  return PACKAGE_PATH;
}

module.exports = Object.freeze({
  PACKAGE_PATH: getPackagePath(),
  // Where the page starts
  TOP_OF_PAGE_Y: 80,

  // Normal Information
  INCREMENT_MAIN_Y: 18,

  // Usually meta data of sections
  INCREMENT_SUB_Y: 14,

  // Spacing between text and the line below it
  INCREMENT_UNDERLINE: 15,

  HEADER_FONT_SIZE: 16,
  NORMAL_FONT_SIZE: 10,

  PDFDocumentLineType: {
    DEFAULT_LINE: 0,
    HEADER_LINE: 1,
    KEY_VALUE_LINE: 2,
    EMPTY_LINE: 3,
    ADDRESS_LINE: 4,
    COLUMN_INFO: 5,
    META_INFO: 6,
    SINGLE_COLUMN: 7,
    DOUBLE_COLUMN: 8,
    END_LINE: 9,
    GRID: 10,
  },

  // Colors used in Footer and Disclaimer are not currently covered here
  PDFColors: {
    NORMAL_COLOR: '#888888',
    INDICATIVE_COLOR: 'black',
    TEXT_IN_NORMAL_COLOR: 'white',
  },

  PDFDocumentLineRules: { // Future Idea
    ALWAYS_NEW_PAGE: 0,
  },

  PDF_TEXT: {
    REPORT_AUTHOR: 'ThisIsMe (Pty) Ltd',
    REPORT_HEADERS: ['Search Parameters:', 'Service Response:'],
  },
  textValueObj: (text, value, lineType) => {
    return {
      text: text,
      value: value,
      lineType: lineType,
    };
  },
  getPDFContentTemplate: (requestTimestamp, event, dataSource, errMsg, newPageHeaders) => {
    return {
      requestTimestamp: requestTimestamp,
      error: errMsg,
      reportGeneratedFor: `${event.requester.client} @ ${event.requester.company}`,
      dataSource: dataSource,
      searchParams: {},
      dataFound: {},
      requestId: event.request_id,
      newPageHeaders: newPageHeaders,
    };
  },
});