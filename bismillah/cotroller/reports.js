import report from "../models/reportmodels.js";

export const createReport = async(req, res) => {
    try {
        const { name, reportIssue } = req.body;
        const newReport = await report.create({ name, reportIssue });
        res.status(201).json(newReport);
    } catch (error) {
        console.error('Error while saving report:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getReports = async(req, res) => {
    try {
        const reports = await report.findAll();
        res.json(reports)
    } catch (error) {
        console.log(error);
    }
}

export const getReportById = async(req, res) => {
    try {
        const reports = await report.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(reports)
    } catch (error) {
        console.log(error);
    }
}

export const updateReport = async(req, res) => {
    try {
        const reportId = req.params.id;
        const { name, reportIssue } = req.body;
        const [updatedRowsCount, updatedRows] = await report.update({ name, reportIssue }, { where: { id: reportId } });
        if (updatedRowsCount === 0) {
            return res.status(404).json({ message: 'report not found' });
        }
        res.status(200).json({ message: 'report updated successfully' });
    } catch (error) {
        console.error('Error while updating report:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const deleteReport = async(req, res) => {
    try {
        const reportId = req.params.id;
        const deletedRowsCount = await report.destroy({ where: { id: reportId } });
        if (deletedRowsCount === 0) {
            return res.status(404).json({ message: 'report not found' });
        }
        res.status(200).json({ message: 'Laporan dihapus!' });
    }
    catch (error) {
        console.error('Error while deleting report:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


