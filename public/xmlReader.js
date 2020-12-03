var xmlHttp = createXmlHttpRequestObject();

//create object
function createXmlHttpRequestObject() {
  var xmlHttp;
  if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest();
  } else {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return xmlHttp;
}

// called onload
function process() {
  if (xmlHttp) {
    try {
      xmlHttp.open("GET", "test.xml", true);
      xmlHttp.onreadystatechange = handleStateChange;
      xmlHttp.send();
    } catch (e) {
      alert("in process");
    }
  }
}

// when state changes
function handleStateChange() {
  if (xmlHttp.readyState == 4) {
    if (xmlHttp.status == 200) {
      try {
        handleResponse();
      } catch (e) {
        alert("in handleStateChange");
      }
    } else {
      alert(xmlHttp.statusText);
    }
  }
}

// handle response from server
function handleResponse() {
  var xmlResponse = xmlHttp.responseXML;
  root = xmlResponse.documentElement;
  id = root.getElementByTagName("id");
  thickness = root.getElementByTagName("clump_thickness");

  var stuff = "";
  for (var i = 0; i < id.length; i++) {
    stuff =
      id.item(i).firstChild.data +
      " - " +
      thickness.item(i).firstChild.data +
      "<br/>";
  }

  theD = document.getElementById("theD");
  theD.innerHTML = stuff;
}
