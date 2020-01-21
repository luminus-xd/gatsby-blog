---
title: コードブロックテスト
date: 1900-01-01T11:27:11+09:00
description: コードブロックのテスト
slug: test
tags:
  - テスト
keywords: テスト
---

## コードブロックテスト

コードブロック

### HTML

```html:title=index.html
<article>
  <h2>__article title__</h2>
  <p>__article body__</p>
</article>
```

### SCSS

```scss:title=style.scss
.c-content {
  &__title {
    color: #f9f9f9;
    font-size: 1.42rem;
    font-weight: bold;
    &::after {
      content: "#";
    }
  }
  &__body {
    color: #55697d;
    font-size: 1;
  }
}
```

### TypeScirpt

```ts:title=index.ts
interface User {
  name: string
  age: string
}

const user: User = {
  name: "ELELINE",
  age: 20,
}

const setUser = (user: User) => {
  // ...
}
```

### Rust

```rust:title=hello.rs
fn main() {
    // HELLO WORLD
    println!("Hello, world!");
}
```

### Python

```python:title=hello.py
# HELLO WORLD
print('Hello, world!')
```

### Elm

```elm:title=hello.elm
import Html
main = Html.text "Hell World!"
```
