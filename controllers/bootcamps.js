const Bootcamp = require('../models/Bootcamp');

// @desc     Get all bootcamps
// @route    GET /api/v1/bootcamps
// @access   Public

exports.getBootcamps = async (req, res, next) => {
   try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({
        success: true,
        data: bootcamps
    })
   } catch (error) {
       res.status(400).json({
           success: false,
           msg: "error"
       })
   }
    
    // res
    //    .status(200)
    //    .json({succes: true, msg: 'show all bootcamps'});
}

// @desc     Get single bootcamps
// @route    GET /api/v1/bootcamps/:id
// @access   Public

exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id);

        if(!bootcamp) {
            res.status(400).json({
                success: false,
            })
        }

        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
    // res
    // .status(200)
    // .json({ success: true, msg: `show bootcamps ${req.params.id}`});
}

// @desc     create bootcamps
// @route    POST /api/v1/bootcamps/
// @access   Private

exports.createBootcamp= async (req, res, next) => {
    // console.log(req.body);
    // res.status(200).json({
    //     success: true,
    //     msg: 'bootcamp created'
    // })

    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
        success: true,
        data: bootcamp
    });
}

// @desc     Update bootcamp
// @route    PUT /api/v1/bootcamps/:id
// @access   Private

exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
    
        if(!bootcamp) {
            return res.status(400).json({
                success: false
            });
        }
    
        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
    // res
    // .status(200)
    // .json({ success: true, msg: `update bootcamp ${req.params.id}`});
}

// @desc     Delete bootcamp
// @route    DELETE /api/v1/bootcamps/:id
// @access   Private

exports.deleteBootcamp = async (req, res, next) => {

    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id, req.body);
    
        if(!bootcamp) {
            return res.status(400).json({
                success: false
            });
        }
    
        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        res.status(400).json({
            success: false
        })
    }
    // res
    //     .status(200)
    //     .json({ success: true, msg: `delete bootcamp ${req.params.id}`});
}