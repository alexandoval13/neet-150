/**
 *
 * @param {*} versions
 * input: list of strings
 * output: sorted list of strings
 *
 */
function parseVersion(version, i) {
  let v = '';

  while (version[i] !== '.' && version[i] !== '-' && i < version.length) {
    v += version[i];
    i++;
  }

  if (version[i] === '.') {
    i++;
  } else if (version[i] === '-') {
    v = version.substring(i + 1);
  }

  return { v, i };
}

// v1 = 1.0-alpha, 1.0-beta, 1.0
function sortVersionStrings(versions) {
  // ["1.0.2", "1.0", "2.4", "2.1"]
  // edge case: empty list
  if (versions.length === 0) return [];

  // versions.sort((a, b) a - b)
  versions.sort((versionA, versionB) => {
    let i = 0;
    let j = 0;

    while (i < versionA.length ?? j < versionB.length) {
      let { v1, i: updatedI } = parseVersion(versionA, i);
      let { v2, i: updatedJ } = parseVersion(versionB, j);

      i = updatedI;
      j = updatedJ;

      if (!v1.length) v1 = 0;
      if (!v2.length) v2 = 0;

      // '' 'alpha'
      // '01' 'alpha'
      // 'alpha' 'beta'

      // return a - b;
      if (Number(v1) > Number(v2)) return 1;
      if (Number(v1) < Number(v2)) return -1;
    }

    return 0;
  });
}
