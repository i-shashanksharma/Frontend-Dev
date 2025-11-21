class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  getFormHTML() {
    let html = "";
    this.fields.forEach(f => {
      html += `<label>${f.label}</label>
               <input type="${f.type}" id="${f.label}"><br><br>`;
    });
    return html;
  }

  getFormData() {
    const data = {};
    this.fields.forEach(f => {
      const value = document.getElementById(f.label)?.value || "";
      data[f.label] = value;
    });
    return data;
  }
}

const fb = new FormBuilder([
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
]);

console.log(fb.getFormHTML());