let ostanha = document.getElementById("ostanha");
let shahrha = document.getElementById("shahrha");

let ostanData = {
  esf: ["اصفهان", "کاشان", "شهرضا"],
  fars: ["شیراز", "لار", "لامرد", "گراش", "جهرم"],
  khooz: ["اهواز", "آبادان", "ماهشهر"],
  teh: ["مهرآباد", "فرودگاه امام", "کرج", "ورامین"],
  razavi: ["مشهد", "سبزوار", "چناران", "شاندیز", "طرقبه"],
  khali: ["انتخاب کنید ..."],
};

ostanha.addEventListener("change", () => {
  let shahrData = ostanData[ostanha.value];
  console.log(shahrData);
  console.log(shahrData.length);

  shahrha.innerText = "";
  shahrData.forEach((city) => {
    let newElem = document.createElement("option");
    newElem.innerText = city;
    shahrha.append(newElem);
  });
});

let d = new Date();
d.toLocaleString()
console.log(d);
