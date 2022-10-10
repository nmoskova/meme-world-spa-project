import { html } from '../lib.js'
import { register } from '../api/users.js'
import { notify } from '../notify.js';

const registerTemplate = (onSubmit) => html`
    <form @submit=${onSubmit} id="register-form">
        <div class="form-group form-padding">
            <h1>Register</h1>
            <label for="username">Username</label>
            <input class="form-control" id="username" type="text" placeholder="Enter Username" name="username">
            <label for="email">Email</label>
            <input class="form-control " id="email" type="text" placeholder="Enter Email" name="email">
            <label for="password">Password</label>
            <input class="form-control" id="password" type="password" placeholder="Enter Password" name="password">
            <label for="repeatPass">Repeat Password</label>
            <input class="form-control" id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass">
            <fieldset style="padding-top: 15px;" class="form-group">
                <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"
                                checked>
                            <label class="form-check-label" for="gridRadios1">
                                Male
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                            <label class="form-check-label" for="gridRadios2">
                                Female
                            </label>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div style="padding-top: 10px;" class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">I agree to upload only hilarious memes!</label>
            </div>
            <div>
                <p></p>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        
            <div style="padding-top: 30px;">
                <p>Already have an account?&nbsp; <a href="/login">Sign in</a></p>
            </div>
        </div>
    </form>
`;



export function registerView(ctx) {
    ctx.render(registerTemplate(onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const username = formData.get('username').trim()
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const repass = formData.get('repeatPass').trim();
        const gender = formData.get('gender');


        if (username == '' || email == '' || password == '') {
            return notify("All fields are required")
        }
        if (password != repass) {
            return notify('Passwords dont match')
        }

        await register(username, email, password, gender)
        ctx.updateNav();
        ctx.page.redirect('/memes')
    }
}