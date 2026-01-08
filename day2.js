const allIDs =
  "3335355312-3335478020,62597156-62638027,94888325-95016472,4653-6357,54-79,1-19,314-423,472-650,217886-298699,58843645-58909745,2799-3721,150748-178674,9084373-9176707,1744-2691,17039821-17193560,2140045-2264792,743-1030,6666577818-6666739950,22946-32222,58933-81008,714665437-714803123,9972438-10023331,120068-142180,101-120,726684-913526,7575737649-7575766026,8200-11903,81-96,540949-687222,35704-54213,991404-1009392,335082-425865,196-268,3278941-3383621,915593-991111,32-47,431725-452205";
// EXAMPLE DATA/// "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";

const allIDsArr = allIDs.split(",");
let invalidIDsSum = 0;
/*

<<< ~ DAY TWO, PART ONE ~ >>>

function cleaning(range) {
  [numFrom, numTo] = range.split("-");
  //   let numFrom = arr[0];
  //   let numTo = Number(arr[1]);
  let i = Number(numFrom);

  while (i <= numTo) {
    let currentNumberStr = i.toString();
    let len = currentNumberStr.length; // to check and keep the length of the number

    if (len % 2 === 0) {
      checkPattern(currentNumberStr, len);
      i++;
    } else {
      i++;
    }
  }
}

function checkPattern(str, len) {
  let cut = len / 2;
  let firstHalf = str.slice(0, cut);
  let secondHalf = str.slice(cut);
  if (firstHalf === secondHalf) {
    invalidIDsSum += Number(str);
  }
}

allIDsArr.forEach((val) => cleaning(val));
console.log(`adding total ${invalidIDsSum} `);
// result 12599655151
*/

function filter(range) {
  [numFrom, numTo] = range.split("-");
  let i = Number(numFrom);

  while (i <= numTo) {
    let currentNumberStr = i.toString();
    let len = currentNumberStr.length;

    let oneCharacterArray = currentNumberStr.match(/.{1,1}/g);
    let areTheSame = oneCharacterArray.every(
      (val) => val === oneCharacterArray[0]
    );

    if (areTheSame && len > 1) {
      invalidIDsSum += i;
    } else {
      checkPatern(i, currentNumberStr, len);
    }

    i++;
  }
}

function checkPatern(i, currentNumberStr, len) {
  if (len > 3) {
    let threePartArray = currentNumberStr.match(/.{1,3}/g);
    let areTheSame = threePartArray.every((val) => val === threePartArray[0]);

    if (areTheSame) {
      invalidIDsSum += i;
    } else if (len > 2) {
      let twoPartArray = currentNumberStr.match(/.{1,2}/g);
      let areTheSame = twoPartArray.every((val) => val === twoPartArray[0]);
      if (areTheSame) {
        invalidIDsSum += i;
      } else {
        let cut = len / 2;
        let firstHalf = currentNumberStr.slice(0, cut);
        let secondHalf = currentNumberStr.slice(cut);
        if (firstHalf === secondHalf) {
          invalidIDsSum += i;
        }
      }
    }
  }
}

allIDsArr.forEach((val) => filter(val));
console.log(`adding total ${invalidIDsSum} `);
