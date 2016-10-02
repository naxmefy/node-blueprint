---
layout: default
title: Home
permalink: /
nav: true
paginate: 5
weight: 10
---

# @naxmefy/blueprint

## Installation
```shell
$ npm install --global @naxmefy/blueprint
```

## Usage
```shell
// this loads blueprint.yml per default
$ blueprint user/repo

// - or use custom blueprint -

$ blueprint user/repo/my-custom-blueprint.yml
```

## example ``` blueprint.yml ```

```Yaml
npmrc: &npmrc |
save=true
tag-version-prefix=

templates:
  - name: .npmrc
    template: *npmrc

  - name: .gitignore
    url: https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore
```
