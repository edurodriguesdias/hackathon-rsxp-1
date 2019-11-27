import Company from '../models/Company';
import File from '../models/File';

class CompanyController {
    async index(req, res) {
        const companies = await Company.findAll({
            order: ['name'],
            include: [
                {
                    model: File,
                    as: 'logo',
                    attributes: ['name', 'path', 'url'],
                },
            ],
        });

        return res.json(companies);
    }

    async store(req, res) {
        const companyExists = await Company.findOne({
            where: { cnpj: req.body.cnpj },
        });

        if (companyExists) {
            return res.status(200).json({ error: 'Company already exists.' });
        }

        // const { originalname: name, filename: path } = req.file;
        // const file = await File.create({
        //     name,
        //     path,
        // });

        // const company = await Company.create({ ...req.body, logo_id: file.id });

        const company = await Company.create(req.body);

        return res.json(company);
    }
}

export default new CompanyController();
