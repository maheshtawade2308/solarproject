import React from 'react';
import WaIcon from './assets/whatsapp-icon.png';
const WhatsAppIcon = () => {

  const ownerPhoneNumber = '9657089541';
  const message = 'Hello, I have a question.';

//   // Build the WhatsApp URL with the phone number and message (if provided).
// //   const whatsappUrl = `https://wa.me/${ownerPhoneNumber}/?text=${encodeURIComponent(message)}`;
//   const whatsappWebUrl = `https://web.whatsapp.com/send?phone=${ownerPhoneNumber}&text=${encodeURIComponent(message)}`;
  
//   const message = 'Hello, I have a question.';


  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleWhatsAppClick = () => {
    if (isMobile) {
      // Open WhatsApp mobile app.
      window.location.href = `whatsapp://send?phone=${ownerPhoneNumber}&text=${encodeURIComponent(message)}`;
    } else {
      // Open WhatsApp Web.
      window.open(`https://web.whatsapp.com/send?phone=${ownerPhoneNumber}&text=${encodeURIComponent(message)}`);
    }
  };
  return (
<div>
    {/* <a href={whatsappWebUrl} target="_blank" rel="noopener noreferrer">
      <img src="whatsapp-icon.png" alt="WhatsApp Icon" />
    </a> */}
    <div onClick={handleWhatsAppClick}>
    <img src={WaIcon} alt="WhatsApp Icon" className='img-fluid ' />
  </div>
  </div>
  );
};

export default WhatsAppIcon;