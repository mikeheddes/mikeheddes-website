/* eslint-env browser */
import { hideVisually } from 'polished';

const styles = hideVisually();

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea');
  // set styles to hide element to prevent flash
  textArea.style.border = styles.border;
  textArea.style.clip = styles.clip;
  textArea.style.clipPath = styles.clipPath;
  textArea.style.height = styles.height;
  textArea.style.margin = styles.margin;
  textArea.style.overflow = styles.overflow;
  textArea.style.padding = styles.padding;
  textArea.style.position = styles.position;
  textArea.style.whiteSpace = styles.whiteSpace;
  textArea.style.width = styles.width;
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    // const successful = document.execCommand('copy');
    // const msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Oops, unable to copy because: ', err);
  }

  document.body.removeChild(textArea);
}

export default function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard
    .writeText(text)
    .then(
      () => {},
      // eslint-disable-next-line no-console
      err => console.error('Could not copy text: ', err),
    );
}
