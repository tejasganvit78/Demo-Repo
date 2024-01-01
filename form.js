function formSubmit(event){
    event.preventDefault();
    console.log("data is achieved")
    console.log(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.phone_number.value);
    console.log(event.target.Date_of_appointment.value);
    console.log(event.target.time_of_appointment.value);
    console.log(event.target.name.value);
    

}