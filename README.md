## Quickstart

[Basic syntax guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)  
[Another basic syntax guide](https://www.markdownguide.org/basic-syntax/)

## Overview

This project generates HTML for https://www.marialoni.org

The most important directories and files are:
- **content** All content (web text and bibliographies) goes here
- **resources** All resources (pdfs) go here
- **_include/contact.md** contact information

After initial setup (see below) changes are done in three steps:
1. **Make changes** by editing content and/or adding resources.  
    Content pages are written in Markdown, see the [basic syntax guide](https://www.markdownguide.org/basic-syntax/) for a quick overview. **Note** It is not mandatory to use Markdown, it is also fine to just write plain HTML. With some restrictions it is even possible to mix the two in one file.
2. **Preview:** in a terminal type `jekyll serve` and go to http://localhost:4000/.  
    It is not mandatory but recommended to do a preview before publishing because it is possible that a small unnoticed typo causes the site generation to fail after which your changes will not be published. 
3. **Publish**  is automated after pushing or merging to the default (`main`) branch  
    This will take care that your changes are made public.

## Local setup

This site
- is deployed using [GitHub Pages](https://pages.github.com/)
- uses [Jekyll](https://jekyllrb.com/) as web framework
- uses [Jekyll-Scholar](https://github.com/inukshuk/jekyll-scholar#readme), a Jekyll extension for parsing BibTex files.

#### System wide setup, one time only, as user with administrator privileges.
- [Install Homebrew](https://brew.sh/)
- Use Homebrew to [install Git](https://git-scm.com/download/mac)
- Use Homebrew to [install Rbenv](https://github.com/rbenv/rbenv#installation)

For Linux the equivalent using apt, yum, emerge etc.

#### System setup, one time only, as regular user.
- Use Rbenv to [install Ruby](https://github.com/rbenv/rbenv#installing-ruby-versions) (version 2.6 or higher)
- Use Ruby to [install Bundler](https://github.com/rbenv/rbenv#installing-ruby-gems)

#### Project setup, as regular user.
- Use Git to [clone https://github.com/marialoni/site](https://github.com/marialoni/site)
- Use Bundler to [download project dependencies](https://bundler.io/man/bundle-install.1.html)

If all went well you can now run `jekyll serve` and see the result on [http://localhost:4000](http://localhost:4000)

