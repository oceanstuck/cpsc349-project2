import { Button } from 'bootstrap';
import './contact.css';

const Contact = () =>
{
    function SendEmail(e)
    {

    }

    return(
        <div className="contact">
            <h2>Contact me</h2>
            <form className="contactForm">
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' id='email' name='email' />
                </div>
                <div>
                    <label htmlFor='subject'>Subject:</label>
                    <input type='text' id='subject' name='subject' />
                </div>
                <div>
                    <textarea name='body' rows={10} cols={50} />
                </div>
                <Button variant='contained' type="submit" onClick={SendEmail}>Submit</Button>
            </form>
        </div>
    );
}

export default Contact;