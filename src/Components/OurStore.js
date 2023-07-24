import React from "react";

function OurStore() {
  return (
    <div className="ourStores">
      <div className="container">
        <div>
          <div className="header">
            <div className="selectArea">
              <p>Lütfen sipariş vermek istediğiniz ili seçin .</p>
              <select>
                <option>İstanbul</option>
                <option>İzmir</option>
                <option>Ankara</option>
                <option>Samsun</option>
                <option>Balıkesir</option>
              </select>
            </div>
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
          </div>
        </div>
        <ul>
          <li>
            <div className="desc">
              <h4>Avcılar </h4>
              <span>Merkez, Marmara Cd. No:26/2</span>
            </div>
            <div className="buttons">
              <button className="selfService">GEL-AL SİPARİŞ</button>
              <button>ADRESE TESLİM</button>
            </div>
          </li>
          <li>
            <div className="desc">
              <h4>Avcılar </h4>
              <span>Merkez, Marmara Cd. No:26/2</span>
            </div>
            <div className="buttons">
              <button className="selfService">GEL-AL SİPARİŞ</button>
              <button>ADRESE TESLİM</button>
            </div>
          </li>
          <li>
            <div className="desc">
              <h4>Avcılar </h4>
              <span>Merkez, Marmara Cd. No:26/2</span>
            </div>
            <div className="buttons">
              <button className="selfService">GEL-AL SİPARİŞ</button>
              <button>ADRESE TESLİM</button>
            </div>
          </li>
          <li>
            <div className="desc">
              <h4>Avcılar </h4>
              <span>Merkez, Marmara Cd. No:26/2</span>
            </div>
            <div className="buttons">
              <button className="selfService">GEL-AL SİPARİŞ</button>
              <button>ADRESE TESLİM</button>
            </div>
          </li>
          <li>
            <div className="desc">
              <h4>Avcılar </h4>
              <span>Merkez, Marmara Cd. No:26/2</span>
            </div>
            <div className="buttons">
              <button className="selfService">GEL-AL SİPARİŞ</button>
              <button>ADRESE TESLİM</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OurStore;
