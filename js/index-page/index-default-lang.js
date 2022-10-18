function defaultLanguage() {
    if (document.location.search === "") { location.href = location.href + "?a=home&lang=ru"; }
}
defaultLanguage()