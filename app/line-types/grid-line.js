const constants = require('../constants');
const sectionTypeLogic = require('./base-logic');

module.exports = {
  generateLineThatIsGrid,
};

function generateLineThatIsGrid(doc, x, y, text, value, isDefinedHeader, incrementY, headerColor, getDocY) {
  const itemCountToFormRow = (Object.keys(value[0]).length + 1); // keys + END_LINE to go to next row
  const gridRowsWithoutHeader = ((value.length - 1)/itemCountToFormRow);
  const headerRow = isDefinedHeader ? 0 : 1;
  const docY = getDocY(doc, y, incrementY, gridRowsWithoutHeader + headerRow, true);
  doc = docY.doc;
  y = docY.y;

  doc = sectionTypeLogic.populateHeaderLine(doc, constants.PDFColors.INDICATIVE_COLOR, text, null, x, 180, y, isDefinedHeader);

  const gridHeaders = value[0];
  const columnWidth = {};
  const columnXStart = {};
  let index = 0;
  for (const gridHeader in gridHeaders) {
    if (Object.prototype.hasOwnProperty.call(gridHeaders, gridHeader)) {
      const header = gridHeaders[gridHeader];
      x = index === 0 ? x : x + (header.size + 100); // TODO: the + 100 can differ for size ranges perhaps
      columnXStart[gridHeader] = x;
      columnWidth[gridHeader] = (header.size + 100);
      doc.font('OpenSansSemiBold').fontSize(constants.NORMAL_FONT_SIZE).fillColor(headerColor)
          .text(header.name, columnXStart[gridHeader], y, {
            width: (header.size + 100),
            align: 'right',
          });
      index++;
    }
  }
  y += incrementY;

  for (let i = 1; value.length > i; i++) {
    const gridObject = value[i];
    if (gridObject.lineType === constants.PDFDocumentLineType.END_LINE) {
      y += constants.INCREMENT_SUB_Y;
    }
    doc.font('OpenSansLight').fontSize(constants.NORMAL_FONT_SIZE).fillColor(headerColor)
        .text(gridObject.value, columnXStart[gridObject['column']], y, {
          width: columnWidth[gridObject['column']],
          align: 'right',
        });
  }
  y += incrementY;
  return sectionTypeLogic.docYResponse(doc, y);
}
