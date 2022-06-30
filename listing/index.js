import fs from 'fs'
import chalk from 'chalk'
import { lstat } from 'node:fs/promises'
import path from 'path'

const targetDir = process.argv[2] || process.cwd()
/* filenames will be a returned array of files and folders in cwd */
fs.readdir(targetDir, async (err, filenames) => {
    if (err) {
        /* error handling code */
        console.log(err)
    }

    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir, filename))
    })

    const allStats = await Promise.all(statPromises)

    for (let stat of allStats) {
        const index = allStats.indexOf(stat)
        if (stat.isFile()) {
            console.log(filenames[index], 'file')
        } else {
            console.log(chalk.red(filenames[index], 'folder'))
        }

    }
})

/* const lstat = (filename) => {
    return new Promise((resolve, reject) => {
        fs.lstat(filename, (err, stats) => {
            if (err) {
                reject(err)
            }
            resolve(stats)
        })
    })
} */

/* Bad code: different console logs each time */
/* for (let filename of filenames) {
    fs.lstat(filename, (err, stats) => {
        if (err) {
            console.log(err)
        }
        console.log(filename, stats.isFile())
    })
} */

/* Solution 1 using callback
 const allStat = Array(filenames.length).fill(null)
 for (let filename of filenames) {
     const index = filenames.indexOf(filename)
 
     fs.lstat(filename, (err, stats) => {
         if (err) {
             console.log(err)
         }
         allStat[index] = stats
 
         const ready = allStat.every((stats) => {
             return stats
         })
 
         if (ready) {
             allStat.forEach((stats, index) => {
                 console.log(filenames[index], stats.isFile())
             })
         }
     })
 
 } */
