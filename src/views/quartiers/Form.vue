<template>
  <div>
    <div class="card">
      <div class="card-title">
        <h4>Ajouter un quartier</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label>Nom</label>
            <input type="text" class="form-control" v-model="form.name" placeholder="">
          </div>
          <button type="submit" class="btn btn-primary">Enregistrer</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'quartierForm',
  data () {
    return {
      isLoading: true,
      form: {
        name: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      // update form
    }
  }
}
</script>
