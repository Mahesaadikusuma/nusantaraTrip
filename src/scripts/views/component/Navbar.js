import { LitElement, html } from "lit";

class Navbar extends LitElement {
  render() {
    return html`<section id="navbar">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="#">Nusantara Trip</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/"
                  >Home</a
                >
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#/detail">Destination</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#/article">Article</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
              </li>
            </ul>

            <div class="ms-lg-2">
              <a href="#" class="btn btn-primary btn-login">Login</a>
            </div>
          </div>
        </div>
      </nav>
    </section>`;
  }
}
customElements.define("navigation-bar", Navbar);
