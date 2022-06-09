
export const filterArray = (array, searchTerm) => {
    return array.filter(item => item.match(searchTerm))
}

/**
 * 
 * @param {object[]} array object array
 * @param {string} key object's attribute 
 * @param {string|RegExp} searchTerm 
 * @returns items in array where its key matches the search term
 */
export const filterObjectArrayWithStringMatch = (array, key, searchTerm) => {
    return array.filter(item => item[key].match(searchTerm));
}