/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // boyer moore with bad character table
    // good suffix is just too complex, jesus

    const haylen = haystack.length;
    const needlen = needle.length;

    // 'a' = 0, 'b' = 1 ... etc
    const getCharCodeOffset = (ch) => {
        return ch.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    // returns the bad character table
    const createBadCharacterTable = () => {
        const alphabet_size = 26;
        const badCharTable = new Array(alphabet_size).fill(-1);

        for (let i = 0; i < needle.length; i++) {
            badCharTable[getCharCodeOffset(needle[i])] = i; // if repeated char will override with last occurence
        }

        return badCharTable;
    }

    const bct = createBadCharacterTable();

    // Convenience function
    const getBadCharShift = (ch, localMismatchIndex) => {
        const code = getCharCodeOffset(ch);
        // this math max operation is where the magic happens; the shift depends on the local mismatch (j)
        return bct[code] !== -1 ? Math.max(1, localMismatchIndex - bct[code]) : needlen;
    }

    let i = 0;
    while (i <= haylen - needlen) {
        let j = needlen - 1;

        while (j >= 0 && haystack[i + j] === needle[j]) {
            j--;
        }

        if (j < 0)
            return i;
        else
            i += getBadCharShift(haystack[i + j], j);
    }

    return -1;
};
