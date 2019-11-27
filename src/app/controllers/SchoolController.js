import axios from 'axios';

import School from '../models/School';
import Student from '../models/Student';

class SchoolController {
    async index(req, res) {
        School.hasMany(Student, { foreignKey: 'id' });

        const schools = await School.findAll({
            order: ['name'],
        });

        return res.json(schools);
    }

    async store(req, res) {
        const school = await School.create(req.body);

        return res.json(school);
    }

    async searchAvailableSchools(req, res) {
        try {
            let schoolData;

            const { data } = await axios.get(
                'http://educacao.dadosabertosbr.com/api/escolas',
                {
                    params: {
                        nome: req.params.escola,
                    },
                }
            );

            if (data) {
                schoolData = data[1].map(schoolresp => {
                    if (schoolresp.situacaoFuncionamento === 1) {
                        return {
                            schoolId: schoolresp.cod,
                            schoolName: `${schoolresp.nome} (${schoolresp.cidade}/${schoolresp.estado})`,
                        };
                    }
                    return res.status(400).json({ error: {} });
                });
            }

            return res.status(200).json({ data: schoolData });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: err });
        }
    }
}

export default new SchoolController();
