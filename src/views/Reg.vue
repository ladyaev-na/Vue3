<template>
  <form method="post" @submit.prevent="registr">
    <h2>Регистрация</h2>
    <div class="mb-3">
      <label for="email" class="form-label">Адрес электронной почты</label>
      <input type="email" class="form-control" id="email" v-model="email" required>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="password" v-model="password" required>
    </div>
    <div class="mb-3">
      <label for="first_name" class="form-label">Имя пользователя</label>
      <input type="text" class="form-control" id="first_name" v-model="first_name" required>
    </div>
    <div class="mb-3">
      <label for="last_name" class="form-label">Фамилия пользователя</label>
      <input type="text" class="form-control" id="last_name" v-model="last_name" required>
    </div>
    <div class="button-group">
      <button type="submit" class="btn btn-success m-1">Зарегестрироваться</button>
      <router-link to="/login" class="btn btn-info">Назад</router-link>
    </div>
  </form>
  <div v-if="message">{{ message }}</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Reg",
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      errorMessage: '',
    };
  },
  methods: {
    async registr() {
      try {
        const url = 'https://file-hosting.ru/api-file/registration';
        const response = await axios.post(url, {
          email: this.email,
          password: this.password,
          first_name: this.firstName,
          last_name: this.lastName,
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (response.status === 201 && response.data.token) {
          localStorage.setItem('token', response.data.token);
          this.$router.push('/user-files');
        } else {
          console.error('Registration error: Unable to obtain token.');
        }
      } catch (error) {
        this.errorMessage = 'Registration error. Please try again.';
        console.error('Registration error:', error);
      }
    }
  },
};
</script>