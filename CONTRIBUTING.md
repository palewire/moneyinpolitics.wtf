# Contributing to moneyinpolitics.wtf

The following is a set of guidelines for contributing to this repository and the dictionary of campaign finance jargon at [moneyinpolitics.wtf](https://moneyinpolitics.wtf/).

#### Table Of contents

- [Code of conduct](#code-of-conduct)
- [About this site](#about-this-site)
- [How definitions are stored](#how-definitions-are-stored)

## Code of conduct

This project is governed by a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [b@palewi.re](mailto:b@palewi.re).

## About this site

This site is run by [Ben Welsh](https://palewi.re/who-is-ben-welsh/). You can reach him at [b@palewi.re](mailto:b@palewi.re). It is a static site constructing using the [`baker`](https://github.com/datadesk/baker) framework and published via [GitHub Pages](https://pages.github.com/).

## How definitions are stored

The definitions published by the site are stored in the [`dictionary.yaml`](https://github.com/palewire/moneyinpolitics.wtf/blob/main/_data/dictionary.yaml) file in the `_data` directory.

Note that each file’s name ends with `.yaml`. That tells computers that the file is expected to contain data structured in YAML format.

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
- word: the word
  type: is it a noun, verb or adjective
  definition_list:
    - text: this is the first definition of the word
      in_use: this is _the word_ used in a sentence
    - text: this is the second definition of the word
      in_use: this is _the second word_ used in a sentence
```

An example of a simple implementation would look like this:

```yaml
- word: contribution
  type: noun
  definition_list:
    - text: funds, property or other resources given to a campaign
      in_use: "The company's CEO made a contribution of $1,000 to the president's reelection campaign"
```

## Adding a definition

To add a definition, you should edit the [`dictionary.yaml`](https://github.com/palewire/moneyinpolitics.wtf/blob/main/_data/dictionary.yaml) file and add a new YAML entry to the file. The only technical requirement is that it appear indented by two spaces below the `word_list` variable defined in the first line.

If you're unfamiliar with GitHub's system for proposing changes, you can follow the [instructions for editing files](https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files#editing-files-in-another-users-repository). Or you can [create an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue) in [our issue tracker](https://github.com/palewire/moneyinpolitics.wtf/issues) and submit your definition in the text box.

## Reporting an error

You can report mistakes and suggest changes to existing definitions by editing the [`dictionary.yaml`](https://github.com/palewire/moneyinpolitics.wtf/blob/main/_data/dictionary.yaml) file or [submitting an issue](https://github.com/palewire/moneyinpolitics.wtf/issues) to our tracker. If you're unable to to utilize those techniques, contact Ben Welsh at [b@palewi.re](mailto:b@palewi.re).
