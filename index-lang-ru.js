function aaa() {
    if (document.location.search === "") { location.href = location.href + "?lang=ru"; }
    // if (document.location.search == "?") { location.href = location.href + "&lang=" + langRES; }
    // if (document.location.search.includes("lang=ru")) { location.href = location.href.replace(/lang=ru/gi, 'lang=en'); }
    // if (document.location.search.includes("lang=ua")) { location.href = location.href.replace(/lang=ua/gi, 'lang=en'); } else { return }
}
aaa()