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
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017'; // Use environment variable

app.use(cors());
app.use(express.json());

// Connect to MongoDB
dbconnect(mongoURI);

// Define routes
app.post('/saveUser', saveNewUser);
app.post('/addbudget', saveNewBudget);
app.get('/getbudgets', fetchBudgetsByUserId);
app.post('/addexpense', saveNewExpense);
app.get('/getexpenses', fetchExpenses);
app.get('/getlatestexpenses', fetchRecentExpenses);
app.get('/getDashBoardData', fetchDashboard);
app.get('/getexpensesinrange', generateReport);
app.get('/getbudgetdata', getBudgetById);
app.put('/updatebudget/:budgetId', updateBudget);
app.delete('/deletebudget/:budgetId', deleteBudget);
app.put('/updateexpense/:expenseId', updateExpense);
app.delete('/deleteexpense/:expenseId', deleteExpense);
app.post('/remainders', addReminder);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
