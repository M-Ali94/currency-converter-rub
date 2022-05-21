
export default [
    {
        path:'/',
        name:'converter',
        component: ()=> import('../components/Converter')
    },
    {
        path:'/currency-list',
        name:'CurrencyList',
        component: ()=>import('../components/CurrencyList')
    },

]


