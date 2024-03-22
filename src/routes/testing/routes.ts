import {Router} from "express";
import {deleteDb} from "../../controllers/testing/deleteDb";
import {SETTINGS} from "../../settings";

export const testingRouter = Router()

testingRouter.delete(`${SETTINGS.PATH.TESTING}/all-data`, deleteDb)