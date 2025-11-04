import Image from "next/image";

export default function Contact() {
  return (
    <main>
        <h1 class="page-title">Contact Me</h1>

        <form id="contact-form">
            <label for="name">Name: </label>
            <input type="text" id="name" name="name" placeholder="Name" required />
            <br><br>

            <label for="email">Email: </label>
            <input type="email" id="email" name="email" placeholder="Email" required />
            <br><br>

            <label for="message">Message: </label>
            <textarea id="message" name="message" placeholder="Message" required></textarea>
            <br><br>

            <input type="submit" class="button" value="Submit" />
        </form>
    </main>
  );
}