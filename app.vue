<script setup lang="ts">
  const id = ref('')
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  
  const submit = async () => {
    try {
      const { data } = await $fetch('/api/users/register', {
        method: 'POST',
        body: {
          name: name.value,
          email: email.value,
          password: password.value,
          confirmPassword: confirmPassword.value
        }
      })

      id.value = data.id
    } catch (error) {
      console.log(error)
    }
  }

  const update = async () => {
    try {
      name.value = `${name.value} - Update`

      await $fetch(`/api/users/${id.value}`, {
        method: 'PUT',
        headers: {
          Authorization: 'xyz'
        },
        body: {
          name: name.value,
          email: email.value
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  const remove = async () => {
    try {
      await $fetch(`/api/users/${id.value}`, {
        method: 'DELETE',
        headers: {
          Authorization: 'xyz'
        },
      })

      id.value = ''
      name.value = ''
      email.value = ''
      password.value = ''
      confirmPassword.value = ''

    } catch(error) {
      console.log(error)
    }
  }

</script>

<template>
  <div>
    <form @submit.prevent="submit">
      <input type="text" v-model="name" />
      <input type="email" v-model="email" />
      <input type="password" v-model="password" />
      <input type="password" v-model="confirmPassword" />
      <button type="submit">Save</button>
    </form>

    <div>
      <button type="button" @click="update">Update</button>
      <button type="button" @click="remove">Remove</button>
    </div>
  </div>
</template>
