const backendUrl = process.env.REACT_APP_STAGING_BACKEND_URL;

export const LoginAxios = async ({ id, password }) => {
  await axios
    .post(`${backendUrl}/authentication/login`, {
      id: id,
      password: password,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
      return response;
    });
};

export const UpdateAxios = async ({
  id,
  inputFirstName,
  inputLastName,
  email,
  AuthToken,
}) => {
  await axios
    .put(
      `${backendUrl}/user/updateUserDetails/${id}`,
      {
        id: id,
        firstName: inputFirstName,
        lastName: inputLastName,
        email: inputEmail,
      },
      { headers: { Authorization: AuthToken } }
    )
    .then(function (response) {
      if (response.data.httpStatus === "OK") {
        console.log(response.data.httpStatus);
      } else {
        Alert.alert("Login Failed", response.data.httpStatus);
        console.log(response.data.httpStatus);
      }
    })
    .catch(function (error) {
      console.log(id, inputFirstName, inputLastName, email);
      console.log(AuthToken);
      console.log(`${backendUrl}/user/updateUserDetails/${id}`);
      console.log(error);
      console.log(response.data.httpStatus);
    });
};

export const RegistrationAxios = async () => {
  await axios
    .post(
      `${backendUrl}/user/registration`,
      {
        userDto: {
          firstName: inputFirstName,
          lastName: inputLastName,
          email: inputEmail,
          password: inputPassword,
        },
        roleDto: {},
      },
      { headers: { Authorization: AuthToken } }
    )
    .then(function (response) {
      if (response.data.httpStatus === "CREATED") {
        console.log(response.data.httpStatus);
        console.log(response.data.object);
      } else {
        Alert.alert("Registration Failed", response.data.httpStatus);
        console.log(response.data.httpStatus);
      }
    })
    .catch(function (error) {
      console.log(inputPassword, inputFirstName, inputLastName, inputEmail);
      console.log(`${backendUrl}/user/registration`);
      console.log(AuthToken);
      console.log(error);
      console.log(response.data.httpStatus);
    });
};
