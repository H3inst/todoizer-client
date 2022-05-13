const { nanoid } = require('nanoid');

function generateId(prefix = 'Z') {
  if (prefix.length > 1) {
    console.error('ID Prefix is over one character.');
    return;
  }
  const prefixToUpperCase = prefix.toUpperCase();
  return `${prefixToUpperCase}_${nanoid(13)}`;
}

module.exports = generateId;