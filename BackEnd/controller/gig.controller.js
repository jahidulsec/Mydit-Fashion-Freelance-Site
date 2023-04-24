import Gig from "../models/gig.model.js"
import createError from "../utils/createError.js"

export const createGig = async(req, res, next) => {
    if( !req.isSeller ) return next(createError(403, "Only sellers can create gig!"))
    
    const newGig = new Gig({
        userId: req.userId,
        ...req.body,
    })
    try {
        const saveGig = await newGig.save()
        res.status(201).json(saveGig)
    } catch (error) {
        next(error)
    }
}

export const deleteGig = async(req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id)

        if(gig.userId !== req.userId) return next(createError(403, "You can delete only your gig!")) 

        await Gig.findByIdAndDelete(req.params.id)
        res.status(200).send("Gig has been deleted!")
    } catch (error) {
        next(error)
    }
}

export const getGig = async(req, res, next) => {
    try {
        const gig = await Gig.findById(req.params.id)

        if (!gig) return next(createError(404, "Gig is not found!"))
        res.status(200).send(gig)
    } catch (error) {
        next(error)
    }
}

export const getGigs = async(req, res, next) => {
    const query = req.query
    const filter = {
        ...(query.userId && {userId: query.userId}),
        ...(query.cat && {cat: {$regex: query.cat, $options: "i"}}),
        ...((query.min || query.max) && {
            ...(query.min && {price: {$gt: query.min}}), ...(query.max && {price: {$lt: query.max}})}),
        ...(query.search && {title: {$regex: query.search, $options: "i"}})
    }
    try {
        const gigs = await Gig.find(filter).sort({[query.sort]: -1})
        res.status(200).send(gigs)
    } catch (error) {
        next(error)
    }
}