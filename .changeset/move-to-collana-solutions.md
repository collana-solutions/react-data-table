---
"@collana-solutions/react-data-table": patch
---

The package is now published as `@collana-solutions/react-data-table`. The API is unchanged. To migrate, replace the old package with the new one:

```shell
npm uninstall @neolution-ch/react-data-table
npm install @collana-solutions/react-data-table
```

Then change the imports:

```tsx
import { ReactDataTable } from "@collana-solutions/react-data-table";
```

`@neolution-ch/react-data-table` gets deprecated and receives no further releases.

`@dnd-kit/utilities`, which the drag and drop rows already used, is now a declared dependency instead of being bundled into the build.
