const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {  getTasks, getUserDashboardData, getTaskById, createTask, updateTask, deleteTask, updateTaskStatus, updateTaskChecklist, getDashboardData } = require("../controllers/taskController");

const router = express.Router();

router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks);
router.get("/:id", protect, getTaskById);
router.post("/", protect, adminOnly, createTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, adminOnly, deleteTask);
router.put("/:id/status". protect, updateTaskStatus);
router.put("/:id/todo". protect, updateTaskChecklist);


module.exports = router;

