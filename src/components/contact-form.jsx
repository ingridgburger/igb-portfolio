import { useState } from 'react';
import './contact-form.css';

const CONTACT_ENDPOINT =
	'https://script.google.com/macros/s/AKfycby6FpxZZA20aeqSHw4sbt7KAILOu5_mmXSUUmnmAF-c6Iu32qTDm0e8FQ_Obgc4Jahh/exec';

export default function ContactForm() {
	const [status, setStatus] = useState('idle');

	const handleSubmit = async (event) => {
		event.preventDefault();
		setStatus('submitting');

		const form = event.currentTarget;
		const formData = new FormData(form);
		formData.set('timestamp', new Date().toISOString());

		try {
			const response = await fetch(CONTACT_ENDPOINT, {
				method: 'POST',
				body: new URLSearchParams(formData),
			});

			if (!response.ok) {
				throw new Error(`Contact form request failed with status ${response.status}.`);
			}

			form.reset();
			setStatus('success');
		} catch (error) {
			console.error('Unable to submit contact form.', error);
			setStatus('error');
		}
	};

	return (
		<section className="contact-form-section" aria-labelledby="contact-form-title">
			<div className="contact-form-section__intro">
				<h2 id="contact-form-title" className="text-h1">
					CONNECT WITH ME
				</h2>
				<p className="text-body">
					Have a project, an idea, or just want to say hi? Leave me a message!
				</p>
				<p className="text-body">
					<b><em>Based in Philly and always open to new website and branding projects.</em></b>
				</p>
			</div>

			<form className="contact-form" onSubmit={handleSubmit}>
				<input type="hidden" name="timestamp" />
				<label className="contact-form__field">
					<span>NAME</span>
					<input name="name" type="text" placeholder="Name" autoComplete="name" required />
				</label>
				<label className="contact-form__field">
					<span>EMAIL</span>
					<input name="email" type="email" placeholder="Email" autoComplete="email" required />
				</label>
				<label className="contact-form__field contact-form__field--message">
					<span>MESSAGE</span>
					<textarea
						name="message"
						placeholder="Your message here..."
						rows="5"
						required
					/>
				</label>
				<div className="contact-form__actions">
					<button
						type="submit"
						className="contact-form__submit button-standard"
						disabled={status === 'submitting'}
					>
						{status === 'submitting' ? 'SENDING...' : 'SUBMIT'}
					</button>
					{status === 'success' && <p role="status">Thanks for reaching out! I'll be in touch soon.</p>}
					{status === 'error' && (
						<p className="contact-form__error" role="alert">
							Your message could not be sent. Please try again.
						</p>
					)}
				</div>
			</form>
		</section>
	);
}
