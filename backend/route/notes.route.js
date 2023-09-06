import {
    Router
} from "express";
import {
    prisma
} from "../config/PrismaInstance.js";
const router = Router();

router.route("/").get(async (req, res, next) => {
    try {
        const notes = await prisma.note.findMany([]);
        return res.status(200).json({
            status: "success",
            notes,
        });
    } catch (error) {
        return next(error);
    }
});

router.route("/:note").get(async (req, res, next) => {
    console.log(req.url);
    try {
        const note = await prisma.note.findFirst({
            where: {
                title: req.params.note,
            },
        });
        return res.status(200).json({
            status: "success",
            note,
        });
    } catch (error) {
        return next(error);
    }
});

export default router;