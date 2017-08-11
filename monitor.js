function Monitor () {
    this.marks = Object.create(null)
}

Monitor.prototype.start = function (mark) {
    this.marks[mark] = {
        start: Date.now()
    }
}

Monitor.prototype.enddd = function (mark) {
    if (typeof this.marks[mark] === 'object') {
        let time = Date.now() - this.marks[mark]['start']
        console.log(mark +' |' + ' waste: ' + time + ' ms. At' + (new Date).toLocaleString())
    }
}

module.exports = new Monitor()
