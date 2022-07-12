// For Union
const numsA4 = [1, 2, 2, 2, 7];
const numsB4 = [2, 2, 6, 6, 7];
const expected4 = [1, 2, 2, 2, 6, 6, 7];

const numsA5 = [1, 2, 2, 2, 7, 10, 15, 20];
const numsB5 = [2, 2, 6, 6, 7];
const expected5 = [1, 2, 2, 2, 6, 6, 7, 10, 15, 20];

/**
 * Combines two already sorted multiset arrays into an ordered multiset union
 * Venn Diagram Visualization (top):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA Both sets are sorted multisets
 *    (contain dupes).
 * @param {Array<number>} sortedB
 * @returns {Array<number>} An ordered multiset union of the given sets.
 *    The return should include dupes, but the amount of dupes for each int
 *    should be based on the max amount that dupe appears from one set,
 *    not the combined amount from both sets.
 */
function orderedMultisetUnion(sortedA, sortedB) {
    let expected = [];
    let i = 0; // pointer for sortedA
    let j = 0; // pointer for sortedB

    while(i < sortedA.length && j < sortedB.length){
        if(sortedA[i] < sortedB[j]){
            expected.push(sortedA[i])
            i++;
        } else if(sortedA[i] == sortedB[j]){
            expected.push(sortedA[i])
            i++;
            j++;
        } else {
            expected.push(sortedB[j])
            j++;
        }
    }
    while(i < sortedA.length){
        expected.push(sortedA[i])
        i++;
    }
    while(j < sortedB.length){
        expected.push(sortedB[j])
        j++;
    }
    return expected;
}

console.log(orderedMultisetUnion(numsA4, numsB4));
console.log(orderedMultisetUnion(numsA5, numsB5));