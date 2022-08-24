function localeOf(url) {
    let a = document.createElement('a');
    a.href = url;
    const params = new Proxy(new URLSearchParams(a.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    return params["kc_locale"] || "de";
}

function changeLocale(url) {
    document.cookie = "KEYCLOAK_LOCALE=" + localeOf(url);
    window.location.href = url
}

window.onload = function () {
    const url = new URL(window.location.href);
    const params = url.searchParams;

    if (params.has("init")) {
        params.delete("init");
        let nextUrl = url.href.split('?')[0] + "?" + params.toString();
        changeLocale(nextUrl);
    }
}
