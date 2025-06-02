// String-1 --

// makeTags

// The web is built with HTML strings like "<i>Yay</i>" which draws Yay as italic text. In this example, the "i" tag makes <i> and </i> which surround the word "Yay". Given tag and word strings, create the HTML string with tags around the word, e.g. "<i>Yay</i>".

// Examples

//     makeTags('i', 'Yay') → Yay
//     makeTags('i', 'Hello') → Hello
//     makeTags('cite', 'Yay') → Yay

function makeTags(tag, word) {
  return `<${tag}>${word}</${tag}>`;
}
