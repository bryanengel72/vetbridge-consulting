import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const SERVICE_ID = 'service_ekg9k3n';
const TEMPLATE_ID = 'template_kwdi3g9';
const PUBLIC_KEY = 'gD_uQtcmPNPx4tyTy';

type FieldName = 'practice_name' | 'pims_system' | 'user_email' | 'message';

const Contact: React.FC<{ phone: string; phoneHref: string }> = ({ phone, phoneHref }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [invalid, setInvalid] = useState<Record<string, boolean>>({});
  const form = useRef<HTMLFormElement>(null);
  const sentRef = useRef<HTMLDivElement>(null);

  const check = (el: HTMLInputElement | HTMLTextAreaElement) => {
    const ok = el.checkValidity() && el.value.trim() !== '';
    setInvalid((v) => ({ ...v, [el.name]: !ok }));
    return ok;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    check(e.currentTarget);

  const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (invalid[e.currentTarget.name]) check(e.currentTarget);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const fields: Array<HTMLInputElement | HTMLTextAreaElement> = Array.from(
      form.current.querySelectorAll('input, textarea')
    );
    const bad = fields.filter((el) => !check(el));
    if (bad.length) {
      bad[0].focus();
      return;
    }

    setIsSending(true);
    setError(null);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY }).then(
      () => {
        setSubmitted(true);
        setIsSending(false);
        requestAnimationFrame(() => sentRef.current?.focus());
      },
      (err) => {
        console.error('Contact form send failed:', err);
        setError(
          `That didn't send. Email us at info@vetbridgeconsulting.com or call ${phone}.`
        );
        setIsSending(false);
      }
    );
  };

  const field = (name: FieldName) => ({
    'data-invalid': invalid[name] ? 'true' : 'false',
  });

  return (
    <section id="contact" aria-labelledby="h-contact" style={{ paddingTop: 0 }}>
      <div className="shell">
        <hr className="hairline draw rv" style={{ marginBottom: 'var(--pad-section)' }} />
        <div className="row">
          <div className="stub">
            <span className="idx">09</span>
            <span>Contact</span>
          </div>

          <div className="form">
            <div className="rv">
              <h2
                id="h-contact"
                style={{ fontSize: 'var(--t-4)', maxWidth: '12ch', marginBottom: 'var(--s4)' }}
              >
                Tell us what's broken.
              </h2>
              <p style={{ color: 'var(--fg-2)', maxWidth: '46ch' }}>
                The audit is about an hour on a call, plus a look at your last twelve months of
                practice data. Read access is all we need — we can't touch your records or your
                billing. You get a written summary either way, and there's nothing to sign.
              </p>
              <ul className="contact-list">
                <li>
                  <p className="label" style={{ marginBottom: 6 }}>Phone</p>
                  <a href={phoneHref}>{phone}</a>
                </li>
                <li>
                  <p className="label" style={{ marginBottom: 6 }}>Email</p>
                  <a href="mailto:info@vetbridgeconsulting.com">info@vetbridgeconsulting.com</a>
                </li>
                <li>
                  <p className="label" style={{ marginBottom: 6 }}>Where we are</p>
                  <span className="mono" style={{ fontSize: 'var(--t-1)' }}>Kansas City, MO · San Diego, CA</span>
                </li>
              </ul>
            </div>

            <div className="rv" style={{ '--d': '100ms' } as React.CSSProperties}>
              {submitted ? (
                <div className="sent" style={{ display: 'block' }} role="status" tabIndex={-1} ref={sentRef}>
                  <p className="label">Sent</p>
                  <h3>Got it.</h3>
                  <p style={{ color: 'var(--fg-2)', maxWidth: '40ch' }}>
                    We'll get back to you within one business day. If it's urgent, call{' '}
                    {phone}.
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} noValidate>
                  <p className="label" style={{ marginBottom: 'var(--s4)' }}>Audit request</p>

                  <div className="pair">
                    <div className="field" {...field('practice_name')}>
                      <label htmlFor="f-practice">Practice name</label>
                      <input
                        id="f-practice" name="practice_name" type="text" required
                        autoComplete="organization" placeholder="Northland Animal Hospital"
                        aria-invalid={invalid.practice_name || false}
                        aria-describedby="e-practice"
                        onBlur={handleBlur} onInput={handleInput}
                      />
                      <span className="err" id="e-practice">Tell us the practice name.</span>
                    </div>
                    <div className="field" {...field('pims_system')}>
                      <label htmlFor="f-pims">What PIMS do you run?</label>
                      <input
                        id="f-pims" name="pims_system" type="text" required
                        autoComplete="off" placeholder="Shepherd, Cornerstone, not sure…"
                        aria-invalid={invalid.pims_system || false}
                        aria-describedby="e-pims"
                        onBlur={handleBlur} onInput={handleInput}
                      />
                      <span className="err" id="e-pims">Even "not sure" is a useful answer.</span>
                    </div>
                  </div>

                  <div className="field" {...field('user_email')}>
                    <label htmlFor="f-email">Your email</label>
                    <input
                      id="f-email" name="user_email" type="email" required
                      autoComplete="email" placeholder="you@yourclinic.com"
                      aria-invalid={invalid.user_email || false}
                      aria-describedby="e-email"
                      onBlur={handleBlur} onInput={handleInput}
                    />
                    <span className="err" id="e-email">We need a working email to send the summary to.</span>
                  </div>

                  <div className="field" {...field('message')}>
                    <label htmlFor="f-msg">What's the problem?</label>
                    <textarea
                      id="f-msg" name="message" required
                      placeholder="Where the time goes, what you can't get a straight answer on, what you've already tried."
                      aria-invalid={invalid.message || false}
                      aria-describedby="e-msg"
                      onBlur={handleBlur} onInput={handleInput}
                    />
                    <span className="err" id="e-msg">A sentence is plenty.</span>
                  </div>

                  {error && (
                    <p className="err" style={{ display: 'block', marginBottom: 'var(--s3)' }}>
                      {error}
                    </p>
                  )}

                  <button className="btn" type="submit" disabled={isSending} style={{ width: '100%' }}>
                    {isSending ? 'Sending…' : 'Send'}
                  </button>
                  <p className="meta" style={{ marginTop: 'var(--s3)' }}>
                    We reply within one business day. We don't add you to a list.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
