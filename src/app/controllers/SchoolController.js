import School from '../models/School';
import Student from '../models/Student';

class SchoolController {
    async index(req, res) {
        School.hasMany(Student, { foreignKey: { id: 'school_id' } });

        const schools = await School.findAll({
            order: ['name'],
            include: [Student],
        });

        return res.json(schools);
    }

    async store(req, res) {
        const school = await School.create(req.body);

        return res.json(school);
    }

    async searchAvailableSchools(req, res) {
        try {
            const schoolData = await School.findAll();

            return res.status(200).json({ data: schoolData });
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    }
}

export default new SchoolController();
