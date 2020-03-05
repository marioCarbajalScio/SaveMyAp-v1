import emailjs from 'emailjs-com';

const service_id = "smtp_server";
const template_id = "template_XWtRtIZn";//Formato de la api
const template_id_scio = "email_template_notification";//Email de notificaciones de Scio
const user_id = 'user_rwpKTbKkkCAKLMLlzZhJd';
const email_scio="macarbajal@sciodev.com"

//Funcion para mandar email
export default async function sendEmail(e,total) {

  var nextEmail = true;

  const template_params = {
    "from_name": "Scio | End-to-end Software Engineering ",
    "name":e.get('user_name'),
    "email":e.get('user_email'), //Correo al que se mandara la info
    "message_html": "$"+total //La info de interes sobre el costo
   }

   await emailjs.send(service_id, template_id, template_params, user_id )
   .then((result) => {
      //console.log(result.text);
      nextEmail = true
  }, (error) => {
      console.log(error.text);
      nextEmail = false;
  });

  const template_params2 = {
    "from_name": "Scio VMA Notification",
    "name":e.get('user_name'),
    "email":e.get('user_email'), 
    "email_scio": email_scio,
    "message_html": "$"+total
   }

   await emailjs.send(service_id, template_id_scio, template_params2, user_id )
   .then((result) => {
      nextEmail = true
  }, (error) => {
    nextEmail = false
      console.log(error.text);
  });
  if(nextEmail){
    return true;
  }else{
    return false;
  }
    
}