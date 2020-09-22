<template>
  <div class="form-wrapper">
    <p>※設定はこのデバイスのみに保存されます。</p>
    <v-form v-model="valid">
      <h3>アプリ設定</h3>
      <!-- API URL -->
      <v-text-field
        label="API URL"
        v-model="settings.apiUrl"
        :counter="150"
        :rules="[stringRule]"
      />
      <!-- Auth Token -->
      <v-text-field
        label="Auth Token"
        v-model="settings.authToken"
        :counter="150"
        :rules="[stringRule]"
      />
      <v-row class="mt-4">
        <v-spacer/>
        <v-btn color="primary" :disabled="!valid" @click="onClickSave">保存</v-btn>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Settings',

  data () {

    return {
      /** 入力したデータが有効かどうか */
      valid: false,
      /** 設定 */
      settings: {
        apiUrl: '',
        authToken: ''
      }
    }
  },

  methods: {
    onClickSave () {
      // あとで実装
    }
  }
}
</script>

<style>
.form-wrapper {
  max-width: 500px;
  margin: auto;
}
</style>
