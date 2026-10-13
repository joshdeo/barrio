# Barrio Kitchen & Cafe website

Pages: index.html, menu.html, trays.html, story.html, contact.html
Reel: reel/barrio-reel.mp4 (with sound), reel/barrio-reel-silent.mp4, reel/reel.html (editable source)
Logo files: img/

## Making the forms send email (Netlify Forms)

Both forms (contact and tray order) post to Netlify Forms. No code changes needed.

1. Deploy this folder to Netlify (drag the folder into app.netlify.com/drop, or connect a repo).
2. In Netlify, open Forms. After the first deploy you will see two forms: "contact" and "tray-order".
3. Go to Site configuration, Notifications, Form submission notifications, Add notification, Email notification.
   Choose each form and enter the address that should receive messages. Do this for both.
4. Submit a test from the live site. It appears under Forms and arrives by email.

Spam protection: a hidden honeypot field is already built in. Netlify also offers reCAPTCHA in the same settings.

If the site is opened from a folder or hosted somewhere other than Netlify, the forms show a friendly message
with a button that opens a prefilled email, so no order is lost.

## Editing content

All menu items and prices live in js/menu-data.js. Change a price there and the Menu page, Tray Builder and Home page update together.
Phone, email and address are at the top of the same file.
