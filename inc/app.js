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
  } else if (location.pathname == "/work/") {
    changeText.innerHTML = "Loaded";
  }
});

function initMap() {
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
    contentHr: "dsdsd",
    contentEn: "engleskifdfj"
  });
  addMarker({
    coords: { lat: 45.777, lng: 15.996 },
    contentHr: "dsdsdsdsdsds",
    contentEn: "engleskifdfj"
  });
  addMarker({
    coords: { lat: 45.8178, lng: 16.0082 },
    contentHr: "dsdsdsd",
    contentEn: "engleskifdfj"
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
      } else if (location.pathname == "/contact/") {
        infowindow.setContent(props.contentEn);
      }
    });
  }
}
