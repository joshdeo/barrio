/* Barrio forms: posts to Netlify Forms. Falls back to a prefilled email when the
   site is not hosted on Netlify (or the request fails), so no message is ever lost. */
window.BarrioForms = (function () {
  "use strict";
  function send(name, data) {
    var body = new URLSearchParams();
    body.append("form-name", name);
    Object.keys(data).forEach(function (k) { body.append(k, data[k]); });
    return fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString()
    }).then(function (r) {
      if (!r.ok) throw new Error("Form request failed with status " + r.status);
      return r;
    });
  }
  function mailto(subject, text) {
    return "mailto:" + window.BARRIO.contact.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);
  }
  function validEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v); }
  return { send: send, mailto: mailto, validEmail: validEmail };
})();
