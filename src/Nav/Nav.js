import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="###">
            <img src={require("./Logotip9.png")} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="###">
                  Головна
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="###">
                  Про нас
                </a>
              </li>
              <li class="nav-item dropdown">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="###">
                    Послуги
                  </a>
                </li>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="###"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Зворотній зв'язок
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Пошук"
                aria-label="Search"
              />
              <button class="btn btn-primary" type="submit">
                Пошук
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
