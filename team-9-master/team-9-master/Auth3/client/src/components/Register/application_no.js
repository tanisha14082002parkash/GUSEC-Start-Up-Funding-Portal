import emailjs from "emailjs-com";

const generateApplicationNo = () => {
    const min_val=11111111;
    const max_val=99999999;

var app_no=Math.floor(Math.random() * (max_val - min_val + 1)) + min_val;
app_no=app_no+202200000000;
      var templateParams = {
        to_email: email_1,
        to_name: name_1,
        message: `Your Application has been submitted successfully..\n Your Application Number is : ${app_no}`
    };
      emailjs.send('service_asunz8s','template_x8fmlri', templateParams, 'Ysay8aZzSm4SPIKQT').then(
        function (response) {
          console.log(response.status, response.text);
        },
        function (err) {
          console.log(err);
        }
      );


}


export default generateApplicationNo
