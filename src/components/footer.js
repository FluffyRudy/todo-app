import "../styles/footer.css"
import { Widget } from "../share/widgets";

export default function createFooter() {
    const footer = document.createElement('footer');
    const footerText = Widget.createText("Icons by https://icons8.com and https://icon-icons.com", "id", "footer-text");
    footer.appendChild(footerText)
    return footer;
}