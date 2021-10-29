import axios from "axios";
import { API } from '../configs/api';

export const getAllQuestions = async(accessToken) => {
  return new Promise((resolve, reject) => {
    axios.get(API.questions, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    });
  });
};

export const getQuestionById = async(accessToken, id) => {
  return new Promise((resolve, reject) => {
    axios.get(`${API.questions}/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    });
  });
};

export const saveQuestion = async(accessToken, data) => {
  return new Promise((resolve, reject) => {
    axios.post(API.questions, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject(err);
    });
  });
};
