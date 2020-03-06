import emailjs from 'emailjs-com';

//const service_id = "smtp_server";
//const template_id = "template_XWtRtIZn";//Formato de la api
//const template_id_scio = "email_template_notification";//Email de notificaciones de Scio
//const user_id = 'user_rwpKTbKkkCAKLMLlzZhJd';
const email_scio="macarbajal@sciodev.com"

const service_id = "gmail";
const template_id = "template_Q8xb3sx7";//Formato de la api
const template_id_scio = "email_notification_scio";//Email de notificaciones de Scio
const user_id = 'user_miSxUoip92knRTffaAMa6';

function comas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function definir(x){
  var definitions = ["","Type: ","Desing: ","Business Model: ","Login System: "
  ,"Website Integration: ", "Users Profiles: ", "Admin Panel: ", "Languages: ","Progress: ","Estimated Dev Time: "
]
  var response = "";
  var i = 1;
    while(i<11){
      response += [" [ "+definitions[i]+x[i] +" ] \n"]
      i+=1
    }
    return response
}

//Funcion para mandar email
export default async function sendEmail(e,total,definition) {

  var nextEmail = true;

  console.log(definir(definition))

  const template_params = {
    "from_name": "Scio | End-to-end Software Engineering ",
    "name":e.get('user_name'),
    "email":e.get('user_email'), //Correo al que se mandara la info
    "message_html": "$"+comas(total), //La info de interes sobre el costo
    "answers":definir(definition),
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
    "message_html": "$"+comas(total)
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