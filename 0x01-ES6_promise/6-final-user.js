import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  return Promise.allSettled([user, photo]).then((results) => {
    const newresults = results;
    newresults[1].value = newresults[1].reason;
    delete newresults[1].reason;
    return newresults;
  });
}
