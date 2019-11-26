import School from '../models/School';

class SchoolController {
    async store(req, res) {
        const school = await School.create(req.body);

        return res.json(school);
    }
}

export default new SchoolController();
