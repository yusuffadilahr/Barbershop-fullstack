import Booking from "../models/bookingmodels.js";

// Fungsi untuk menambahkan booking baru
export const addBooking = async (req, res) => {
    try {
        const { name, date, service } = req.body;

        // Hitung nomor antrian berikutnya
        const latestBooking = await Booking.findOne({
            order: [["queue_number", "DESC"]],
        });
        const nextQueueNumber = latestBooking ? latestBooking.queue_number + 1 : 1;

        const newBooking = await Booking.create({
            queue_number: nextQueueNumber,
            name,
            date,
            service,
        });

        res.status(201).json(newBooking);
    } catch (error) {
        console.error("Error while adding booking:", error);
        res.status(500).json({ error: "Failed to add booking" });
    }
};

// Fungsi untuk mendapatkan daftar booking
export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({ order: [["queue_number", "ASC"]] });
        res.json(bookings);
    } catch (error) {
        console.error("Error while getting bookings:", error);
        res.status(500).json({ error: "Failed to get bookings" });
    }
};

export const deleteBooking = async (req, res) => {
    try {
        const bookingId = req.params.id;
        // Hapus data pendaftaran kerja dari tabel bookings
        const deletedRowsCount = await Booking.destroy({ where: { id: bookingId } });
        if (deletedRowsCount === 0) {
            return res.status(404).json({ message: 'Booking is not found' });
        }
        res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.error('Error while deleting booking:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};