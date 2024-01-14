import { Widget } from "../share/widgets";

function createFooter() {
    const footer = document.createElement('footer');
    const footerText = Widget.createText("Icons by https://icons8.com");
    footerText.style.textAlign = "center";
    footer.appendChild(footerText);
}