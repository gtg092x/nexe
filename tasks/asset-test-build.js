'use strict'

const { resolve } = require('path')
const resolvePath = (path) => resolve(__dirname, '..', path)

async function build() {
  const nexe = require('..')
  console.error('Doing test build using asset')
  if (!require('fs').existsSync(process.env.NEXE_ASSET)) {
    console.error(`Pre-built asset not found at ${process.env.NEXE_ASSET}`)
    process.exitCode = 1
    return
  }
  return nexe.compile({
    loglevel: 'verbose',
    python: process.env.PYTHON || 'python',
    build: true,
    sourceUrl: process.env.NODE_SRC || undefined,
    make: process.env.NODE_MAKE ? process.env.NODE_MAKE.split(' ') : undefined,
    output: resolvePath('integration-tests'),
    input: resolvePath('test/integration/index.js'),
    resources: [resolvePath('test/integration'), resolvePath('node_modules')],
    asset: process.env.NEXE_ASSET,
  })
}

build()
