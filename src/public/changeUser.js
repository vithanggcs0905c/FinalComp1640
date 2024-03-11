function changeUser(_id) {
  console.log("da vafo day");
  var name = document.getElementById("name").value;
  var lastName = document.getElementById("lastName").value;
  var firstName = document.getElementById("firstName").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  axios
    .put(`/users/changeUser/${_id}`, {
      name,
      lastName,
      address,
      phone,
      firstName,
    })
    .then((data) => {
      console.log(data);
      return alert("Done");
    })
    .catch(function (error) {
      console.log(error);
      return alert("Can't change user");
    });
}