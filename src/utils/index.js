import axios from "axios";

// save or update user in db
export const saveOrUpdateUser = async (userData) => {
  const { data } = await axios.post(`http://localhost:5000/user`, userData);
  return data;
};

export const loanApplicationUser = async (userLoanData) => {
  const { data } = await axios.post(
    `http://localhost:5000/loanapplication`,
    userLoanData
  );
  return data;
};
