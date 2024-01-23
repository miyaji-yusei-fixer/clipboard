<template>
  <v-row>
    <v-col>
      <v-textarea
        v-for="(value, index) in list"
        :key="index"
        outlined
        clearable
        append-icon="mdi-content-copy"
        :value="value.context"
        @input="edit($event, value.key)"
        @click:append="copyClip(value.context)"
        @blur="focusoutEvent(value.context, value.key)"
      />
      <v-btn light @click="create">新しいメモ</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  data: function () {
    return {
      copied: false,
    }
  },
  computed: {
    ...mapGetters({
      list: 'clips/list',
    }),
  },
  watch: {
    copied(val) {
      if (!val) return
      setTimeout(() => (this.copied = false), 2000)
    },
  },
  methods: {
    ...mapActions({
      createClip: 'clips/createClip',
      editClip: 'clips/editClip',
      deleteClip: 'clips/deleteClip',
    }),
    async create() {
      await this.createClip()
    },
    edit(event, key) {
      this.editClip({ event, key })
    },
    focusoutEvent(context, key) {
      if (!context) {
        this.deleteClip(key)
      }
    },
    copyClip(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          this.copied = true
        })
        .catch(() => {
          window.alert('コピーできませんでした')
        })
    },
  },
}
</script>
