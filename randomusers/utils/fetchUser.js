

const URL = 'https://randomuser.me/api/';

const fetchuserdata = async () => {

  let res = await fetch(URL);

  let data = await res.json();

  const { phone, email, name: { first, last }, picture: { large: image }, dob: { age }, location, login: { password } } = data.results[0];

  const { street: { number, name } } = location;

  // console.log(data.results[0]);


  return {
    phone, email, name: `${first} ${last}`, image, age, street: `${number} ${name}`, password
  }


}

export default fetchuserdata;