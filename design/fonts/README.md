# Helvetica webfonts (James Fisher licensed)

These six TTFs are wired into `colors_and_type.css` under the family **`Helvetica JF`**:

| File | Weight | Style |
|------|:---:|:---:|
| `Helvetica-Light-05.ttf`        | 300 | normal |
| `Helvetica-LightOblique-06.ttf` | 300 | italic |
| `Helvetica-01.ttf`              | 400 | normal |
| `Helvetica-Oblique-03.ttf`      | 400 | italic |
| `Helvetica-Bold-02.ttf`         | 700 | normal |
| `Helvetica-BoldOblique-04.ttf`  | 700 | italic |

Consume via the tokens, not the family name directly:

```css
font-family: var(--font-display);   /* headings / marketing */
font-family: var(--font-body);      /* body, UI */
```

Both stacks resolve to `"Helvetica JF"` first, then fall back to Helvetica Neue / Arial on systems that can't load the webfont. Per the June 2025 interim guidelines: **Helvetica for print and marketing, Arial for digital** — this setup honours that while delivering Helvetica on digital surfaces where licensing allows.

> Check your licence before embedding these in externally-distributed artefacts (e.g. self-hosted webfonts on a public site). Internal intranets and PowerPoint export are typically in scope.
