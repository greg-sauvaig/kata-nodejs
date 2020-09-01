/**
 * validator for real isbn code
 * @param  {string} isbn the identifier of the book or magazine
 * @return {boolean} is valid
 */
// eslint-disable-next-line
const validateIsbn = isbn => isbn.match('^(?:ISBN(?:-13)?:?\ )?(?=[0-9]{13}$|(?=(?:[0-9]+[-\ ]){4})[-\ 0-9]{17}$)97[89][-\ ]?[0-9]{1,5}[-\ ]?[0-9]+[-\ ]?[0-9]+[-\ ]?[0-9]$') !== null;

/**
 * validator for the not real isbn code sutch as in the provided dataset
 * @param  {string} isbn the identifier of the book or magazine
 * @return {boolean} is valid
 */
const validateIsbnLikeInDataSet = (isbn) => isbn.match('^[0-9]{1,4}-[0-9]{1,4}-[0-9]{1,4}$') !== null;

/**
 * validator for the email
 * @param  {string} email
 * @return {boolean} is valid
 */
// eslint-disable-next-line
const validateEmail = email => email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/) !== null;

exports.validateIsbnLikeInDataSet = validateIsbnLikeInDataSet;
exports.validateIsbn = validateIsbn;
exports.validateEmail = validateEmail;
