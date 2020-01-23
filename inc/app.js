$(document).on("scroll", function() {
  if ($(document).scrollTop()) {
    $("header").addClass("site-header-white");
    $(".site-branding").addClass("site-branding-white");
    $(".burger").addClass("burger-show");
  } else {
    $("header").removeClass("site-header-white");
    $(".site-branding").removeClass("site-branding-white");
    $(".burger").removeClass("burger-show");
  }
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const noScroll = document.querySelector("body");
  const nav = document.querySelector(".menu");
  const navLinks = document.querySelectorAll(".menu li");

  burger.addEventListener("click", () => {
    //toggle Nav
    nav.classList.toggle("menu-active");
    //animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
    //Burger animation and no scroll
    burger.classList.toggle("toggle");
    noScroll.classList.toggle("no-scroll");
  });
};

const app = () => {
  navSlide();
};

app();

const fileInput = document.querySelector("#form-field-field_1");
const changeText = document.querySelector(".elementor-field-label");

fileInput.addEventListener("input", () => {
  if (location.pathname == "/posao/") {
    changeText.innerHTML = "Učitano";
    fileInput.style.visibility = "hidden";
    if (document.querySelector(".elementor-message-danger") !== null) {
      let x, i;
      x = document.querySelectorAll(".elementor-message");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
    }
  } else if (location.pathname == "/en/career/") {
    changeText.innerHTML = "Loaded";
    fileInput.style.visibility = "hidden";
    if (document.querySelector(".elementor-message-danger") !== null) {
      let x, i;
      x = document.querySelectorAll(".elementor-message");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
    }
  }
});

function initMap() {
  let pozicijaMaksimir = `<a href="https://www.google.com/maps/place/Maksimirska+cesta+89,+10000,+Zagreb/@45.8178244,16.006017,17z/data=!3m1!4b1!4m5!3m4!1s0x4765d7b72dba1a7f:0x115ffba7650b84fb!8m2!3d45.8178207!4d16.0082057">Pokreni navigaciju</a>`;
  let pozicijaUtrine = `<a href="https://www.google.com/maps/dir//Tr%C5%BEnica+Utrina,+Bar%C4%8Dev+trg,+10000,+Zagreb/@45.7770846,15.9941418,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4765d60b90bc6d95:0xc627f81c5a04af83!2m2!1d15.9963305!2d45.7770809!3e0">Pokreni navigaciju</a>`;
  let pozicijaZitnjak = `<a href="https://www.google.com/maps/dir//Rigeta+d.o.o.,+%C5%BDitnjak+Bogdani+66,+10000,+Zagreb/@45.7907829,16.0597808,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x476678ee445868ad:0x396554d840b36736!2m2!1d16.0619695!2d45.7907792!3e0">Pokreni navigaciju</a>`;
  let positionMaksimir = `<a href="https://www.google.com/maps/place/Maksimirska+cesta+89,+10000,+Zagreb/@45.8178244,16.006017,17z/data=!3m1!4b1!4m5!3m4!1s0x4765d7b72dba1a7f:0x115ffba7650b84fb!8m2!3d45.8178207!4d16.0082057">Start navigation</a>`;
  let positionUtrine = `<a href="https://www.google.com/maps/dir//Tr%C5%BEnica+Utrina,+Bar%C4%8Dev+trg,+10000,+Zagreb/@45.7770846,15.9941418,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4765d60b90bc6d95:0xc627f81c5a04af83!2m2!1d15.9963305!2d45.7770809!3e0">Start navigation</a>`;
  let positionZitnjak = `<a href="https://www.google.com/maps/dir//Rigeta+d.o.o.,+%C5%BDitnjak+Bogdani+66,+10000,+Zagreb/@45.7907829,16.0597808,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x476678ee445868ad:0x396554d840b36736!2m2!1d16.0619695!2d45.7907792!3e0">Start navigation</a>`;
  let map = new google.maps.Map(document.getElementById("gmap"), {
    zoom: 12,
    center: { lat: 45.793, lng: 16.022 },
    styles: [
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fdf7ed" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#fdf7ed" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#fdf7ed" }]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#fdf7ed" }]
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ color: "#fdf7ed" }]
      }
    ]
  });

  addMarker({
    coords: { lat: 45.791, lng: 16.062 },
    contentHr: "<h4>Žitnjak bogdani</h4>" + pozicijaZitnjak,
    contentEn: "<h4>Žitnjak bogdani</h4>" + positionZitnjak
  });
  addMarker({
    coords: { lat: 45.777, lng: 15.996 },
    contentHr: "<h4>Tržnica Utrine</h4>" + pozicijaUtrine,
    contentEn: "<h4>Utrine market</h4>" + positionUtrine
  });
  addMarker({
    coords: { lat: 45.8178, lng: 16.0082 },
    contentHr: "<h4>Maksimirska</h4>" + pozicijaMaksimir,
    contentEn: "<h4>Maksimir st</h4>" + positionMaksimir
  });

  function addMarker(props) {
    let infowindow = new google.maps.InfoWindow();
    let marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: location.origin + "/wp-content/uploads/marker.png"
    });

    marker.addListener("click", () => {
      infowindow.open(map, marker);
      if (location.pathname == "/kontakt/") {
        infowindow.setContent(props.contentHr);
      } else if (location.pathname == "/en/contact/") {
        infowindow.setContent(props.contentEn);
      }
    });
  }
}

$("#form-field-field_1").bind("change", function() {
  if (this.files[0].size > 4194304) {
    document.querySelector(".elementor-button").disabled = true;
  } else if (this.files[0].size <= 4194304) {
    document.querySelector(".elementor-button").disabled = false;
  }
});
