import Image from "next/image";

export default function Contact() {
  return (
    <main>
        <h1 className="page-title">Contact Me</h1>

        <form id="contact-form">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="Name" required />
            <br />

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" placeholder="Email" required />
            <br />

            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" placeholder="Message" required></textarea>
            <br />

            <input type="submit" className="button" value="Submit" />
        </form>
    </main>
  );
}