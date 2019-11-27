import Company from '../models/Company';

class CompanyController {
    async index(req, res) {
        const appointments = await Company.findAll({
            order: ['name'],
        });

        return res.json(appointments);
    }

    async store(req, res) {
        const companyExists = await Company.findOne({
            where: { cnpj: req.body.cnpj },
        });

        if (companyExists) {
            return res.status(200).json({ error: 'Company already exists.' });
        }

        const company = await Company.create(req.body);

        return res.json(company);
    }
}

export default new CompanyController();
