import axios from "axios";

// save or update user in db
export const saveOrUpdateUser = async (userData) => {
  const { data } = await axios.post(
    `https://backend-bay-tau-10.vercel.app/user`,
    userData
  );
  return data;
};

export const loanApplicationUser = async (userLoanData) => {
  const { data } = await axios.post(
    `https://backend-bay-tau-10.vercel.app/loanapplication`,
    userLoanData
  );
  return data;
};
