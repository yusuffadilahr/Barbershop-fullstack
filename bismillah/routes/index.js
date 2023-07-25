import  express  from "express";
import { getusers, Register, Login, Logout } from "../cotroller/users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../cotroller/refreshToken.js";
import { createJob, getJobs, deleteJob, updateJob, getJobById, } from "../cotroller/jobs.js";
import { createReport, getReports, getReportById, updateReport, deleteReport } from "../cotroller/reports.js";
import { addBooking, deleteBooking, getBookings } from "../cotroller/bookings.js";

const router = express.Router();

router.get("/users", verifyToken, getusers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

// Tambahkan endpoint untuk pendaftaran kerja
router.post("/jobs", createJob);
router.get("/jobs", getJobs);
router.get("/jobs/:id", getJobById);
router.delete("/jobs/:id", deleteJob);
router.put("/jobs/:id", updateJob);

//Menambahkan Endpoint Report
router.post("/reports", createReport);
router.get("/reports", getReports);
router.get("/reports/:id", getReportById);
router.put("/reports/:id", updateReport);
router.delete("/reports/:id", deleteReport);

//
router.post("/bookingsform", addBooking);
router.get("/bookingsform", getBookings);
router.delete("/bookingsform/:id", deleteBooking);   

export default router;