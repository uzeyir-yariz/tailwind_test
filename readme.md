# node

## node için kodlar

### oluşturulucak dosyalar

- public
  - css
    - input.css
    - output.css
  - index.html
  
bunlar oluşturulucak

---

### terminal için gerekli kodlar

npm install -D tailwindcss
npx tailwindcss init

---

### config ayarı

> tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`content: ["./src/**/*.{html,js}"],` kısmı değiştirilnmesi gerekli onun yerine `html, js` neredeyse ona adapte etmek gerekli

---

### style

> bu kodları tailwind adlı yere yapıştırılması gerekli

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

---

### kodları izleme

> kodları çalıştırmak için gerekli bir kod terminale yaz

`npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch` bu kısımda değiştirilmesi gereken kodlar `./src/input.css` bunu **tailwind.css/input.css** neredeyse oraya yazın. `./dist/output.css` bunu ise **style.css/outpu.css** neredeyse oraya yazın

### test

> kodların çalıştığını test etmek için şunu yazın

```html

<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/dist/output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>

```

sadece burayı da değiştireblirsiniz `<link href="/dist/output.css" rel="stylesheet">` bunu **output.css** nerede ise oraya bağlayın
