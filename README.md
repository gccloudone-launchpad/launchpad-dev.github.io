# GC Cloud One: LaunchPad website

This is the content of the public web prescense for the GC Cloud One: LaunchPad team.

We offer short-term, finantially-bound cloud experimentation spaces, supported by a dedicated advisory team.

Want to know more? Visit this site at [insertLinkHere]!

## How to use

This site is built using [Hugo](https://gohugo.io/), and a theme driven by the [GC Design System](https://design-system.alpha.canada.ca/en/).

To run a development instance you need:

- Go (v1.25.5)
- Hugo (v0.152.2)
- Node.js (24.12.0)

With those foundational dependencies installed, run `npm install` to install the required Node modules.

You should then be able run `hugo serve` and have the site available at [http://localhost:1313](http://localhost:1313).

### VSCode

VSCode is the primary IDE used to work on this site, and it is stronly recommeded to install all extensions specified, as it will make your life easier/better.

There are also a few tasks defined to further make certain tasks automated in the IDE.

- *Start dev server*; starts a local instance, like above, with an extra flag to ensure that draft pages are also built locally.
- *Checks - Pages have translations*; checks that all pages are present in both languages.
- *Checks - Bilingual updates*; checks that that any changed pages, have had changes done in both languages.
- *Checks - Pages that Need Review*; Reports on pages that have `needs-review` shortcodes present.
