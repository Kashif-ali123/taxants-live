import React from 'react';
import emailjs from 'emailjs-com';

const Notify = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_0purbja', 'template_y6d76tl', e.target, 'user_HcofAE5dyJJqJ6M6T1LSJ').then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }
    return (
        <div className="container border"
        style={{marginTop:"50px", width:"80%", 
        backgroundImage:"url('https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg')",
        backgroundPosition: "center",
        backgroundSize:"cover",
        }}>
            <h1 style={{marginTop: "25px"}}>Send Email Form</h1>
            <form className="row" style={{margin:"25px 85px 75px 120px", width: "70%" }} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" style= {{height:"60px"}} className = "form-control" />
                <label>Email</label>
                <input type="email" name="user_email" style= {{height:"60px"}} className = "form-control" />
                <label>Message</label>
                <textarea name="message" rows="4" className= "form-control" />
                <input type="submit" value="Send" className= "form-control btn btn-primary" style={{marginTop:"30px", height:"50px"}} />
            </form>
        </div>
    )
}

export default Notify
