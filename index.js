let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 19.45, lng: -99.2 },
    zoom: 11,
  });
  crear();
}
let direcciones = [
  {
    Name: "Red Barn Stores 3858-CUAJIMALPA",
    Address:
      "JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA   MEXICO D.F. C.P. 05210",
    lat: 19.3642473,
    lng: -99.2909172,
  },
  {
    Name: "La Tienda Especiál 1001-San Buenaventura",
    Address:
      "Paseo San Buenaventura No. 15, Esq. Paseo de Las Lomas, San Buenaventura, Municipio de Ixtapaluca, Estado de México, C.P. 56536",
    lat: 19.3097885,
    lng: -98.862958,
  },
  {
    Name: "SuperStore 3849-ESMERALDA",
    Address:
      "Vía Doctor Jorge Jimenez Cantu S/N Col. Plaza Del Condado C.P. 52930 Atizapán de Zaragoza, Edo. De Mexico",
    lat: 19.5491542,
    lng: -99.2877312,
  },
  {
    Name: "KAYCHEE 98-Santa Fe",
    Address:
      "PROLONGACION VASCO DE QUIROGA No. 3800, SANTA FE CUAJIMALPA, CUAJIMALPA DE MORELOS, DISTRITO FEDERAL, C.P..05348",
    lat: 19.3668812,
    lng: -99.2660598,
  },
  {
    Name: "Red Barn Stores 2466-CUITLAHUAC",
    Address:
      "AV. CUITLÁHUAC NO. 3651 COL. HOGAR Y SEGURIDAD DELEG. AZCAPOTZALCO C.P.02820",
    lat: 19.4697724,
    lng: -99.1731231,
  },
  {
    Name: "Red Barn Stores 3862-AZCAPOTZALCO",
    Address:
      "AV. NEXTENGO NO. 78 COL. SANTA CRUZ ACAYUCAN , MEXICO D.F. C.P. 02770",
    lat: 19.4729049,
    lng: -99.1948028,
  },
  {
    Name: "SuperStore 3826-VIVEROS",
    Address:
      "Calle 8 No. 1 Col. Viveros Del Valle C.P. 54080 Tlalnepantla, Estado De Mexico",
    lat: 19.5315716,
    lng: -99.2221631,
  },
  {
    Name: "SuperStore 3838-LOMAS VERDES",
    Address:
      "Av. Lomas Verdes No. 545 Col. Lomas Verdes C.P. 53120 Naucalpan, Edo. De Mexico",
    lat: 19.5070225,
    lng: -99.2624283,
  },
  {
    Name: "KAYCHEE 652-UN-Samara Santa Fe",
    Address:
      "AV. ANTONIO DOVALI JAIME NO. 70, COL. ZEDEC SANTA FE DELEG. áLVARO OBREGóN, MéXICO, D.F. C.P. 01260",
    lat: 19.367805,
    lng: -99.2623987,
  },
  {
    Name: "KAYCHEE 655-Tecamachalco",
    Address:
      "AV. DE LOS BOSQUES NO. 128, LOMAS DE TECAMACHALCO, HUIXQUILUCAN, C.P..52780",
    lat: 19.4111564,
    lng: -99.253119,
  },
];

let crear= () => {
    direcciones.forEach((marca) => {
    var marker = new google.maps.Marker({
      position: { lat: marca.lat, lng: marca.lng },
      map: map,
      title: marca.Name,
    });
    google.maps.event.addListener(marker, "click", function () {
      document.getElementById(
        "marcas"
      ).innerHTML += `<li>${marker.getTitle()}</li>`;
    });
  });
};

