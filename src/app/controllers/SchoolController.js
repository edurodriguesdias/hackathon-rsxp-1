import School from '../models/School';
import axios from 'axios';

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

    async searchAvailableSchools(req, res) {

        try {
            const { data } = await axios.get('http://educacao.dadosabertosbr.com/api/escolas', {
                params: {
                    nome: 'josepha pinto chiavelli'
                }
            });

            let schoolData = [];

            if( data ) {
                
                schoolData = data[1].map( (schoolresp) => {

                    if( schoolresp.situacaoFuncionamento == 1){
                        return {
                            schoolId:  schoolresp.cod,
                            schoolName:  schoolresp.nome
                        }
                    }
                });             
            }

        
            return res.status(200).json({ data: schoolData });

        } catch( err ) {
            console.log(err)
            return res.status(500).json({ error: err });
        };
    }
}

export default new SchoolController();
