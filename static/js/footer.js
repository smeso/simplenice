/* SPDX-License-Identifier: Apache-2.0 */

function rot13(str) {
    var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
}

function init_email() {
    var emails = document.getElementsByClassName('myemail');
    Array.prototype.filter.call(emails,
                                (email) => email.innerText = rot13(email.innerText));
    Array.prototype.filter.call(emails,
                                (email) => email.href = "mailto:" + rot13(email.href.substr(7)));
}

function init_theme_buttons() {
    document.getElementById('theme_dark_switch').onclick = function() {set_dark_theme();
                                                                       set_all_properties('dark');};
    document.getElementById('theme_contrast_switch').onclick = function() {set_contrast_theme();
                                                                           set_all_properties('contrast');};
    document.getElementById('theme_default_switch').onclick = function() {set_default_theme();
                                                                          set_all_properties('default');};
}

init_theme_buttons();
init_email();
