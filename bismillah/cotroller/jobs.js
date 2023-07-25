import Jobs from "../models/jobsmodels.js";

// Create (Menyimpan data pendaftaran kerja)
export const createJob = async (req, res) => {
  try {
    const { name, email, phone, position, experience, cv_path } = req.body;
    // Lakukan validasi input jika diperlukan

    // Simpan data pendaftaran kerja ke dalam tabel jobs
    const newJob = await Jobs.create({ name, email, phone, position, experience, cv_path });
    res.status(201).json(newJob);
  } catch (error) {
    console.error('Error while saving jobs application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getJobs = async (req, res) => {
    try {
        const jobs = await Jobs.findAll();
        res.json(jobs)
    } catch (error) {
        console.log(error);
    }
}

export const getJobById = async (req, res) => {
    try {
        const jobs = await Jobs.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(jobs)
    } catch (error) {
        console.log(error);
    }
}

// Update (Mengupdate data pendaftaran kerja berdasarkan ID)
export const updateJob = async (req, res) => {
  try {
    const jobsId = req.params.id;
    const { name, email, phone, position, experience, cv_path } = req.body;
    // Lakukan validasi input jika diperlukan

    // Update data pendaftaran kerja di tabel jobs
    const [updatedRowsCount, updatedRows] = await Jobs.update(
      { name, email, phone, position, experience, cv_path },
      { where: { id: jobsId } }
    );
    if (updatedRowsCount === 0) {
      return res.status(404).json({ message: 'jobs application not found' });
    }
    res.status(200).json({ message: 'jobs application updated successfully' });
  } catch (error) {
    console.error('Error while updating jobs application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete (Menghapus data pendaftaran kerja berdasarkan ID)
export const deleteJob = async (req, res) => {
  try {
    const jobsId = req.params.id;
    // Hapus data pendaftaran kerja dari tabel jobs
    const deletedRowsCount = await Jobs.destroy({ where: { id: jobsId } });
    if (deletedRowsCount === 0) {
      return res.status(404).json({ message: 'jobs application not found' });
    }
    res.status(200).json({ message: 'jobs application deleted successfully' });
  } catch (error) {
    console.error('Error while deleting jobs application:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};