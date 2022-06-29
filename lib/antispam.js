//════════════════════════════//
//Credit - Xeon
//════════════════════════════//

// Message Filter / Message Cooldowns
const usedCommandRecently = new Set();

const isFiltered = (from) => {
    return !!usedCommandRecently.has(from);
};

const addFilter = (from) => {
    usedCommandRecently.add(from);
    setTimeout(() => {
        return usedCommandRecently.delete(from);
    }, 1000);// 1.0 sec is delay before processing next command;
};
module.exports = {
    msgFilter: {
        isFiltered,
        addFilter
    }};
