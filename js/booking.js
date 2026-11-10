/* ==========================================================================
   Booking buttons → Calendly pop-up

   Any link with the attribute  data-calendly  opens your Calendly calendar
   in a pop-up on top of the page, so visitors book without leaving the site.

   Each link's href is the Calendly URL too, so if the Calendly script fails
   to load (ad blocker, slow connection), the link simply opens Calendly in a
   new tab instead. Nobody gets stuck.
   ========================================================================== */
document.addEventListener("click", function (event) {
  var link = event.target.closest("a[data-calendly]");
  if (!link || !window.Calendly) return; // no Calendly script: fall back to the normal link

  event.preventDefault();
  window.Calendly.initPopupWidget({ url: link.href });
});
