const myList = document.querySelector('#myList')

class Listbinding {
    constructor(element) {
        this.listElement = element
        this.textList = []
    }
    /* static method that makes li tags with text */
    static createListItem(text) {
        let newLi = document.createElement('li')
        newLi.innerText = text
        return newLi
    }

    update() {
        /* Remove all existing li tags first */
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild)
        }
        /* Fill ul with newly created li tags */
        for (const text of this.textList) {
            this.listElement.appendChild(Listbinding.createListItem(text)) /* static method requires use of Listbinding */

        }

    }

    /*  add method add to the array and call update to*/
    add(text) {
        this.textList.push(text)
        this.update()
    }

    /* remove an item from index of this.textList array */
    remove(index) {
        this.textList.splice(index, 1)
        this.update()
    }

}

const ListbindingTest = new Listbinding(myList)
ListbindingTest.add('mama')
ListbindingTest.add('kaja')
ListbindingTest.add('leo')
ListbindingTest.add('leo')
ListbindingTest.remove(0)
