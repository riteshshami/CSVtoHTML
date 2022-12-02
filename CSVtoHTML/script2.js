const form = document.querySelector("#csvForm");
const csvFileInput = document.querySelector("#csvInput");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const file = csvFileInput.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    const csvArray = csvToArr(e.target.result, ",");
    const value = JSON.stringify(csvArray, null, 4);
    for (let i = 0; i < value.length; i++) {
      const response1 = (JSON.parse(value)[i].Naam1);
      const response2 = (JSON.parse(value)[i].Naam2);
      const response3 = (JSON.parse(value)[i].Naam3);

      if (response1 == null) {
        let div = document.createElement("div");
        div.style.display="flex";
        div.innerHTML = `<input type = "checkbox"></input><label></label>`;
        document.body.append(div);
      } else {
        let div = document.createElement("div");
        div.style.display="flex";
        div.innerHTML = `<input type = "checkbox" ><label>${document.getElementsByTagName("label").innerHTML=response1}</label>`;
        document.body.append(div);
      }
      if (response2 == null) {
        let div = document.createElement("div");
        div.innerHTML = `<input type = "text"><label></label>`;
        document.body.append(div);
      } else {
        let div = document.createElement("div");
        div.innerHTML = `<input type = "text"><label>${document.getElementsByTagName("label").innerHTML=response2}</label>`;
        document.body.append(div);
      }
      if (response3 == null) {
        let div = document.createElement("div");
        div.innerHTML = `<input type = "checkbox"></input><label></label>`;
        document.body.append(div);
      } else {
        let div = document.createElement("div");
        div.innerHTML = `<input type = "checkbox"><label>${document.getElementsByTagName("label").innerHTML=response3}</label></input>`;
        document.body.append(div);
      }
    }
  };

  reader.readAsText(file);
});

function csvToArr(stringVal, splitter) {
  const [keys, ...rest] = stringVal
    .trim()
    .split("\n")
    .map((item) => item.split(splitter));

  const formedArr = rest.map((item) => {
    const object = {};
    keys.forEach((key, index) => (object[key] = item.at(index)));
    return object;
  });
  return formedArr;
}
