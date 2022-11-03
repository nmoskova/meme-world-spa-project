import { html } from "../lib.js";

export const registerTemplate = (onSubmit, uploadFile) => html`
  <form @submit=${onSubmit} id="register-form">
    <h1>Register</h1>
    <div style="line-height:2;" class="form-group form-padding">
      <label for="username">Username*</label>
      <input
        class="form-control"
        id="username"
        type="text"
        placeholder="Enter Username"
        name="username"
      />
      <label for="email">Email*</label>
      <input
        class="form-control "
        id="email"
        type="text"
        placeholder="Enter Email"
        name="email"
      />
      <label for="password">Password*</label>
      <input
        class="form-control"
        id="password"
        type="password"
        placeholder="Enter Password"
        name="password"
      />
      <label for="repeatPass">Repeat Password*</label>
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
      <label for="image">Profile Image</label>
      <input @change="${uploadFile}" id="profile-image" type="file" />
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
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
      <div style="padding-top: 30px;">
        <p>Already have an account?&nbsp; <a href="/login">Sign in</a></p>
      </div>
    </div>
  </form>
`;
