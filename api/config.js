// api/config.js
import axios from 'axios';

const API_BASE_URL = 'http://62.72.16.90:3004'
// process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3008';

// Instance axios avec configuration de base
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token d'authentification (si nécessaire)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les réponses et erreurs
apiClient.interceptors.response.use(
  (response) => {
    return response.data; // Retourne directement les données
  },
  (error) => {
    // Gestion des erreurs globales
    console.error('API Error:', error.response?.data || error.message);

    if (error.response?.status === 401) {
      // Token expiré, rediriger vers login
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }

    return Promise.reject(error.response?.data || error);
  }
);

export default apiClient;
