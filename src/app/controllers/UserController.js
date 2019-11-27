import User from '../models/User';

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({
            where: { email: req.body.email },
        });

        if (userExists) {
            return res.status(200).json({ error: 'Usuário já cadastrado.' });
        }

        const { id, name, email, type } = await User.create(req.body);

        return res.json({
            id,
            name,
            email,
            type,
        });
    }
}

export default new UserController();
