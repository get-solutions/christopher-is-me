import styles from '../styles/Contact.module.css';
import MainTemplate from "../templates/MainTemplate";

const Contact = () => {
  return (
    <MainTemplate>
        <h1>Contact Me!</h1>
        <form name="contact" action="/success" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label htmlFor="yourname">
                    Your Name:
                </label>
                <br />
                <input type="text" name="name" id="yourname" className={styles.input}/>
            </p>
            <p>
                <label htmlFor="youremail">
                    Your Email:
                </label>
                <br />
                <input type="email" name="email" id="youremail" className={styles.input}/>
            </p>
            <p>
                <label htmlFor="yourmessage">
                    Message:
                </label>
                <br />
                <textarea name="message" id="yourmessage" className={styles.textInput}></textarea>
            </p>
            <p>
                <button type="submit" className={styles.send}>Send</button>
            </p>
        </form>
    </MainTemplate>
  );
}

export default Contact;
