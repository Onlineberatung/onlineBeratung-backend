function requestParam(url) {
    let a = document.createElement('a');
    a.href = url;
    const params = new Proxy(new URLSearchParams(a.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    return params["kc_locale"] || "de";
}

function changeLocale(url) {
    let lang = requestParam(url);
    document.cookie = "KEYCLOAK_LOCALE=" + lang;
    window.location.href = url
}
