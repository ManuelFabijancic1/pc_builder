<template>
    <div class="signup">
        <h1>signup page</h1>

        <div class="row">
            <div class="col"></div>
            <div class="col">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            v-model="username"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            v-model="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword2">Repeat Password</label>
                        <input
                            type="password"
                            v-model="passwordRepeat"
                            class="form-control"
                            id="exampleInputPassword2"
                            placeholder="Password"
                        />
                    </div>
                    <button type="button" @click="signup" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Signup',
    data() {
        return {
            username: '',
            password: '',
            passwordRepeat: '',
        };
    }
}
</script>