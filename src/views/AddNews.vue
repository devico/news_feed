<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Создание новости</span>
      <div class="input-field">
        <input 
          id="title" 
          type="text"
          v-model.trim="title"
          :class="{invalid: ($v.title.$dirty && !$v.title.required) || ($v.title.$dirty && !$v.title.minLength)}"
        />
        <label for="title">Заголовок</label>
        <small
          class="helper-text invalid"
          v-if="$v.title.$dirty && !$v.title.required"
        >Поле заголовка не должно быть пустым
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.title.$dirty && !$v.title.minLength"
        >Длина заголовка должна быть больше 10 символов
        </small>
      </div>
      <div class="input-field">
        <input 
          id="category" 
          type="text"
          v-model.trim="category"
          :class="{invalid: ($v.category.$dirty && !$v.category.required) || ($v.category.$dirty && !$v.category.minLength)}"
        />
        <label for="category">Категория</label>
        <small
          class="helper-text invalid"
          v-if="$v.category.$dirty && !$v.category.required"
        >Поле категории не должно быть пустым
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.category.$dirty && !$v.category.minLength"
        >Длина категории должна быть больше 5 символов
        </small>
      </div>
      <div class="input-field">
        <textarea 
          id="message"
          class="materialize-textarea"
          v-model="message"
          :class="{invalid: ($v.message.$dirty && !$v.message.required) || ($v.message.$dirty && !$v.message.minLength)}"
        ></textarea>
        <label for="message">Текст новости</label>
        <small
          class="helper-text invalid"
          v-if="$v.message.$dirty && !$v.message.required"
        >Поле сообщения не должно быть пустым
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.message.$dirty && !$v.message.minLength"
        >Длина сообщения должна быть больше 20 символов
        </small>
      </div>
    </div>
    <div class="card-action">
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Создать
        <i class="material-icons right">send</i>
      </button>
    </div>
  </form>
  </div>
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators'
import { mapActions } from "vuex";
export default {
  name: "addNews",
  data: () => ({
    title: '',
    category: '',
    message: ''
  }),
  validations: {
    title: {required, minLength: minLength(10)},
    category: {required, minLength: minLength(5)},
    message: {required, minLength: minLength(20)}
  },
  methods: {
    ...mapActions(["createNews"]),
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      if (this.title) {
        this.createNews({
          id: Date.now(), 
          title: this.title, 
          category: this.category, 
          message: this.message
        }) 

        // console.log('News: ', oneNews)
      }
      this.$router.push("/");
    },
  },
};
</script>