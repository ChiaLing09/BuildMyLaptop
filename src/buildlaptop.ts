function getValue(name, value) {
  let radioid = name;
  let radiovalue = value;
  if (radioid === "Screen") {
    document.getElementById("screendisplay").innerHTML = radiovalue;
  } else if (radioid === "RAM") {
    document.getElementById("ramdisplay").innerHTML = radiovalue;
  } else if (radioid === "HDD") {
    document.getElementById("hdddisplay").innerHTML = radiovalue;
  } else if (radioid === "CPU") {
    document.getElementById("cpudisplay").innerHTML = radiovalue;
  }
}