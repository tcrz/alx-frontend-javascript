import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  let r = []
 return Promise.allSettled([user, photo]).then((results) => {
    return results
  });
  console.log(r)
}
