<template>
  <div class="container">
    <h1>Bienvenu sur notre plateforme de transport</h1>

    <div class="row">
      <div class="col-span-6">
        <!-- <form action="" > -->
          <div class="mb-3">
            <label for="destination" class="form-label">Sélectionnez votre destination</label>
            <select name="destination" id="destination" class="form-control" v-model="destination" @change="handleSubmit" required>
              <option :value="null">Sélectionnez votre destination</option>
              <option :value="quartier.id" v-for="(quartier, index) in quartiers" :key="index">{{ showName(quartier) }}</option>
            </select>
          </div>
          <!-- <div class="mb-3">
            <button type="submit" class="btn btn-primary">Decouvrir</button>
          </div> -->
        <!-- </form> -->
      </div>

      <div class="col-span-6">
        <h2>Resultat de notre recherche</h2>
        <div>
          <ul>
            <li v-for="(transport, index) in transports" :key="index">{{ transport.data().nom_moyen_de_transport }} : {{ transport.data().tarif }} FCFA</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <button class="btn btn-primary" @click="$router.push({name: 'dashboard'})">Administrer la page</button> -->
  </div>
</template>
<script>
export default {
  name: 'homepage',
  data () {
    return {
      quartiers: [],
      destination: null,
      transports: []
    }
  },
  mounted () {
    this.loadDatas()
  },
  methods: {
    async loadDatas () {
      const response = await this.$firebase.firestore().collection('quartiers').get()
      this.quartiers = response.docs
      console.log(response)
    },
    showName (item) {
      return item.data().name
    },
    handleSubmit () {
      this.$firebase.firestore().collection('transports').where('id_quartier', '==', this.destination).get().then(response => {
        this.transports = response.docs
        // console.log(response)
      }) 
    }
  }
}
</script>