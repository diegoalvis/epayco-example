import { useEffect } from 'react';


function epaycoScript() {


  useEffect(() => {
    
    const url = 'https://checkout.epayco.co/checkout.js';
  
    const script = document.createElement('script');
    script.src =  url;
    script.async = true;
    script.setAttribute('data-epayco-key', '65afb5be48a6a50793901a14bc038c2f');
    script.setAttribute('class', 'epayco-button');
    script.setAttribute('data-epayco-amount', '142800');
    script.setAttribute('data-epayco-tax', '22800');
    script.setAttribute('data-epayco-tax-base', '120000');
    script.setAttribute('data-epayco-name', 'Solicitud de anfitrion');
    script.setAttribute('data-epayco-description', 'Solicitud de anfitrion');
    script.setAttribute('data-epayco-currency', 'cop');
    script.setAttribute('data-epayco-country', 'CO');
    script.setAttribute('data-epayco-test', 'true');
    script.setAttribute('data-epayco-external', 'true');
    script.setAttribute('data-epayco-response', '');
    script.setAttribute('data-epayco-confirmation', '');
    script.setAttribute('data-epayco-button', 'https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/boton_carro_de_compras_epayco4.png');


    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  });
};

export default epaycoScript;