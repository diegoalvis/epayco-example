import React, { useCallback } from 'react';
 
function PayButton()  {

  var epayco = require('epayco-sdk-node')({
    apiKey: '65afb5be48a6a50793901a14bc038c2f',
    privateKey: 'ee31485514614e5619a17f21327c6ab5',
    lang: 'ES',
    test: true
  })
  
  var credit_info = {
    "card[number]": "4575623182290326",
    "card[exp_year]": "2025",
    "card[exp_month]": "12",
    "card[cvc]": "123"
  }
  
  epayco.token.create(credit_info)
    .then(function(token) {
        console.log(token);
    })
    .catch(function(err) {
        console.log("err: " + err);
    });

  
  function handlePay(e) {
    console.log('this is:', this);

    var payment_info = {
      token_card: "token_id",
      customer_id: "customer_id",
      doc_type: "CC",
      doc_number: "1035851980",
      name: "John",
      last_name: "Doe",
      email: "example@email.com",
      city: "Bogota",
      address: "Cr 4 # 55 36",
      phone: "3005234321",
      cell_phone: "3010000001",
      bill: "OR-1234",
      description: "Test Payment",
      value: "116000",
      tax: "16000",
      tax_base: "100000",
      currency: "COP",
      dues: "12",
      ip:"190.000.000.000", /*This is the client's IP, it is required */
      url_response: "https://ejemplo.com/respuesta.html",
      url_confirmation: "https://ejemplo.com/confirmacion",
      method_confirmation: "GET",
  
      //Extra params: These params are optional and can be used by the commerce
  
      use_default_card_customer: true,/*if the user wants to be charged with the card that the customer currently has as default = true*/
     
     extras: {
          extra1: "",
          extra2: "",
          extra3: "",
          extra4: "",
          extra5: "",
          extra6: ""
      }
  }

  epayco.charge.create(payment_info)
      .then(function(charge) {
          console.log(charge);
      })
      .catch(function(err) {
          console.log("err: " + err);
      });
  
    }
      
 
  return (
    
    <button onClick={handlePay}>
      Demo pay button
    </button>
  )
};

export default PayButton;

