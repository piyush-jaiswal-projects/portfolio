import { developerMailId } from "../data";

function sendEmail(subject, body) {
    const mailtoLink = `mailto:${encodeURIComponent(developerMailId)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

export default sendEmail;