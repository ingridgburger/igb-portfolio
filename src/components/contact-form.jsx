import Button from './button';
import './contact-form.css';

export default function ContactForm() {
	return (
		<form
			className="contact-form"
			action="https://script.google.com/macros/s/AKfycby6FpxZZA20aeqSHw4sbt7KAILOu5_mmXSUUmnmAF-c6Iu32qTDm0e8FQ_Obgc4Jahh/exec"
			method="post"
		>
			<h2 className="text-h2">Get in touch</h2>
			<p className="contact-form__intro">
				Feel free to reach out about potential projects, work opportunities, questions, or just to connect!
			</p>
			<div className="contact-form__fields">
				<label className="contact-form__field">
					<span>Name</span>
					<input type="text" name="name" placeholder="Your name" autoComplete="name" required />
				</label>
				<label className="contact-form__field">
					<span>Email</span>
					<input type="email" name="email" placeholder="you@gmail.com" autoComplete="email" required />
				</label>
				<label className="contact-form__field contact-form__field--message">
					<span>Message <em>(optional)</em></span>
					<textarea name="message" placeholder="Write your message" rows="5" />
				</label>
			</div>
			<Button type="submit">Send message</Button>
		</form>
	);
}
