import multer from 'multer';
import crypto from 'crypto';
import { promisify } from 'util';
import { extname, resolve } from 'path';

export default {
    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: async (req, file, cb) => {
            try {
                const randomBytes = await promisify(crypto.randomBytes)(16);

                return cb(
                    null,
                    randomBytes.toString('hex') + extname(file.originalname)
                );
            } catch (err) {
                return cb(err);
            }
        },
    }),
};
