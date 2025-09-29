// api/clients.js
import apiClient from './config';

/**
 * Créer ou mettre à jour un client
 * @param {Object} clientData - Données du client
 * @param {string} clientData.email - Email du client (obligatoire)
 * @param {string} [clientData.name] - Nom du client
 * @param {string} [clientData.phone] - Téléphone du client
 * @param {string} [clientData.source] - Source du client (newsletter, contact_form, etc.)
 * @param {string} [clientData.status] - Statut du client
 * @param {string} [clientData.notes] - Notes sur le client
 * @returns {Promise<Object>} Réponse de l'API
 */
export const saveClient = async (clientData) => {
    try {
        // Validation côté client
        if (!clientData.email) {
            throw new Error('L\'email est obligatoire');
        }

        if (clientData.email && !isValidEmail(clientData.email)) {
            throw new Error('Format d\'email invalide');
        }

        const response = await apiClient.post('/api/business/clients', {
            email: clientData.email,
            name: clientData.name || null,
            phone: clientData.phone || null,
            source: clientData.source || 'manual',
            status: clientData.status || 'prospect',
            notes: clientData.notes || null,
        });

        return response.data;

        
    } catch (error) {
        console.error('Erreur lors de la sauvegarde du client:', error);

        return {
            success: false,
            error: error.message || 'Erreur lors de la sauvegarde du client',
            code: error.code || 'CLIENT_SAVE_ERROR'
        };
    }
};

/**
 * Inscription à la newsletter
 * @param {string} email - Email pour la newsletter
 * @returns {Promise<Object>} Réponse de l'API
 */
export const subscribeToNewsletter = async (email) => {
    try {
        if (!email || !isValidEmail(email)) {
            throw new Error('Email valide requis');
        }

        const response = await apiClient.post('/api/business/newsletter/subscribe', {
            email: email.trim().toLowerCase()
        });

        return response.data;

    } catch (error) {
        console.error('Erreur inscription newsletter:', error);

        return {
            success: false,
            error: error.message || 'Erreur lors de l\'inscription',
            code: error.code || 'NEWSLETTER_ERROR'
        };
    }
};

/**
 * Récupérer tous les clients avec pagination
 * @param {number} [page=1] - Numéro de page
 * @param {number} [limit=10] - Nombre d'éléments par page
 * @returns {Promise<Object>} Liste des clients
 */
export const getClients = async (page = 1, limit = 10) => {
    try {
        const response = await apiClient.get('/api/business/clients', {
            params: { page, limit }
        });

        return response.data;

    } catch (error) {
        console.error('Erreur récupération clients:', error);

        return {
            success: false,
            error: error.message || 'Erreur lors de la récupération des clients'
        };
    }
};

/**
 * Récupérer un client par ID
 * @param {number} clientId - ID du client
 * @returns {Promise<Object>} Données du client
 */
export const getClientById = async (clientId) => {
    try {
        if (!clientId) {
            throw new Error('ID du client requis');
        }

        const response = await apiClient.get(`/api/business/clients/${clientId}`);

        return response.data;

    } catch (error) {
        console.error('Erreur récupération client:', error);

        return {
            success: false,
            error: error.message || 'Client introuvable'
        };
    }
};

// Fonction utilitaire pour valider l'email
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
