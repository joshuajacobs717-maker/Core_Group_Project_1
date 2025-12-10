<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
const password = ref("");

const errorMessage = ref("");

const validUser = {
  username: "Group 8",
  password: "4ofus"
};

function login() {
  if (username.value === validUser.username && password.value === validUser.password) {
    errorMessage.value = "";
    router.push("/home");
  } else {
    errorMessage.value = "Invalid username or password!";
  }
}
</script>

<template>
  <div class="login-page">
    <div id="greeting">
    <h1>Welcome</h1>
    <h1>Back!</h1>
    </div>
    <div class="login-box">

      <h1>HR System Login</h1>

      <form @submit.prevent="login">
        <div class="input-group">
          <label>Username</label>
          <input v-model="username" type="text" required />
        </div>

        <div class="input-group">
          <label>Password</label>
          <input v-model="password" type="password" required />
        </div>

        <p class="error" v-if="errorMessage">{{ errorMessage }}</p>

        <button type="submit" class="login-btn">Login</button>
      </form>

    </div>

  </div>
</template>

<style scoped>
#greeting{
  margin-right: 100px;
  animation: phase 0.8s ease-in;
}


.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #EBD5AB;
  height: 100vh;
}

.login-box {
  background: white;
  width: 350px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  align-items: center;
  animation: phase 0.8s ease-in;
}

@keyframes phase{ 
  0%{opacity: 0;}
  50%{opacity: 0.5;}
  100%{opacity: 1;}
}

h1 {
  text-align: center;
  color: #628141;
  margin-bottom: 25px;
}

.input-group {
  margin-bottom: 18px;
}

label {
  font-weight: bold;
  color: #628141;
}

input {
  width: 100%;
  padding: 10px;
  border: 2px solid #8BAE66;
  border-radius: 8px;
  outline: none;
  margin-top: 5px;
}

input:focus {
  border-color: #628141;
}

.error {
  color: red;
  margin-bottom: 10px;
}

.login-btn {
  width: 100%;
  padding: 12px;
  background-color: #628141;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #8BAE66;
}
</style>

