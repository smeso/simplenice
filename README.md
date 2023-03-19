SimpleNice
==========

Overview
--------

SimpleNice is a theme for [Pelican](http://blog.getpelican.com/).

I was tired of beautiful but bloated themes and I wanted something
simple and nice for my [personal website](https://smeso.it).

I wanted it to look much better than the famous
[Motherf*cking Website](https://motherfuckingwebsite.com/), without sacrificing too much
in terms of simplicity.

The requirements
----------------

These are the main requirements for this project (in order of importance):

1.  **accessibility**: it should be accessible to people with disabilities or
    using non-graphical browsers. IE support is out of scope.
2.  **theme selection**: other than the default/light color scheme it should
    have a dark theme and a high-contrast/greyscale theme (to help people with
    color blindness or other visual impairments).
3.  **usability without scripts**: the use of scripts should be limited as
    much as possible and everything should be usable (in some way) with all
    scripts disabled.
4.  **usability without CSS**: the page should render decently without CSS.
5.  **good SEO**
6.  **users' privacy**: no external resources should be used, no cookies and
    no analytics.
7.  **usability with any screen size**
8.  **lightness**: it should also be minifier-friendly
9.  **no external fonts**
10. **faboulousness**

It is okay to sacrifice something that is lower on the list to improve
something that has higher priority.
E.g.
increasing accessibility while decreasing faboulousness is okay,
the opposite is not.

Features
--------

* Theme selection (manual or automatic via prefers-color-scheme and prefers-contrast)
* The high-contrast/greyscale theme also filters images and makes them greyscale.
* [Open Graph](http://ogp.me) support.
* [Twitter Card](https://dev.twitter.com/cards/types/summary) support.
* [Schema.org](http://schema.org) support with articles' structured data for rich results.
* [Sitemap](https://www.sitemaps.org/index.html) support.
* [robots.txt](https://en.wikipedia.org/wiki/Robots.txt) support.
* [RSS](https://www.rssboard.org/rss-specification) and
[ATOM](https://datatracker.ietf.org/doc/html/rfc4287) feeds support.
* Search via DuckDuckGo
* Share buttons
* Code highlight themes for Pygment
* Custom menu
* Social profiles links
* Responsive design
* Footer notice with custom licenses

Footer
------

The footer, by default, includes links to
[Pelican](http://blog.getpelican.com/),
[FontAwesome](https://fontawesome.com/license/free), and this repository.
None of those attributions is legally required.
You can remove them, if you want.
Please do not remove the attribution text in HTML and SVG comments
(the minifier plugin won't remove them).

Contributing
------------

See [CONTRIBUTING.md](CONTRIBUTING.md).

Settings
--------

#### SITENAME

Your site's name. Used as part of titles (e.g. "smeso").

#### AUTHOR

Your name.

#### DOMAIN

Your site's FQDN (e.g. "smeso.it").

#### DESCRIPTION

A brief description of your website. Used for SEO and social networks.

#### SEARCH

Enable search form. Boolean.

#### FAVICON

Absolute path of favicon (e.g. /favicon.png).

#### FAVICON_TYPE

Favicon's MIME type (e.g. "image/png").

#### META_IMAGE

Absolute path of an image used for social networks' preview.
Articles and pages can override this value using "image" metadata.

#### META_IMAGE_TYPE

The MIME type for **META_IMAGE**.

#### SHARE

Enable share buttons. Boolean.

#### SOCIAL

A list of tuples (name, URL).
The name, converted to lower case, is also used as the icon name.
Some icons are already present in `./static/icons/` feel free to
add some more or remove those that you don't need.
You can find more icons
[here](https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs).

E.g.

```python
SOCIAL = (('GitHub', 'https://github.com/smeso'),
          ('Mastodon', 'https://mastodon.social/@smeso'),
          ('Twitter', 'https://twitter.com/smesoraca'),
          ('E-Mail', '/contact'),
          ('OpenPGP', '/openpgp.txt'))
```

#### TWITTER_USERNAME

Your twitter username. Used by Twitter's share button.

#### MENUITEMS

List the items you want in the menu as a list of tuples
(name, absolute URL, actual generated file name).

E.g.

```python
MENUITEMS = [('Home', '/', 'index.html'),
             ('Blog', '/blog/index.html', 'blog/index.html'),
             ('Contact', '/contact', 'contact/index.html')]
```

#### LICENSE_CONTENT

If present, it indicates your website contents' license.

E.g.

```python
LICENSE_CONTENT = {'link': 'http://creativecommons.org/licenses/by-sa/4.0/',
                   'name': 'Creative Commons by-as 4.0 International License'}
```

#### LICENSE_CODE

If present, it indicates the license for code on your website (if different from
your contents' license).

E.g.

```python
LICENSE_CODE = {'link': 'https://www.apache.org/licenses/LICENSE-2.0',
                'name': 'Apache License 2.0'}
```

#### ALLOW_UNSAFE_INLINE_SCRIPT

If true, CSP will allow the use of inline scripts.
This is not needed by theme itself.


Pages and articles metadata
---------------------------

#### repeat_title

Set to `false` to not write the page title in the page body.

#### robots

Set to `none` to prevent search engine from indexing this page.

Antispam
--------

Any element with class `myemail` will be assumed to be an `a` tag
that looks like:

```html
<a href="mailto:ebg13rznvy@rknzcyr.pbz">ebg13rznvy@rknzcyr.pbz</a>
```

where `ebg13rznvy@rknzcyr.pbz` is the e-mail address `rot13email@example.com`
obfuscated via [ROT13](https://it.wikipedia.org/wiki/ROT13).
A small javascript snippet will de-obfuscate it.
This is not a great protection, but hopefully it's enough to confuse the most
naive spambots (which probably represent the 99.99% of the spambots out
there).
Feel free to modify the `rot13` function in `static/js/footer.js` to make
it less naive.
If you use this feature, your are strongly encouraged to add
some text to help people with scripts disabled.

E.g.

```html
<noscript>The address is obfuscated with <a href="https://it.wikipedia.org/wiki/ROT13" target="_blank" rel="nofollow">ROT13</a>.</noscript>
```


Sitemap and robots.txt
----------------------

To generate the sitemap and the robots.txt files you will need to specify
them as direct templates:

```python
DIRECT_TEMPLATES = ('sitemap', 'robots')
SITEMAP_SAVE_AS = 'sitemap.xml'
ROBOTS_SAVE_AS = 'robots.txt'
```

License
-------

[Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)

SVG icons are made by FontAwesome and released under:
https://fontawesome.com/license/free
