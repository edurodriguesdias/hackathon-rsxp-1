import Students from '../models/Student';
import School from '../models/School';

class StudentsController {
    async store(req, res) {
        const hasStudentEmail = await Students.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (hasStudentEmail) {
            return res
                .status(400)
                .json({ error: 'Estudante já cadastrado em nossa base.' });
        }

        const isPartnerSchool = await School.findOne({
            where: {
                id: req.body.school_id,
            },
        });

        try {
            const schoolId = isPartnerSchool.id;

            const student = await Students.create({
                ...req.body,
                school_id: schoolId,
            });
            return res.json(student);
        } catch (err) {
            return res.status(400).json({ error: err });
        }
    }
}

export default new StudentsController();
