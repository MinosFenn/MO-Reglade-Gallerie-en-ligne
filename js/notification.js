//  Après la balise </body>, le document est prêt à être manipulé
setTimeout(() => {
  var notification = document.createElement("div");
  notification.setAttribute("id", "notification");
  notification.innerHTML = "🛈 Navigation horizontale -->";
  notification.className = "fixed top right animate";
  document.body.appendChild(notification);
}, 1000);
