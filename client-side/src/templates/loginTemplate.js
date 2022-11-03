import { html } from "../lib.js";

export const loginTemplate = (onSubmit) => html`
  <form @submit=${onSubmit}>
    <h1>Login</h1>
    <div style="line-height:2;" class="form-group form-padding">
      <label for="email">Email*</label>
      <input
        class="form-control"
        id="email"
        placeholder="Enter Email"
        name="email"
        type="email"
      />
      <label for="password">Password*</label>
      <input
        class="form-control"
        id="password"
        type="password"
        placeholder="Enter Password"
        name="password"
      />
      <p>Don't have an account?&nbsp;<a href="/register">Register</a></p>
      <button type="submit" class="btn btn-primary">Login</button>
    </div>
  </form>
`;
