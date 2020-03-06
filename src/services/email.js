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

//Funcion para mandar email
export default async function sendEmail(e,total,ans) {
  const quest = ["","Type: ","Desing: ","Business Model: ","Login System: "
  ,"Website Integration: ", "Users Profiles: ", "Admin Panel: ", "Languages: ","Progress: ","Estimated Dev Time: "
  ]
  var nextEmail = true;

  const template_params = {
    "from_name": "Scio | End-to-end Software Engineering ",
    "name":e.get('user_name'),
    "email":e.get('user_email'), //Correo al que se mandara la info
    "message_html": "$"+comas(total), //La info de interes sobre el costo
    "question1":quest[1],
    "answer1":ans[1],
    "question2":quest[2],
    "answer2":ans[2],
    "question3":quest[3],
    "answer3":ans[3],
    "question4":quest[4],
    "answer4":ans[4],
    "question5":quest[5],
    "answer5":ans[5],
    "question6":quest[6],
    "answer6":ans[6],
    "question7":quest[7],
    "answer7":ans[7],
    "question8":quest[8],
    "answer8":ans[8],
    "question9":quest[9],
    "answer9":ans[9],
    "question10":quest[10],
    "answer10":ans[10],
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
    "message_html": "$"+comas(total), //La info de interes sobre el costo
    "question1":quest[1],
    "answer1":ans[1],
    "question2":quest[2],
    "answer2":ans[2],
    "question3":quest[3],
    "answer3":ans[3],
    "question4":quest[4],
    "answer4":ans[4],
    "question5":quest[5],
    "answer5":ans[5],
    "question6":quest[6],
    "answer6":ans[6],
    "question7":quest[7],
    "answer7":ans[7],
    "question8":quest[8],
    "answer8":ans[8],
    "question9":quest[9],
    "answer9":ans[9],
    "question10":quest[10],
    "answer10":ans[10],
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