const form_contact = document.getElementById("form_sub");
const name = document.getElementById("ad_soyad");
const content = document.getElementById("mesaj_icerik");

form_contact.addEventListener("submit", function(e) {
  e.preventDefault();
  take_data();
});

function take_data() {
  let msg_gönderen = name.value.trim();
  let msg_icerik = content.value.trim();

  if (!msg_gönderen || !msg_icerik) {
    alert("Lütfen tüm alanları doldurun.");
    return;
  }

  alert("Mesajınız alındı " + msg_gönderen + ", teşekkür ederiz...");

  postJSON(msg_gönderen, msg_icerik);
}

async function postJSON(msg_gönderen, msg_icerik) {
    try {
      const response = await fetch("https://3000-uzeyiryariz-tailwindtes-lv1zl3lwrg4.ws-us96.gitpod.io/mesajlar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mesaj_gonderen: msg_gönderen,
          mesaj_icerik: msg_icerik
        })
      });
  
      const result = await response.json();
      console.log("veriler kaydedildi : ", result);
    } catch (error) {
      console.error("bir hata oluştu : ", error);
    }
  }  