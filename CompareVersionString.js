function compareVersion(version1, version2) {
  /** optimized */
  // iterate and compare through strings in place

  // indeces
  let index1 = 0; // 1
  let index2 = 0;

  // while loops
  while (index1 < version1.length || index2 < version2.length) {
    // get versions
    let v1 = ''; // '1'
    let v2 = ''; // '001'

    if (index1 >= version1.length) {
      v1 = '0';
    } else {
      while (index1 < version1.length && version1[index1] !== '.') {
        v1 += version1[index1];
        index1++;
      }
      index1++;
    }
    if (index2 >= version2.length) {
      v2 = '0';
    } else {
      while (index2 < version2.length && version2[index2] !== '.') {
        v2 += version2[index2];
        index2++;
      }
      index2++;
    }

    if (Number(v1) < Number(v2)) return -1;
    if (Number(v1) > Number(v2)) return 1;
  }

  return 0;

  // // edge cases: missing one or the other
  // if (version1 === version2) return 0;
  // if (!version1) return -1;
  // if (!version2) return 1;

  // // break up into array of nums
  // let v1List = version1.split('.').map(v => Number(v)) //[1,3,0,2]
  // let v2List = version2.split('.').map(v => Number(v)) // [1,3,0,2,0,1]

  // // compare
  // let length = v1List.length > v2List.length ? v1List.length : v2List.length; //6

  // for (let i = 0; i < length; i++) { // 0
  //     // vals for version if they exist or 0
  //     let val1 = v1List[i] || 0; // 0
  //     let val2 = v2List[i] || 0; // 1

  //     // if v1 version is > v2 version return 1
  //     if (val1 < val2) return -1;
  //     // if v1 version is < v2 version return -1
  //     if (val1 > val2) return 1;

  // }

  // // return 0
  // return 0;
}
