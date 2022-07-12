/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * https://www.researchgate.net/publication/332453167/figure/fig1/AS:748486492450816@1555464494152/A-Venn-diagram-of-unions-and-intersections-for-two-sets-A-and-B-and-their-complements.png
 */

// For Intersection
const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7]; //repeated: 2, 2, 7
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];


/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
 function orderedIntersection(sortedA, sortedB) {
    let expected = [];
    let pA = 0;
    let pB = 0;
    while (pA < sortedA.length && pB < sortedB.length) {
        //check if one is greater than other
        if(sortedA[pA] > sortedB[pB]){
        //increment the second pointer since it's smaller than sortedA[pA]
        pB++;
        //check the other is greater
        } else if(sortedA[pA] < sortedB[pB]){
        //increment other pointer here
        pA++;
        //they will be equal here
        } else{
          //check to ensure no dupes
          //push to expected
          //increment both pointers
            if(expected.length === 0 || expected[expected.length-1] !== sortedA[pA]){
            expected.push(sortedA[pA]);
            }
            pA++;
            pB++;
        }
    }
        return expected;
    }

    console.log(orderedIntersection(numsA1, numsB1));
    console.log(orderedIntersection(numsA2, numsB2));
    console.log(orderedIntersection(numsA3, numsB3));