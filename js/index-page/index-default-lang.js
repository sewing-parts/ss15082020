function defaultLanguage() {
    if (document.location.search === "") { location.href = location.href + "?lang=ru"; }
}
defaultLanguage()