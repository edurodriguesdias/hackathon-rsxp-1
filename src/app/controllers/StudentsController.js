import axios from 'axios';

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
            return res.status(400).json({ error: 'Student already exists.' });
        }

        const isPartnerSchool = await School.findOne({
            where: {
                school_api_id: req.body.school_id,
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
            console.log('student error', err);
        }
    }

    static async getAvailableSchoolById(schoolId) {
        try {
            const { data } = await axios.get(
                `http://educacao.dadosabertosbr.com/api/escola/${schoolId}`
            );

            return data;
        } catch (err) {
            console.log('api error', err);
        }
    }
}

export default new StudentsController();
