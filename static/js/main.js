function set_property(name, theme) {
    var r = document.querySelector(':root');
    r.style.setProperty('--' + name,
                        'var(--' + theme + '-' + name +')');
}

function set_all_properties(theme) {
    var cssrules = [...document.styleSheets[0].cssRules];
    var t = cssrules.filter(rule => rule.selectorText &&
                                    rule.selectorText.startsWith('.theme-default'));
    var props = [...t[0].style].filter(name => name.startsWith('--'));
    props.forEach(function(prop) {
        set_property(prop.substr(2), theme);
    });
}

function switch_theme(theme) {
    localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
    if (theme == 'theme-contrast')
        document.getElementById('pygmentcss').href = "/theme/css/pygment-high-contrast.css";
    else if (theme == 'theme-dark')
        document.getElementById('pygmentcss').href = "/theme/css/pygment-dark.css";
}

function set_dark_theme() {
    switch_theme('theme-dark');
}

function set_contrast_theme() {
    switch_theme('theme-contrast');
}

function set_default_theme() {
    localStorage.removeItem('theme');
    document.documentElement.className = 'theme-default';
    document.getElementById('pygmentcss').href = "/theme/css/pygment.css";
}

function init_theme() {
    var theme = localStorage.getItem('theme');
    if (theme === 'theme-dark' && !window.matchMedia("print").matches) {
        set_dark_theme();
    } else if (theme === 'theme-contrast') {
        set_contrast_theme();
    } else {
        set_default_theme();
    }
}

init_theme();
