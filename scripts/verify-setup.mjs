// scripts/verify-setup.mjs
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const mustExist = [
  'package.json',
  'postcss.config.mjs',
  'tailwind.config.ts',
  'src/app/layout.tsx',
  'src/app/globals.css',
  'src/app/page.tsx',
  'src/types/index.ts',
]

const messages = []
let failed = false

function die(msg) {
  console.error('❌', msg)
  failed = true
}

function ok(msg) {
  console.log('✅', msg)
}

// 1) Files present
for (const file of mustExist) {
  const p = path.join(root, file)
  if (!fs.existsSync(p)) die(`Missing file: ${file}`)
  else ok(`Found: ${file}`)
}

// 2) package.json sanity
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'))

const requiredScripts = ['dev', 'build', 'start', 'lint', 'type-check', 'preflight', 'verify:setup']
for (const s of requiredScripts) {
  if (!pkg.scripts || !pkg.scripts[s]) die(`package.json missing script: ${s}`)
}
if (!pkg.type || pkg.type !== 'module') {
  die(`package.json should set "type": "module"`)
}

const depsToCheck = [
  ['next', '15.'],
  ['react', '19.'],
  ['react-dom', '19.'],
]
for (const [name, startsWith] of depsToCheck) {
  const v =
    (pkg.dependencies && pkg.dependencies[name]) ||
    (pkg.devDependencies && pkg.devDependencies[name])
  if (!v) die(`Missing dependency: ${name}`)
  else if (!v.startsWith('15.') && name === 'next' && !v.startsWith('^15.')) {
    messages.push(`warn: next is ${v}, expected ~15.x`)
  } else if ((name === 'react' || name === 'react-dom') && !v.startsWith('19.')) {
    messages.push(`warn: ${name} is ${v}, expected ~19.x`)
  }
}

// 3) tsconfig paths
const tsconfigPath = path.join(root, 'tsconfig.json')
if (!fs.existsSync(tsconfigPath)) {
  die('Missing file: tsconfig.json')
} else {
  const ts = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'))
  const hasAlias = ts.compilerOptions && ts.compilerOptions.paths && ts.compilerOptions.paths['@/*']
  if (!hasAlias) die(`tsconfig.json missing path alias "@/*": ["./*"]`)
  else ok(`tsconfig paths alias present`)
}

// 4) postcss config correct plugin names
const postcssConfig = fs.readFileSync('postcss.config.mjs', 'utf8')
if (!postcssConfig.includes('"@tailwindcss/postcss"')) {
  die(`postcss.config.mjs must use "@tailwindcss/postcss" plugin`)
}
if (!postcssConfig.includes('autoprefixer')) {
  die(`postcss.config.mjs must include autoprefixer`)
} else {
  ok('postcss plugins look good')
}

// 5) tailwind v4 content glob and export
const tailwindConfig = fs.readFileSync('tailwind.config.ts', 'utf8')
if (!tailwindConfig.includes('content: ["./src/**/*.{ts,tsx}"]')) {
  die(`tailwind.config.ts should include content: ["./src/**/*.{ts,tsx}"]`)
}
if (!tailwindConfig.includes('export default')) {
  die('tailwind.config.ts should use ESM export default')
} else {
  ok('tailwind config looks ESM and content glob present')
}

// 6) globals.css tokens and @config
const globalsCss = fs.readFileSync('src/app/globals.css', 'utf8')
if (!globalsCss.includes('@config "../../tailwind.config.ts";')) {
  die('src/app/globals.css should start with @config "../../tailwind.config.ts";')
}
const tokenKeys = ['--background:', '--foreground:', '--border:', '--ring:']
for (const key of tokenKeys) {
  if (!globalsCss.includes(key)) die(`globals.css missing design token ${key}`)
}
ok('globals.css includes tokens and @config directive')

// 7) types: Coach type exists
const typesIndex = fs.readFileSync('src/types/index.ts', 'utf8')
if (!/export\s+type\s+Coach\s*=/.test(typesIndex)) {
  die('src/types/index.ts must export type Coach')
} else {
  ok('Coach type exported')
}

// 8) .gitignore keeps .env.example tracked
const gi = fs.existsSync('.gitignore') ? fs.readFileSync('.gitignore', 'utf8') : ''
if (!gi.includes('.env') || !gi.includes('!.env.example')) {
  messages.push('warn: .gitignore should ignore .env files but NOT .env.example')
} else {
  ok('.gitignore env rules look good')
}

// 9) Theme deps installed
const hasNextThemes =
  (pkg.dependencies && pkg.dependencies['next-themes']) ||
  (pkg.devDependencies && pkg.devDependencies['next-themes'])
if (!hasNextThemes) die('Missing dependency: next-themes')
const hasLucide =
  (pkg.dependencies && pkg.dependencies['lucide-react']) ||
  (pkg.devDependencies && pkg.devDependencies['lucide-react'])
if (!hasLucide) die('Missing dependency: lucide-react')

// 10) layout imports ThemeProvider and globals.css
const layout = fs.readFileSync('src/app/layout.tsx', 'utf8')
if (!layout.includes('import "./globals.css"')) die('layout.tsx must import "./globals.css"')
if (!layout.includes('ThemeProvider')) die('layout.tsx must use ThemeProvider')
ok('layout.tsx wiring looks correct')

// Summary
messages.forEach((m) => console.warn('ℹ️', m))
if (failed) {
  console.error('\nVerification failed. See ❌ items above.')
  process.exit(1)
} else {
  console.log('\n✅ Setup verified. You are good to go.')
}
