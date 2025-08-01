# Yadamzer Comment Tools

A CLI tool to hide and unhide developer comments in React + TypeScript projects. Perfect for keeping code clean for production/demo while preserving full comment documentation for recruiters and future developers.

## Features

- 🔒 **Hide Comments**: Replace tagged comments with unique identifiers
- 🔓 **Unhide Comments**: Restore original comments from cache
- 📋 **Status Check**: View all hidden comments and their locations
- 🎯 **Line-specific Operations**: Target specific lines or comment IDs
- 💾 **Persistent Cache**: Store original comments in `.comment-cache.json`
- 📝 **Multi-line Comments**: Hide entire comment blocks that start with `@dev:` or `@hideable:`

## Installation

### Global Installation (Recommended)

```bash
npm install -g yadamzer-comment-tools
```

### Local Installation

```bash
npm install --save-dev yadamzer-comment-tools
```

## Quick Start

```bash
# Hide all tagged comments in a file
comment-tools hide src/components/MyComponent.tsx

# Unhide all hidden comments
comment-tools unhide src/components/MyComponent.tsx

# Check status of hidden comments
comment-tools status
```

## Supported Comment Tags

The tool recognizes comments tagged with:

- `// @dev: Your comment here`
- `// @hideable: Your comment here`

### Multi-line Comment Support

The tool can hide entire comment blocks that start with `@dev:` or `@hideable:`. It will continue hiding subsequent comment lines until it encounters a non-comment line.

**Supported comment line formats:**

- `//` - Single-line comments
- `/*` - Block comment start
- `*/` - Block comment end
- `*` - Block comment continuation

**Example:**

```typescript
// @dev: This is a multi-line comment block
// that spans multiple lines
// and includes various comment formats
/*
 * This is a block comment
 * that continues the multi-line comment
 */
// This line is also part of the comment block
// until we reach the function declaration

function MyComponent() {
  // This function will be visible
}
```

## Usage

### Hide Comments

```bash
# Hide all tagged comments in a file
comment-tools hide src/components/Editor/Canvas.tsx

# Hide specific comment by line number
comment-tools hide src/components/Editor/Canvas.tsx --line 42
```

### Unhide Comments

```bash
# Unhide all hidden comments in a file
comment-tools unhide src/components/Editor/Canvas.tsx

# Unhide specific comment by line number
comment-tools unhide src/components/Editor/Canvas.tsx --line 42

# Unhide specific comment by ID
comment-tools unhide src/components/Editor/Canvas.tsx --id yct:abc123
```

### Check Status

```bash
# Show all hidden comments
comment-tools status

# Show hidden comments for specific file
comment-tools status src/components/Editor/Canvas.tsx
```

## How It Works

### Hide Process

1. Scans file for comments tagged with `@dev:` or `@hideable:`
2. For multi-line comments: continues until non-comment line is found
3. Generates unique ID (e.g., `yct:abc123`)
4. Replaces comment block with: `// [comment hidden - yct:abc123]`
5. Stores original comment in `.comment-cache.json`

### Unhide Process

1. Scans file for hidden markers: `// [comment hidden - yct:abc123]`
2. Looks up original comment in cache
3. Replaces marker with original comment (restores multi-line structure)
4. Removes entry from cache

## Cache File Structure

```json
{
  "src/components/Editor/Canvas.tsx": {
    "yct:df129e": "// @dev: Drag logic for shapes",
    "yct:a8b34f": "// @hideable: Element resize setup",
    "yct:multi123": "// @dev: Multi-line comment\n// Second line\n// Third line"
  }
}
```

## Development

### Build

```bash
npm run build
```

### Development Mode

```bash
npm run dev
```

### Test with Sample Files

```bash
# Build the project
npm run build

# Test hiding comments
node dist/index.js hide sample-component.tsx
node dist/index.js hide test-multiline.tsx

# Test unhiding comments
node dist/index.js unhide sample-component.tsx
node dist/index.js unhide test-multiline.tsx

# Check status
node dist/index.js status
```

## Example

**Before hiding:**

```typescript
// @dev: This component handles the main canvas functionality
// with multi-line support
// and various comment formats
/*
 * Block comments are also supported
 */
function Canvas() {
  // @hideable: Initialize canvas context
  // and set up event listeners
  useEffect(() => {
    // ... code
  }, []);
}
```

**After hiding:**

```typescript
// [comment hidden - yct:abc123]
function Canvas() {
  // [comment hidden - yct:def456]
  useEffect(() => {
    // ... code
  }, []);
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT

## Support

If you find this tool helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- �� Contributing code
