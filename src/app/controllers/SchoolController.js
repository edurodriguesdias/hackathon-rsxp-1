import School from '../models/School';

class SchoolController {
    async index(req, res) {
        const schools = await School.findAll({
            order: ['name'],
        });

        return res.json(schools);
    }

    async store(req, res) {
        const school = await School.create(req.body);

        return res.json(school);
    }
}

export default new SchoolController();
