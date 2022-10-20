import { register } from "../api/users.js";
import { html } from "../lib.js";
import { notify } from "../notify.js";

const registerTemplate = (onSubmit, uploadFile) => html`
  <form @submit=${onSubmit} id="register-form">
    <h1>Register</h1>
    <div style="line-height:2;" class="form-group form-padding">
      <label for="username">Username</label>
      <input
        class="form-control"
        id="username"
        type="text"
        placeholder="Enter Username"
        name="username"
      />
      <label for="email">Email</label>
      <input
        class="form-control "
        id="email"
        type="text"
        placeholder="Enter Email"
        name="email"
      />
      <label for="password">Password</label>
      <input
        class="form-control"
        id="password"
        type="password"
        placeholder="Enter Password"
        name="password"
      />
      <label for="repeatPass">Repeat Password</label>
      <input
        class="form-control"
        id="repeatPass"
        type="password"
        placeholder="Repeat Password"
        name="repeatPass"
      />
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="flexRadioDefault1"
          value="male"
        />
        <label class="form-check-label" for="flexRadioDefault1"> male </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="flexRadioDefault2"
          value="female"
          checked
        />
        <label class="form-check-label" for="flexRadioDefault2"> female </label>
      </div>
      <div style="padding-top: 10px; padding-bottom:10px;" class="form-check">
        <input
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
          name="agree-check"
        />
        <div>
        <label class="form-check-label" for="exampleCheck1"
          >I agree to upload only hilarious memes!</label
        >
        </div>
        <label for="image">Profile Image</label>
        <input @change="${uploadFile}" id="profile-image" type="file" />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
      <div style="padding-top: 30px;">
        <p>Already have an account?&nbsp; <a href="/login">Sign in</a></p>
      </div>
    </div>
  </form>
`;

export function registerView(ctx) {
  ctx.render(registerTemplate(onSubmit, uploadFile));

  function uploadFile() {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      sessionStorage.setItem("image", reader.result);
    });

    reader.readAsDataURL(this.files[0]);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const username = formData.get("username").trim();
    const email = formData.get("email").trim();
    const password = formData.get("password").trim();
    const repass = formData.get("repeatPass").trim();
    const gender = formData.get("gender");
    const agree = formData.get("agree-check");
    const image = sessionStorage.getItem("image");

    sessionStorage.removeItem("image");

    if (username == "" || email == "" || password == "" || agree == null) {
      return notify("All fields are required");
    }
    if (password != repass) {
      return notify("Passwords don't match");
    }

    await register(username, email, password, gender, image);
    event.target.reset();
    ctx.page.redirect("/profile/" + sessionStorage.id);
  }
}
