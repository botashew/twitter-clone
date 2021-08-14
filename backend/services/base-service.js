module.exports = class Service{

    async findAll(){
        return this.model.find()
    }

    async add(item){
        return this.model.create(item)
    }

    async findById(itemId){
        return this.model.findById(itemId)
    }

    async findOne(obj){
        return this.model.findOne(obj)
    }
}