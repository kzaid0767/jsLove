#!/usr/bin/env node
/* chokidar a packaget to detect file changes */
/* Caporal a package that generates help/usage instructions */
/* lodash.debounce */
/* node childprocess spawn: ask a program to open another program */

import debounce from 'lodash.debounce'
import chokidar from 'chokidar'
import program from 'caporal'
import fs from 'node:fs/promises'
import { spawn } from 'node:child_process'


program
    .version('0.0.1')
    .argument('[filename]', 'Name of a file to execute')
    .action(async ({ filename }) => {
        const name = filename || 'index.js'

        try {
            await fs.promises.access(name)
        } catch (error) {
            throw new Error(`Could not find the file ${name}`)
        }

        const start = debounce(() => {
            spawn('node', [name], { stdio: 'inherit' })
        }, 100)

        chokidar
            .watch('.')
            .on('add', start)
            .on('change', start)
            .on('unlink', start)
    })

program.parse(process.argv)

