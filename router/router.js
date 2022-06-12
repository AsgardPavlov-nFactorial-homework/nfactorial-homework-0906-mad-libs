const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const ROUTE_HOME = "/pages/Home.html";

const routes = {
    "/home": ROUTE_HOME,
    "/mad-libs": "/pages/MadLibs.html",
    "/tom-thumb": "/pages/TomThumb.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || ROUTE_HOME;
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("content").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
