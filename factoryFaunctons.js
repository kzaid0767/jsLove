function hex(r, g, b) {           //converts rgb color to hex color
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

function rgb(r, g, b) {
    return `rgb(${r},${g},${b})`
}

function makeColor(r, g, b) {
    const color = {}
    color.r = r
    color.g = g
    color.b = b
    color.rgb = function () {
        const { r, g, b } = this                //destructure r,g,b from this so as to be used in the next line
        return `rgb(${r},${g},${b})`
    }
    color.hex = function () {
        const { r, g, b } = this
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
    return color
}

const firstColor = makeColor(35, 255, 150)

function Color(r, g, b) {         //constructor function
    this.r = r
    this.g = g
    this.b = b
}

Color.prototype.rgb = function () {
    const { r, g, b } = this                //destructure r,g,b from this so as to be used in the next line
    return `rgb(${r},${g},${b})`
}

Color.prototype.hex = function () {
    const { r, g, b } = this
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this
    return `rgba(${r},${g},${b},${a})`
}

const color1 = new Color(145, 255, 90)
const color2 = new Color(54, 76, 9)
// color1.hex === color2.hex
document.body.style.backgroundColor = color1.rgba(0.95)

