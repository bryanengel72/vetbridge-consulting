import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import { HOME } from './city';

/* Keep this in step with the site. If a new service starts receiving visitor
   data (a script, a form backend, a chat widget), it belongs in "Who else
   handles it" and in the CSP in vercel.json. */
const EFFECTIVE = 'September 29, 2026';

const PrivacyPage: React.FC = () => (
  <>
    <a className="skip" href="#main">Skip to content</a>
    <Header base="/" />
    <main id="main">
      <section className="policy-page" aria-labelledby="h-privacy">
        <div className="shell">
          <div className="row">
            <div className="stub">
              <span className="idx">§</span>
              <span>Privacy</span>
            </div>

            <div className="policy">
              <h1 id="h-privacy">Privacy policy</h1>
              <p className="lead">
                We collect very little. Here is exactly what, why, and who else touches it.
              </p>
              <p className="meta">Effective {EFFECTIVE}</p>

              <h2>Who we are</h2>
              <p>
                VetBridge Consulting (“VetBridge,” “we”) helps veterinary practices connect the
                systems they already run. We’re based in Kansas City, Missouri, and also serve
                San Diego, California. This policy covers vetbridgeconsulting.com, including the
                San Diego page.
              </p>

              <h2>What we collect</h2>
              <p><b>When you send the contact form:</b> your practice name, the PIMS you run, your
                email address, and your message. That is everything the form asks for.</p>
              <p><b>When you email or call us:</b> whatever you choose to tell us, along with your
                email address or phone number.</p>
              <p><b>When you visit the site:</b> like any website, the servers that deliver these
                pages receive technical details with each request: your IP address, browser and
                device type, the page you asked for, and the page that linked you here. We also
                count visits with Vercel Web Analytics, which records the pages viewed, the
                referring site, and general details such as country, browser, and device type. It
                doesn’t use cookies and doesn’t keep anything that identifies you personally.</p>

              <h2>What we don’t do</h2>
              <ul>
                <li>We don’t use cookies, and nothing is stored in your browser.</li>
                <li>No advertising, retargeting, or cross-site tracking scripts run on this site.</li>
                <li>We don’t sell or share your personal information for advertising.</li>
                <li>We don’t add you to a mailing list because you contacted us.</li>
              </ul>

              <h2>How we use it</h2>
              <p>
                To reply to you, schedule and run the audit you asked for, and keep a record of
                our conversation. Visit counts tell us which pages are useful. Server data keeps
                the site running and secure.
              </p>

              <h2>Who else handles it</h2>
              <p>A few service providers handle data so we can run the site and answer you:</p>
              <ul>
                <li><b>EmailJS</b> delivers contact-form submissions to our inbox.</li>
                <li><b>Vercel</b> hosts the site and provides the visit counts.</li>
                <li><b>Google Fonts</b> serves the site’s typefaces, so your browser requests them
                  from Google, which receives your IP address and browser details to do so.</li>
                <li><b>Our email provider</b> stores the messages we send and receive.</li>
              </ul>
              <p>
                They use it to provide their service to us. Beyond them, we don’t disclose your
                information to anyone unless the law requires it.
              </p>

              <h2>Practice data</h2>
              <p>
                This page covers the website. If you give us access to practice data for an audit
                or engagement, we use it only for that work, and we agree with you how it’s
                handled before we start.
              </p>

              <h2>How long we keep it</h2>
              <p>
                Form submissions and emails stay with us while we’re talking or working together,
                and afterward for as long as we reasonably need them for business records. You can
                ask us to delete them at any time.
              </p>

              <h2>Your choices</h2>
              <p>
                Email <a href="mailto:info@vetbridgeconsulting.com">info@vetbridgeconsulting.com</a>{' '}
                to ask what we have about you, to correct it, or to delete it. We’ll confirm when
                it’s done.
              </p>

              <h2>Do Not Track</h2>
              <p>
                This site doesn’t track visitors across other websites, and it works the same way
                whether or not your browser sends a Do Not Track or Global Privacy Control signal.
              </p>

              <h2>Children</h2>
              <p>
                This site is for veterinary practices. It isn’t directed at children under 13, and
                we don’t knowingly collect their information.
              </p>

              <h2>Security</h2>
              <p>
                The site is served only over HTTPS, and the contact form goes from your browser to
                EmailJS over an encrypted connection. No way of sending data over the internet is
                perfectly secure, but we keep what you send us to the people who need it.
              </p>

              <h2>Changes</h2>
              <p>
                If this policy changes, we’ll update this page and the effective date above.
              </p>

              <h2>Contact</h2>
              <p>
                Questions about this policy: <a href="mailto:info@vetbridgeconsulting.com">info@vetbridgeconsulting.com</a>{' '}
                or <a href={HOME.phoneHref}>{HOME.phone}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer phone={HOME.phone} phoneHref={HOME.phoneHref} crossLink={HOME.crossLink} base="/" />
    <Analytics />
  </>
);

export default PrivacyPage;
