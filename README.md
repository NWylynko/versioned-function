## versioned-function

```typescript
import { versioned } from "versioned-function";

// --- define our functions ---

const { matcher } = versioned({
  "0.0.0": () => ({ crazy: "world" }),
  "1.0.0": () => ({ yea: "nah" }),
  "2.0.0": (name: string) => ({ hello: name }),
});

// export it out for others to use
export const MyFunction = matcher

// --- consumer ---

// here we pass in the version that we want
const oldFunction = MyFunction("0.0.0")
const latestFunction = MyFunction("1.0.0")
const nextFunction = MyFunction("2.0.0")

oldFunction() // { crazy: "world" }
latestFunction() // { yea: "nah" }
nextFunction("nick") // { hello: "nick" }
```