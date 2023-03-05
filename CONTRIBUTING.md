# Contributing to moneyinpolitics.wtf

The following is a set of guidelines for contributing to this repository and the dictionary of campaign finance jargon at [moneyinpolitics.wtf](https://moneyinpolitics.wtf/).

#### Table Of contents

- [Code of conduct](#code-of-conduct)
- [About this site](#about-this-site)
- [How definitions are stored](#how-definitions-are-stored)
- [Adding a definition](#adding-a-definition)
- [Reporting an error](#reporting-an-error)
- [Installing the repository](#installing-the-repository)

## Code of conduct

This project is governed by a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [b@palewi.re](mailto:b@palewi.re).

## About this site

This site is run by [Ben Welsh](https://palewi.re/who-is-ben-welsh/). You can reach him at [b@palewi.re](mailto:b@palewi.re). It is a static site constructing using the [`baker`](https://github.com/datadesk/baker) framework and published via [GitHub Pages](https://pages.github.com/).

## How definitions are stored

The definitions published by the site are stored in the [`dictionary`](https://github.com/palewire/moneyinpolitics.wtf/blob/main/_data/dictionary) folder in the `_data` directory.

Note that each file’s name ends with `.yaml`. That tells computers that it is expected to contain data structured in YAML format.

[YAML](https://en.wikipedia.org/wiki/YAML) is a data serialization language. It is used to represent data structures in a human-readable and easy-to-write format. YAML stands for “YAML Ain’t Markup Language,” because it is not a markup language like HTML or XML (and because nerds like inventing [silly acronyms](https://en.wikipedia.org/wiki/Backronym).)

YAML is often used for configuration files, data storage and communication between different systems. It is a flexible and powerful language supported by many popular programming languages and tools.

Here is a simple example of a YAML file:

```yaml
# This is a comment

# This is a string
name: Alice

# This is an integer
age: 25

# This is a list
colors:
  - red
  - green
  - blue

# This is a nested object
address:
  street: 123 Main St.
  city: Anytown
  state: CA
  zip: 99999
```

This repository has its own custom data structure expressed in YAML. Here is an example of the fields we allow.

```yaml
word: the word
type: is it a noun, verb or adjective
definition_list:
  - text: this is the first definition of the word
    in_use: this is _the word_ used in a sentence
  - text: this is the second definition of the word
    in_use: this is _the second word_ used in a sentence
```

An example of a simple implementation would look like this:

```yaml
word: contribution
type: noun
definition_list:
  - text: funds, property or other resources given to a campaign
    in_use: "The company's CEO made a contribution of $1,000 to the president's reelection campaign"
```

The definition shoudl be saved in a new file with the same name as the word. The file name should be all lowercase. Any spaces should be replaced with a hyphen.

## Adding a definition

To add a definition, you should add a new YAML file to the [`dictionary`](https://github.com/palewire/moneyinpolitics.wtf/blob/main/_data/dictionary) directory. Our data format is described above.

If you're unfamiliar with GitHub's system for proposing changes, you can follow the [instructions for editing files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files#editing-files-in-another-users-repository). Or you can [create an issue](https://github.com/palewire/moneyinpolitics.wtf/issues/new?assignees=palewire&labels=enhancement&template=add-a-word.yaml&title=Add+a+word) and submit your definition via a form.

## Reporting an error

You can report mistakes and suggest changes to existing definitions by editing the [`dictionary.yaml`](https://github.com/palewire/moneyinpolitics.wtf/blob/main/_data/dictionary.yaml) file or [submitting an issue](https://github.com/palewire/moneyinpolitics.wtf/issues) to our tracker. If you're unable to to utilize those techniques, contact Ben Welsh at [b@palewi.re](mailto:b@palewi.re).

## Installing the repository

First, [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repository. [Clone it](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) on your computer or [open it in GitHub Codespaces](https://docs.github.com/en/codespaces/getting-started/quickstart).

Now ensure the dependencies are installed. You will need [Node.js](https://nodejs.org/en/) version 14.x or above and the [node package manager](<https://en.wikipedia.org/wiki/Npm_(software)>) for this to work.

```bash
npm install
```

Start the test server

```bash
npm start
```

Visit [`localhost:3000`](https://localhost:3000/) in your browser, where you should see the site rendered. As you make changes to the files they should appear on the site. As with any other repository, you can commit your edits, push to your fork and submit a pull request.
