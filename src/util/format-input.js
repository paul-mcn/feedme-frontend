/**
 * @param {string} searchTerm 
 * @returns string without special characters
 */
export const removeSpecialCharactersFromString = (searchTerm) => {
    // replace special characters with empty character
    return searchTerm.replace(/[~`!@#$%^&*()+={}[\];:'"<>.,\\?]/g, '')
}