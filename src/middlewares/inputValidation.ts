import {body, validationResult} from 'express-validator'
import {Request, Response, NextFunction} from "express";

export const nameValidation = body('name')
    .isString()
    .isLength({max: 15})

export const descriptionValidation = body('description')
    .isString()
    .isLength({max: 500})

export const websiteUrlValidation = body('websiteUrl')
    .isString()
    .isLength({max: 100})


export const idValidation = body('id').isString()

export const postInputValidation = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res
            .status(400)
            .json({
                errorsMessages: (errors.array({onlyFirstError: true}) as {
                    path: string,
                    msg: string
                }[]).map(x => ({
                    field: x.path,
                    messages: x.msg
                }))
            })

        console.log('no')
        return
    }
    console.log('yes')
    next()
}