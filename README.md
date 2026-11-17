# codewithomesh.com

Home page for **Code with Omesh**: websites for small businesses, website templates and e-books.

- One page, no build step: `index.html` + `assets/`
- Hosted on Netlify (publish directory `.`), domain **codewithomesh.com**
- Demos live separately at https://templates.codewithomesh.com

## Adding a template that's live on Gumroad
Add a line to the `templates` list near the bottom of `index.html`, then add its 800×450 preview as `assets/tpl-<gumroad-url>.jpg`:

```js
['maison-lune', 'salon', 'Maison Lune', 'Salon & spa'],   // [Gumroad URL ending, demo folder, name, type]
```
