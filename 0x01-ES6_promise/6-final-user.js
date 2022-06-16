import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.allSettled([user, photo]).then((results) => {
    const newresults = results;
    newresults[1].value = `Error: ${newresults[1].reason.message}`;
    delete newresults[1].reason;
    // console.log(newresults)
    return newresults;
  });
}
