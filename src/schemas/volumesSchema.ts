import Joi from 'joi';

export const NewVolumeSchema = Joi.object({
    serie_name: Joi.string().required(),
    number: Joi.number().required(),
    image: Joi.string().required(),
    total_chapters: Joi.number().required(),
});

export const UpdateVolumeSchema = Joi.object({
    serie_name: Joi.string().required(),
    number: Joi.number().required(),
    status: Joi.string().valid('unread', 'reading', 'read').required(),
    read_chapters: Joi.number().required(),
});

export const FinishedVolumeSchema = Joi.object({
    serie_name: Joi.string().required(),
    number: Joi.number().required(),
    status: Joi.string().valid('unread', 'reading', 'read').required(),
    read_chapters: Joi.number().required(),
    rating: Joi.string().valid('empty', 'zero', 'one', 'two', 'three', 'four', 'five').required(),
    description: Joi.string().required()
});