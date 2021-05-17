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
            <input type="text" class="form-control" id="name" placeholder="">
          </div>
          <button type="submit" class="btn btn-primary" id="btnAjoutQuartier">Enregistrer</button>
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
  mounted () {
    const btnAjouter = document.querySelector('#btnAjoutQuartier')
    btnAjouter.addEventListener('click', () => {
      const inputValue = document.querySelector('#name').value
      if (inputValue !== '') {
        this.$firebase.firestore().collection('quartiers').add({
          name: inputValue
        }).then(reponse => {
          this.$router.push({name: 'quartiers'})
        }).catch(function (error) {
          console.log(error)
        })
      } else {
        alert('Veuillez renseigner le champ nom du quartier')
      }
    })
  },
  methods: {
    handleSubmit () {
      // update form
    }
  }
}
</script>
