const Image = require('../../models/image')
let ImageDataAccess = {
    async delete(where) {
        const deleted = await Image.deleteMany(where)
        return deleted
    },
    async update(techModel, where) {
        /*TODO*/
  /*      const updated = await Tech.update(techModel, {where: where})
        /!*return updated*!/
        const tech = await this.all(where)
        return tech[0]*/
    },
    async show(imageId) {
        const image = await Image.findById(imageId)
        return image
    },
    async create(imgList) {
        const images = await Image.insertMany(imgList);
        return images;
    },
    async all(where) {
        const images = await Image.find(where)
        return images
    }
}

module.exports = ImageDataAccess;
