import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        keyword: '',
        courses: {},
        fromInput: 0,
        toInput: 0,
        from: {},
        to: {},


    },
    getters: {
        filteredCourses: state => {
            let courses = {}
            for (let [key, value] of Object.entries(state.courses)) {
                if (value.CharCode.toLowerCase().includes(state.keyword.toLowerCase()) || value.Name.toLowerCase().includes(state.keyword.toLowerCase())) {
                    courses[key] = value
                }
            }
            return courses
        }
    },
    mutations: {
        setCourses(state, data) {
            state.courses = data
        },
        setKeyword(state, keyword) {
            state.keyword = keyword
        },
        setFromInput(state, value) {
            state.fromInput = value
        },
        setToInput(state, value) {
            state.toInput = value
        },
        setFrom(state, value) {
            state.from = value
        },
        setTo(state, value) {
            state.to = value
        }
    },

    actions: {
        async setCourses({state, commit}) {
            await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
                .then(response => {
                    let courses = response.data.Valute
                    courses['RUB'] = {
                        "ID": 0,
                        "CharCode": "RUB",
                        "Name": "Ruble",
                        "Nominal": 1,
                        "Value": 1,
                        "Previous": 1
                    }
                    commit("setCourses", courses)
                    commit("setFromInput", courses['RUB'].Value)
                    commit("setToInput", courses['USD'].Value)
                    commit("setFrom", courses['USD'])
                    commit("setTo", courses['RUB'])
                }).catch(e => console.log(e))
        }
    }
})
