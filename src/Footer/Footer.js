import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div class="footer">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h5>Послуги</h5>
                        <ul>
                            <li><a href="###">Монтаж</a></li>
                            <li><a href="###">Демонтаж</a></li>
                            <li><a href="###">Проектування</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h5>Для зв'язку</h5>
                        <ul>
                            <li><a href="###">prostir@gmail.com</a></li>
                            <li><a href="###">+38(098)000-00-00</a></li>                            
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h5>Простір</h5>
                        <p>Компанія надає послуги в сфері інформаційних технологій.</p>
                    </div>
                    <div class="col item social">
                    <a href="###"><i class="icon ion-social-facebook"></i></a>
                    <a href="###"><i class="icon ion-social-twitter"></i></a>
                    <a href="###"><i class="icon ion-social-snapchat"></i></a>
                    <a href="###"><i class="icon ion-social-instagram"></i></a>
                    </div>
                </div>
                <p class="copyright">Prostir © 2022. Всі права захищені.</p>
            </div>
        </footer>
    </div>
    </>
  );
}
