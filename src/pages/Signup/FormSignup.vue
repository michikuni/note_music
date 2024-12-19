<template>
    <div class="container">
        <div class="form-signup">
            <form @submit.prevent="validateForm">
                <h1>Sign up</h1>
                <input type="email" class="input-signup" id="email" placeholder="Email" required>
                <br>
                <input type="text" class="input-signup" id="username" placeholder="Username" required>
                <br>
                <input type="password" class="input-signup" id="password" placeholder="Password" required>
                <br>
                <input type="password" class="input-signup" id="confirm-password" placeholder="Confirm Password" required>
                <br>
                <button type="submit" class="input-signup" id="btn-signup">Sign up</button>
                <p>Have an account <router-link to="/login" style="text-decoration: none;">Login</router-link></p>
            </form>
        </div>
    </div>
</template>

<script>
export default{
    name: 'FormSignup',
    data(){
        return{
            email: '',
            username: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods:{
        validateForm(){
            let isValid = true;
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{10,20}$/;
            if(!emailPattern.test(this.email)){
                alert('Email is invalid');
                document.getElementById('email').value = '';
                isValid = false;
            }
            const usernamePattern = /^[a-zA-Z0-9]{5-25}$/;
            if(!usernamePattern.test(this.username)){
                alert('Username must be 5-25 characters, include letters and numbers');
                document.getElementById('username').value = '';
                isValid = false;
            }
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$&*#+])[a-zA-Z\d@$&*#+]{8,}$/;
            if(!passwordPattern.test(this.password)){
                alert('Password must be 8 characters, include at least one uppercase letter, one lowercase letter, one number and one special character');
                document.getElementById('password').value = '';
                isValid = false;
            }
            
            if(this.password !== this.confirmPassword){
                alert('Password and Confirm Password must be the same');
                document.getElementById('confirm-password').value = '';
                isValid = false;
            }
            if(isValid){
                alert('Sign up success');
            }
        }
    }
};
</script>

<style scoped>
    .container{
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 630px;
        background-color: rgb(71, 123, 255);
        background-image: url('./background.jpg');
    }
    h1{
        color: rgb(171, 183, 241);
    }
    .form-signup{
        margin-left: 60%;
        width: 300px;
        height: 420px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        background-color: rgb(255, 240, 203);
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    .input-signup{
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #6a65fe;
    }
    #btn-signup{
        color: #6a65fe;
        border-radius: 5px;
        padding: 9px 40px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>