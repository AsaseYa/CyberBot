module.exports.usernameWithoutTag = (str) => {
     const n = str.indexOf('#');
     return str.substring(0, n);
};