const util = {
  createPlaceholders: (arr) => {
    let placeholders = '';
    
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 && arr.length === 1) {
            placeholders += '?'
        } else if (i === 0) {
            placeholders += '?,'
        } else if (i === arr.length - 1) {
            placeholders += ' ?'
        } else {
            placeholders += ' ?,'
        }
    }
    return placeholders;
  }
}

module.exports = util;