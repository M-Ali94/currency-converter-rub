<template>
  <div class="container pt-5">
    <input
        type="text"
        class="form-control"
        v-model="keyword"
        placeholder="Search"
    />

    <div class="row d-flex justify-content-center ">
      <div class="col-12 col-lg-8 ">
        <div
            class="card my-2"
            v-for="(item,index) in filteredCourses"
            v-if="item.ID !== 0"
            :key="index"
        >
          <div class="card-body">
            <h6 class="text-muted text-start"><small>{{ item.Name }}</small></h6>
            <div class="row">
              <div class="col-8">
                <div class="d-flex align-items-center">
                  <p class="card-text m-0 me-1">{{ item.Nominal }}{{ item.CharCode }}</p>
                  <img src="https://img.icons8.com/material-rounded/48/000000/resize-horizontal.png"/>
                  <p class="card-text mt-0 ms-1">{{ item.Value }}RUB</p>
                </div>
              </div>
              <div class="col-4 d-flex align-items-center">

                <img :class="[(item.Value - item.Previous) > 0 ? '' : 'd-none']"  src="https://img.icons8.com/material-rounded/24/198754/long-arrow-up.png"/>
                <img :class="[(item.Value - item.Previous) < 0 ? '' : 'd-none']"  src="https://img.icons8.com/material-rounded/24/dc3b3b/long-arrow-down.png"/>

                <p class="card-text text-end" :class="[(item.Value - item.Previous) > 0 ? 'text-success' : 'text-danger']" > {{(item.Value - item.Previous).toFixed(4).replace('.0000', '')}} </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CurrencyList",

  computed: {
    ...mapGetters(['filteredCourses']),

    keyword: {
      get() {
        return this.$store.state.keyword;
      },
      set(newValue) {
        return this.$store.commit("setKeyword", newValue);
      },
    },
  },
}
</script>