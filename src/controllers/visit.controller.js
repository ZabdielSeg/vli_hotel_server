import { VisitSchema } from "../models/VisitModel.js";

export const getAllVisits = async (req, res) => {
    try {
        const allVisits = await VisitSchema.findAll({
            order: [['fecha_y_hora', 'DESC']]
        })

        return res.status(200).json(allVisits)
    } catch (error) {
        return res.status(500).json({ errorMessage: error.message })
    }
}

export const createVisit = async (req, res) => {
    const { nombre_del_visitante, visita_con, fecha_y_hora, status, tipo_de_visitante } = req.body

    if(!nombre_del_visitante || !tipo_de_visitante) return res.status(400).json({ errorMessage: 'Favor de llenar los campos'})
    
    try {
        const newVisit = await VisitSchema.create({
            nombre_del_visitante, 
            visita_con, 
            fecha_y_hora, 
            status,
            tipo_de_visitante
        });

        return res.status(201).json(newVisit)
    } catch (error) {
        return res.status(500).json({ errorMessage: error.message })
    }
}

export const updateStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const findVisit = await VisitSchema.findByPk(id);
        if(!findVisit) return res.status(404).json({ errorMessage: 'No se encontró registro' });

        findVisit.status = status;

        await findVisit.save();

        return res.status(200).json(findVisit);
    } catch (error) {
        return res.status(500).json({ errorMessage: error.message })
    }
}