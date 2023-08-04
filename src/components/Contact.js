import React from "react";

const Contact = () => {
  return (
    <div id="Contact" className='contact'>
      <h2>Contact</h2>
      <div>
        <form name="contact" method="POST">
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="first-name">First name</label>
            <div>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name">Last name</label>
            <div>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="phone-number">Phone Number</label>
            <div>
              <div>
                <label htmlFor="country">Country</label>
                <select id="country" name="country">
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                placeholder="+1 (555) 867-5309"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <div>
              <textarea
                id="message"
                name="message"
                rows={4}
                defaultValue={""}
                required
              />
            </div>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
