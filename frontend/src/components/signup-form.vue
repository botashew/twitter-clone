<template lang="pug">
    div.main
        img(src="../assets/svg/twitter.svg")
        h1 Create your account
        div.form
            form(@submit.prevent="signUp")
                div.input
                    input(type="text" name="name" placeholder="Name" v-model="user.name")
                    div(v-show="!user.name" class="error_msg") {{errors.name}}
                div.input
                    input(type="text" name="username" placeholder="Username" v-model="user.username")
                    div(v-show="!user.username" class="error_msg") {{errors.username}}
                div.input
                    input(type="text" name="email" placeholder="Email" v-model="user.email")
                    div(v-show="!user.email" class="error_msg") {{errors.email}}
                div.input
                    input(type="password" name="password" placeholder="Create Password" v-model="user.password")
                    div(v-show="!user.password" class="error_msg") {{errors.password}}
                div
                    p Date of birth
                    span.
                        This will not be shown publicy. Confirm your own age, even if this account if for a
                        business, a pet, or something else.
                select(id="month" name="mm" v-on:change="change_month('#month')")
                select(id="day" name="dd")
                select(id="year" name="yyyy" v-on:change="change_year('#year')")
                input(type="submit" value="Sign Up" class="signup-button")
                router-link(to="login") Log in to Twitter

</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState(['user','errors'])
    },
    methods: {
        ...mapActions(['signUp', 'clearErrors']),
        // change_year: function(select){
        //     function isLeapYear(year){
        //         year = parseInt(year)
        //         if(year % 4 !=0){
        //             return false
        //         }
        //         else if(year % 400 == 0){
        //             return true
        //         }
        //         else if(year % 100 == 0){
        //             return false
        //         }
        //         else{
        //             return true
        //         }
        //     }

        //     if(isLeapYear($(select).val())){
        //     Days[1] = 29
        //     }
        //     else{
        //         Days[1] = 28
        //     }
        
        //     if($("#month").val() == 2)
        //     {
        //         var day = $('#day')
        //         var val = $(day).val()
        //         $(day).empty()
        //         var option = '<option value="day">Day</option>'
        //         for(var i=1; i<=Days[1]; i++){
        //             option += '<option value="'+ i +'">'+ i +'</option>'
        //         }
        //         $(day).append(option)
        //         if(val > Days[month]){
        //             val = 1
        //         }
        //         $(day).val(val)
        //     }
        // },
        // change_month: function(select){
        //     var day = $('#day')
        //     var val = $(day).val()
        //     $(day).empty()
        //     var option = '<option value="day">Day</option>'
        //     var month = parseInt($(select).val()) -1
        //     for(var i=1; i<= Days[month]; i++){
        //         option += '<option value="'+ i +'">'+ i +'</option>'
        //     }
        //     $(day).append(option)
        //     if(val > Days[month])
        //     {
        //         val = 1
        //     }
        //     $(day).val(val)
        // },
        // ready: function(){
        //     // Day
        //     var option = '<option value="day">Day</option>'
        //     var selectedDay = "day"
        //     for (var i=1; i <= Days[0]; i++){ // add option days
        //         option += '<option value="' + i + '">' + i + '</option>'
        //     }
        //     $('#day').append(option)
        //     $('#day').val(selectedDay)

        //     // Month
        //     var option = '<option value="month">Month</option>'
        //     var selectedMon = "month"
        //     for(var i=1; i<=12; i++){
        //         option += '<option value="'+ i +'">' + i +'</option>'
        //     }
        //     $('#month').append(option)
        //     $('#month').val(selectedMon)

        //     // Year
        //     var d = new Date()
        //     var option = '<option value="year">Year</option>'
        //     var selectedYear = "year"
        //     for(var i=1930; i <= d.getFullYear(); i++) {
        //         option += '<option value="'+ i +'">'+ i +'</option>'
        //     }

        //     $('#year').append(option)
        //     $('#year').val(selectedYear)
        // }
    }
}

// Date of Birth
// var Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]//index - month [0-11]
// $(document).ready(function(){
    
// })


</script>


<style scoped>
.main{
    width: 700px;
    border: 1px solid gray;
    border-radius: 15px;
    margin: auto auto;
    background: white;
    padding: 20px;
}

.input{
    margin: 20px 0;
}
h1{
    font-size: 23px;
}

img {
    width: 30px;
    height: 30px;
    filter: invert(54%) sepia(50%) saturate(2003%) hue-rotate(186deg) brightness(102%) contrast(90%);
}

.form{
    width: 100%;
}
input{
    display: grid;
    grid-template-columns: 100%;
    width: 543px;
    height: 40px;
    padding: 10px;
    border: 1px solid #CFD9DE;
    border-radius: 5px;
    font-size: 17px;
    
}

input:focus{
    outline-color: #4AA1F2;
}

p{
    font-size: 15px;
    font-weight: 700;
    margin: 0;
}

span {
    font-size: 15px;
    font-weight: 400;
    color: #536471
}

.signup-button{
    background: #4AA1F2;
    color: white;
    font-weight: 700;
    font-size: 15px;
    border-radius: 40px;
    padding: 5px;
    min-width: 63px;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.signup-button:hover{
    background: #4495E0;
}
.error_msg{
    color: red;
}
</style>