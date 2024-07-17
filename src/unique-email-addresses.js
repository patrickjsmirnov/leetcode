/**
 * @param {string[]} emails
 * @return {number}
 */

const numUniqueEmails = function (emails) {
  const emailsSet = new Set();

  const clearEmail = (email) => {
    const [localName, domainName] = email.split("@");
    let clearedLocalName = "";

    for (let i = 0; i < localName.length; i++) {
      if (localName[i] === "+") break;
      if (localName[i] !== ".") {
        clearedLocalName += localName[i];
      }
    }

    return `${clearedLocalName}@${domainName}`;
  };

  for (let email of emails) {
    emailsSet.add(clearEmail(email));
  }

  return emailsSet.size;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
); // 2
console.log(
  numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
); // 3
