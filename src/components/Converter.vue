<template>
  <div class="bg-dark text-light d-flex justify-content-center align-items-center position-relative currency">

    <div class="container">
      <h1>
        Currency Converter
      </h1>
      <p>
        Check live foreign currency exchange rates
      </p>
    </div>

    <div class="card position-absolute">
      <div class="card-body text-black">
        <h5 class="card-title"><i class="fas fa-dollar-sign"></i> Convert</h5>

        <div class="d-sm-flex  d-block">

          <div class="mb-3 mx-md-3">
            <label class="col-form-label"><strong> From</strong></label>
              <select class="form-select mb-1" aria-label="Default select example" v-model="from">
                <option :value="value" v-for="(value, name) in courses">{{ name }}</option>
              </select>
              <input type="number" class="form-control" aria-label="" v-model="fromInput" @input="changeFromInput">
          </div>

          <div class="mb-3">
            <label class="col-form-label"> <strong>To </strong> </label>
            <select class="form-select mb-1" aria-label="Default select example" v-model="to">
              <option :value="value" v-for="(value, name) in courses">{{ name }}</option>
            </select>
            <input type="number" class="form-control" aria-label="" v-model="toInput" @input="changeToInput">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Converter",

  watch: {
    to() {
      this.changeFromInput()
    },

    from() {
      this.changeToInput()
    }
  },

  computed: {
    ...mapState(['courses']),

    rate() {
      return (this.from.Value * this.to.Nominal) / (this.to.Value * this.from.Nominal)
    },


    from: {
      get() {
        return this.$store.state.from;
      },
      set(newValue) {
        return this.$store.commit("setFrom", newValue);
      },
    },


    to: {
      get() {
        return this.$store.state.to;
      },
      set(newValue) {
        return this.$store.commit("setTo", newValue);
      },
    },

    fromInput: {
      get() {
        return this.$store.state.fromInput;
      },
      set(newValue) {
        return this.$store.commit("setFromInput", newValue);
      },
    },

    toInput: {
      get() {
        return this.$store.state.toInput;
      },
      set(newValue) {
        return this.$store.commit("setToInput", newValue);
      },
    }
  },

  methods: {
    changeFromInput() {
      this.$store.commit("setToInput", (this.fromInput * this.rate).toFixed(4).replace('.0000', ''))
    },
    changeToInput() {
      this.$store.commit("setFromInput", (this.toInput / this.rate).toFixed(4).replace('.0000', ''))
    },
  }
}
</script>

<style scoped>
.currency {
  height: 300px;
}

.my-card {
  width: 100%;
  max-width: 600px;
  box-shadow: rgba(14, 30, 37, 0.12) 0 2px 4px 0, rgba(14, 30, 37, 0.32) 0 2px 16px 0;
  top: 150px;
}

.card {
  width: 100%;
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  top: 200px;
}
</style>