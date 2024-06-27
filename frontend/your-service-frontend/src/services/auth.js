import axios from 'axios';

const baseURL = 'http://localhost:8520'; // URL base do seu backend
const tokenURL = '/api/token/'; // Endpoint para obter o token

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000, // Timeout de 10 segundos (opcional)
  headers: {
    'Content-Type': 'application/json',
  },
});

let authToken = null;

// Função para obter o token
const fetchToken = async () => {
  try {
    const response = await axios.post(`${baseURL}${tokenURL}`, {
      username: 'gabriel',
      password: 'Gremio1903@',
    });
    authToken = response.data.access; // Supondo que o token seja retornado como parte dos dados da resposta
  } catch (error) {
    console.error('Erro ao obter token:', error);
    throw error; // Lança o erro para ser tratado pelo código que chama fetchToken
  }
};

// Interceptador para adicionar o token aos cabeçalhos de todas as requisições
axiosInstance.interceptors.request.use(
  config => {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Chama fetchToken para obter o token assim que este arquivo for importado/executado
fetchToken();

export default axiosInstance;
