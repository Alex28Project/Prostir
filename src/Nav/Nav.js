import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      {/* <div class="container-fluid"> */}
      {/* <div class="row"> 
<div class="col">
<a href='###'><img src={require('./Logo.png')} alt='Логотип' title='наш логотип' /></a>
<p>інформаційні технології</p>
</div>
<div class="col"></div>
<div class="col">
<div class="btn-group" role="group" aria-label="Basic example"> 
<button type="button" class="btn btn-primary">Головна</button>
<button type="button" class="btn btn-primary">Послуги</button>
<button type="button" class="btn btn-primary">Замовити послугу</button>
<button type="button" class="btn btn-primary">Контакти</button> 
</div>
</div> 
</div> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="###">
            <img src={require("./Logo.png")} alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="###">
                  Головна
                </a>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link" href="###">Послуги</a> */}
                <div class="btn-group" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    class="dropdown-item"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Послуги
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li>
                      <a class="dropdown-item" href="###">
                        Dropdown link
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="###">
                        Dropdown link
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="###">
                  Замовити
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="###">
                  Контакти
                </a>
              </li>
              {/* <li class="nav-item">
<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</li> */}
            </ul>
          </div>
        </div>
      </nav>
      {/* </div> */}
    </>
  );
}
