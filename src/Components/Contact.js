import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h2>Burger Yiyelim</h2>
        <div className="contactMap">
          <iframe
            width="100%"
            height="600"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%Çimen%20Street,%20Kartal,%20Türkiye+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <h2>Bize Yazın</h2>
        <div>
          <label>
            <span>Ad Soyad</span>
            <input placeholder="Adınız Soyadınız"></input>
          </label>
        </div>
        <div>
          <div className="doubleArea">
            <label>
              <span>E-posta Adresi</span>
              <input type="email" placeholder="E-Mail Adresiniz"></input>
            </label>
            <label className="mgleft">
              <span>Telefon Numarası</span>
              <input placeholder="Telefon Numaranız"></input>
            </label>
          </div>
        </div>
        <div>
          <label>
            <span>Mesajınızın Konusu</span>
            <input placeholder="Mesajınızın Konusu"></input>
          </label>
        </div>
        <div>
          <label>
            <span>Mesajınız</span>
            <textarea rows="4" cols="50"></textarea>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Contact;
