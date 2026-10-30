# Docstring formats

Use the format already in the codebase. Otherwise use the language standard below. Summary line first, then only what types and names do not already say.

| Language | Standard | Minimal example |
|---|---|---|
| Python | [PEP 257](https://peps.python.org/pep-0257/), Google or NumPy style for args | `"""Return the user's display name, falling back to their email."""` |
| JavaScript | [JSDoc](https://jsdoc.app/) | `/** Format a price in pence as a GBP string. */` |
| TypeScript | [TSDoc](https://tsdoc.org/) | `/** Fetch the current user. Throws AuthError when the session has expired. */` |
| Go | [Go doc comments](https://go.dev/doc/comment) | `// ParseConfig reads a YAML config from r.` |
| Rust | [Rustdoc](https://doc.rust-lang.org/rustdoc/how-to-write-documentation.html) | `/// Returns the tile index at the given world position.` |
| C# | [XML doc comments](https://learn.microsoft.com/dotnet/csharp/language-reference/xmldoc/) | `/// <summary>Spawns the wave and returns its id.</summary>` |
| C++ / Unreal | [Doxygen](https://www.doxygen.nl/manual/docblocks.html), Unreal uses `/** */` | `/** Rebuilds the nav mesh for the given bounds. */` |
| Java / Kotlin | [Javadoc](https://www.oracle.com/technical-resources/articles/java/javadoc-tool.html), [KDoc](https://kotlinlang.org/docs/kotlin-doc.html) | `/** Returns true if the order can still be cancelled. */` |
| Swift | [Swift markup](https://www.swift.org/documentation/docc/writing-symbol-documentation-in-your-source-files) | `/// Loads cached images from disk.` |
| PHP | [PHPDoc](https://docs.phpdoc.org/guide/getting-started/what-is-a-docblock.html) | `/** Send the invoice email to the client. */` |
| Shell | Comment above the function | `# Print usage and exit 1.` |

Add parameter, return and error tags only when they add information: units, allowed ranges, side effects, what is thrown and when.
