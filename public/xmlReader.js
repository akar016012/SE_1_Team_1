function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      xmlread(this);
    }
  };
  xhttp.open("GET", "test.xml", true);
  xhttp.send();
}
function xmlread(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table = "<tr><th>Title</th><th>Patient Data</th></tr>";
  var x = xmlDoc.getElementsByTagName("CD");
  for (i = 0; i < x.length; i++) {
    console.log(x[i].getElementById());
  }
  document.getElementById("demo").innerHTML = table;
}
