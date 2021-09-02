import marked from "marked";

const htmlEscapeToText = function (text: string) {
  return text.replace(/\&\#[0-9]*;|&amp;/g, function (escapeCode) {
    if (escapeCode.match(/amp/)) {
      return "&";
    }
    const matches = escapeCode.match(/[0-9]+/);
    const codes = (matches ?? []).map((m) => parseInt(m));
    return String.fromCharCode(...codes);
  });
};

const render2text = new marked.Renderer();
render2text.link = (href, title, text) => text;
render2text.paragraph = (text) => htmlEscapeToText(text) + "\r\n";
render2text.heading = (text, level) => `${text}\n`;
render2text.image = (href, title, text) => "";
render2text.code = (code) => "< code fragment 👩‍💻>";
render2text.blockquote = (quote) => `"${quote}"`;
render2text.html = () => "";
render2text.hr = () => "\n";
render2text.list = (body) => body;
render2text.listitem = (item) => `* ${item}\n`;
render2text.checkbox = (checked) => `${checked ? "✔" : ""}`;
render2text.table = () => "";
render2text.tablerow = () => "";
render2text.tablecell = () => "";
render2text.codespan = (code) => "< code fragment 👩‍💻>";
render2text.br = () => "\n";
render2text.del = () => "";

//Allow, keep commented
// render2text.strong = (text) => text;
// render2text.em = (text) => text;

export { render2text };
