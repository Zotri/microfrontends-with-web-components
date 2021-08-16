<template>
<body>
  <div>
    <span>Employee Data</span>
  </div>
  <form @submit.prevent="submit" autocomplete="off">
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input id="firstName" type="text" v-model="form.firstName" placeholder="first name" required />
      <p v-if="!firstNameIsValid" class="error-message">The name field is required</p>

      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" v-model="form.lastName" placeholder="last name" required />
      <p v-if="!lastNameIsValid" class="error-message">The name field is required</p>

      <label for="email">Email Address</label>
      <input id="email" type="text" v-model="form.email" placeholder="email" required />
      <p v-if="!emailIsValid" class="error-message">The email field is required</p>
    </div>
    <div>
      <Button color="blue" label="submit" />
    </div>
  </form>
</body>
</template>

<script>
import Button from "./Button";

export default {
  name: "AddEmployee",
  props: {
    firstName: String,
    lastName: String,
    email: String
  },
  components: {
    Button
  },
  computed: {
    firstNameIsValid() {
      return !!this.form.firstName;
    },
    lastNameIsValid() {
      return !!this.form.lastName;
    },
    emailIsValid() {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      return emailRegex.test(this.form.email);
    }
  },
  methods: {
    async submit() {
      console.log("submit form is clicked");
      console.log("data", this.$data.form);

      const formIsValid =
        this.firstNameIsValid && this.lastNameIsValid && this.emailIsValid;

      if (formIsValid) {
        console.log("Form is Valid", this.$data.form);
        // POST request using fetch with async/await
        // const requestOptions = {
        // 	method: "POST",
        // 	body: JSON.stringify(this.form)
        // };
        // const response = await fetch(
        // 	"http://localhost:8088/api/employees/new-employee",
        // 	requestOptions
        // );
        // const data = await response.json();
        // console.log("data", data);
        // this.postId = data.id;

        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.$data.form)
        };
        await fetch(
          "http://localhost:8088/api/employees/new-employee",
          requestOptions
        )
          .then(response => response.json())
          .then(data => (this.postId = data.id));
        console.log("requestOptions", requestOptions);
      } else {
        console.log("Form is NOT Valid", this.form);
      }
    }
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
  }
};
</script>
<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
span {
  padding-bottom: 5px;
  font-size: 23px;
  color: grey;
}
.error-message {
  color: red;
}
</style>
