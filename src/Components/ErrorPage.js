import React from "react";

function ErrorPage() {
  return (
    <div className="error">
      <div className="container">
        <p className="warning">!</p>
        <div className="alert">
            <h1>UYARI !</h1>
            <p>Gitmeye çalıştığınız adres geçerli bir adres değildir. </p>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
