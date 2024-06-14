export default function formatText(responseText) {
  // Mengganti pola **teks** dengan <strong>teks</strong>
  responseText = responseText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Mengganti baris baru dengan paragraf HTML
  let paragraphs = responseText.split('\n');
  let html = '<div>';

  paragraphs.forEach(paragraph => {
      html += '<p>' + paragraph + '</p>';
  });

  html += '</div>';

  return html;
}