import Students from '../models/Student';

class StudentsController {
    async store(req, res) {
        const hasStudentEmail = await Students.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (hasStudentEmail) {
            return res.status(400).json({ error: 'Student already exists.' });
        }

        const student = await Students.create(req.body);

        return res.json(student);
    }
}

export default new StudentsController();
