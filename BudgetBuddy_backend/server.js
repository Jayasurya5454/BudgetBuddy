import express from 'express';
import cors from 'cors';
import dbconnect from './db/mongodbconnect.js';
import { saveNewUser } from './controller/userController.js';
import { deleteBudget, fetchBudgetsByUserId, saveNewBudget, updateBudget } from './controller/budgetController.js';
import { deleteExpense, fetchExpenses, fetchRecentExpenses, saveNewExpense, updateExpense } from './controller/expenseController.js';
import { fetchDashboard } from './controller/dashboard.js';
import { generateReport, getBudgetById } from './controller/Report.js';
import { addReminder } from './controller/remaindercontroller.js';

const app = express();
const port = process.env.PORT || 3000; 
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017"; 

app.use(cors());
app.use(express.json());

// Connect to MongoDB
dbconnect(mongoURI);

// Define routes
app.post('/api/saveUser', saveNewUser);
app.post('/api/addbudget', saveNewBudget);
app.get('/api/getbudgets', fetchBudgetsByUserId);
app.post('/api/addexpense', saveNewExpense);
app.get('/api/getexpenses', fetchExpenses);
app.get('/api/getlatestexpenses', fetchRecentExpenses);
app.get('/api/getDashBoardData', fetchDashboard);
app.get('/api/getexpensesinrange', generateReport);
app.get('/api/getbudgetdata', getBudgetById);
app.put('/api/updatebudget/:budgetId', updateBudget);
app.delete('/api/deletebudget/:budgetId', deleteBudget);
app.put('/api/updateexpense/:expenseId', updateExpense);
app.delete('/api/deleteexpense/:expenseId', deleteExpense);
app.post('/api/remainders', addReminder);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
