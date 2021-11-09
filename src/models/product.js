const fs = require('fs');
const path = require('path');
const model = {
    directory: path.join(__dirname, '../data',"products.json"),
    getAll: function(){
        return JSON.parse(fs.readFileSync(this.directory))
    },
    getOne: function(id){
        return this.getAll().find(element => element.id === id)
    },
    getLastID: function(){
        let last = this.getAll();
        let count = last.length;
        let element = count > 0 ? this.getOne(count - 1) : null;
        return element ? element.id : 0;
    },
    generate: function(data){
        return Object({id: this.getLastID() + 1,...data});
    },
    add: function(data){
        let elements = this.getAll();
        elements.push(this.generate(data))
        return elements;
    },
    write: function(data){
        fs.writeFileSync(this.directory,JSON.stringify(data,null,2))
    },
    create: function(data){
        let elements = this.getAll();
        let element = this.generate(data);
        elements.push(element);
        this.write(elements);
        return element;
    },
    update: function(data,id){
        let elements = this.getAll()
        elements = elements.map(function(element){
            if(element.id === id){
                return Object.assign(element,{...data})
            }
            return element
        })
        this.write(elements);
    },
    delete: function(id){
        let elements = this.getAll()
        elements = elements.filter(function(element){
            if(element.id !== id){
                return element 
            }
        })
        this.write(elements);
    }

}
module.exports = model