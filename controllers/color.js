const {Colors} = require('../models');

const createColor = async (req, res) => {
    try{
        const {name} = req.body;
        const color = await Colors.findOne({where: {name: name}});
        if (color){
            return res.status(400).json({success: false,message: 'Color exists'});
        }
        await Colors.create({
            name: name
        });
        return res.status(200).json({success: true});
    }catch (err) {
        return res.status(400).json(err);
    }
}
const getColor = async (req, res) => {
    try {
        const colors = await Colors.findAll();
        return res.status(200).json(colors)
    }catch (err) {
        return res.status(400).json(err);
    }
}
module.exports = {
    createColor,
    getColor
}