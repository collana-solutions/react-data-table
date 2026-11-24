---
"@collana-solutions/react-data-table": major
---

The peer dependency `@neolution-ch/reactstrap` is replaced by `@collana-solutions/reactstrap` (`^10.0.2`). It is the same reactstrap fork with React 19 support, published under its new name. The components, hooks and props of this package are unchanged.

To upgrade, install the new package in place of the old one:

```sh
npm uninstall @neolution-ch/reactstrap
npm install @collana-solutions/reactstrap
```

Then switch the reactstrap imports in your own code to the new name. Before:

```ts
import { Button } from "@neolution-ch/reactstrap";
```

After:

```ts
import { Button } from "@collana-solutions/reactstrap";
```

The dependencies `@neolution-ch/react-pattern-ui` and `@neolution-ch/javascript-utils` are replaced by `@collana-solutions/react-pattern-ui` 7.0.0 and `@collana-solutions/javascript-utils` 2.6.2. They are installed with this package, so there is nothing to change for them. If your app also uses `@neolution-ch/react-pattern-ui` directly, move it to `@collana-solutions/react-pattern-ui` 7.0.0 in the same step, because it needs the same reactstrap package.
