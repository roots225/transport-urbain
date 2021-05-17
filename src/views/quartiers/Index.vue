<template lang="html">
  <section class="tables">
    <div class="row">
      <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
              <h4 class="card-title">Quartiers</h4>
              <b-button variant="primary" class="btn-fw" @click="$router.push({name: 'quartiers.add'})">Ajouter</b-button>
            </div>
            <p class="card-description">
              Listes des quartiers
            </p>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th><input class="form-control" type="checkbox"/></th>
                  <th>Nom</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(quartier, index) in quartiers" :key="index">
                  <td><input type="checkbox" class="form-control" :value="quartier.id" /></td>
                  <td>{{ quartier.name }}</td>
                  <td>
                    <button type="button" class="btn btn-primary" @click="deleteItem(quartier.id)">Supprimer</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'quartiers',
  data () {
    return {
      quartiers: []
    }
  }
}
</script>
<style scoped>
  .table input[type="checkbox"] {
    width: 15px;
    height: 15px;
  }
</style>
