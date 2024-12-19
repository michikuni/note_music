<template>
    <div class="container">
        <div class="form_login">
            <form @submit.prevent="validateForm">
                <h1>Login</h1>
                <input type="text" class="input_login" id="username" placeholder="Username" v-model="username" required>
                <br>
                <input type="password" class="input_login" id="password" placeholder="Password" v-model="password" required>
                <br>
                <button type="submit" class="input_login" id="btn_login">Login</button>    
                <p>Not have an account <router-link to="/signup" style="text-decoration: none;">Signup</router-link></p>
                <div id="login_another">
                    <GoogleLogin @success="handleLoginSuccess" @error="handleLoginErrror"><img src="./logo-google.png" width="32px" height="32px"></GoogleLogin>
                    <img src="./logo-facebook.png" width="32px" height="32px" style="margin-left: 30px;" @click="loginWithFacebook">
                </div>
            </form> 
        </div>
    </div>
    
      
</template>

<script>
/* global FB */
import { GoogleLogin } from 'vue3-google-login';
export default{
    name: 'FormLogin',
    // setup(){
    //     const { signIn } = useGoogleSignIn();
        
    //     const signInWithGoogle = async () => {
    //         try {
    //             const user = await signIn();
    //             console.log('User', user);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
        
    //     return {
    //         signInWithGoogle
    //     };
    // },
    components: {
        GoogleLogin
    },
    data(){
        return{
            username: '',
            password: ''
        };
    },
    methods:{
        validateForm(){
            let isValid = true;

            const usernamePattern = /^[a-zA-Z0-9]{5,15}$/;
            if(!usernamePattern.test(this.username)){
                alert('Username must be 5-15 characters, include letters and numbers');
                document.getElementById('username').value = '';
                isValid = false;
            }

            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$&+#*])[A-Za-z\d@$&+#*]{8,}$/;
            if(!passwordPattern.test(this.password)){
                alert('Password must be 8 characters, include at least one uppercase letter, one lowercase letter, one number and one special character');
                document.getElementById('password').value = '';
                isValid = false;
            }

            if(isValid){
                alert('Login success');
            }
        },
        handleLoginSuccess(user){
            console.log('User', user);
        },
        handleLoginErrror(error){
            console.error(error);
        },
        loginWithFacebook() {
            FB.login(response => {
                if (response.authResponse) {
                    FB.api('/me', { fields: 'name,email' }, userData => {
                    console.log('Facebook User:', userData);
            // Xử lý thông tin người dùng Facebook ở đây
                });
                } else {
                    console.error('User cancelled login or did not fully authorize.');
                }
            }, { scope: 'email' });
        }
    }
};
</script>
<style scoped>
    .error-message{
        color: red;
    }
    .container{
        margin: 0;
        padding: 0;
        display: flex;  
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 630px;
        background-image: url('./background.jpg');
    }
    h1{
        color: rgb(171, 183, 241);
    }
    .form_login{
        margin-left: 60%;
        margin-top: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 300px;
        height: 350px;
        text-align: center;
        background-color: rgb(255, 240, 203);
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    .input_login{
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #6a65fe;
    }
    #btn_login{
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