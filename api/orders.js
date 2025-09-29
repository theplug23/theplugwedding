// api/orders.js
import apiClient from './config';

/**
 * Créer une nouvelle commande
 * @param {Object} orderData - Données de la commande
 * @param {number} orderData.clientId - ID du client
 * @param {string} orderData.serviceType - Type de service (photography, videography, both)
 * @param {string} orderData.description - Description/message du client
 * @param {string} [orderData.eventDate] - Date de l'événement (ISO string)
 * @param {number} [orderData.duration] - Durée en heures
 * @param {Array} [orderData.items] - Items de la commande
 * @returns {Promise<Object>} Réponse de l'API
 */
export const createOrder = async (orderData) => {
    try {
        // Validation des données obligatoires
        if (!orderData.clientId) {
            throw new Error('ID du client requis');
        }

        if (!orderData.serviceType) {
            throw new Error('Type de service requis');
        }

        if (!orderData.description) {
            throw new Error('Description requis');
        }

        // Validation du type de service
        const validServiceTypes = ['photography', 'videography', 'both'];
        if (!validServiceTypes.includes(orderData.serviceType)) {
            throw new Error('Type de service invalide');
        }

        // Préparation des données
        const orderPayload = {
            clientId: parseInt(orderData.clientId),
            serviceType: orderData.serviceType,
            description: orderData.description.trim(),
            eventDate: orderData.eventDate ? new Date(orderData.eventDate).toISOString() : null,
            duration: orderData.duration ? parseInt(orderData.duration) : null,
            items: orderData.items || []
        };

        // Validation des items si présents
        if (orderPayload.items.length > 0) {
            for (let i = 0; i < orderPayload.items.length; i++) {
                const item = orderPayload.items[i];
                if (!item.label || !item.unitPrice) {
                    throw new Error(`Item ${i + 1}: libellé et prix unitaire requis`);
                }

                // S'assurer que les prix sont des nombres
                orderPayload.items[i].unitPrice = parseFloat(item.unitPrice);
                orderPayload.items[i].quantity = parseInt(item.quantity) || 1;
            }
        }

        const response = await apiClient.post('/api/business/orders', orderPayload);

        return response.data;

    } catch (error) {
        console.error('Erreur création commande:', error);

        return {
            success: false,
            error: error.message || 'Erreur lors de la création de la commande',
            code: error.code || 'ORDER_CREATE_ERROR'
        };
    }
};

/**
 * Formulaire de contact avec création automatique de client et commande
 * @param {Object} contactData - Données du formulaire de contact
 * @param {string} contactData.name - Nom du client
 * @param {string} contactData.email - Email du client
 * @param {string} [contactData.phone] - Téléphone du client
 * @param {string} contactData.service - Type de service demandé
 * @param {string} contactData.message - Message du client
 * @param {string} [contactData.eventDate] - Date souhaitée pour l'événement
 * @param {number} [contactData.duration] - Durée estimée
 * @param {Object} [contactData.orderDetails] - details de commande
 * @param {number} [contactData.total] - Cout estimée
 * @returns {Promise<Object>} Réponse de l'API
 */
export const submitContactForm = async (contactData) => {
    try {
        // Validation des données obligatoires
        if (!contactData.name || !contactData.email || !contactData.message) {
            throw new Error('Nom, email et message sont obligatoires');
        }

        if (!isValidEmail(contactData.email)) {
            throw new Error('Format d\'email invalide');
        }
        const contactPayload = {
            name: contactData.name.trim(),
            email: contactData.email.trim().toLowerCase(),
            phone: contactData.phone?.trim() || null,
            service: contactData.service,
            message: contactData.message.trim(),
            eventDate: contactData.eventDate ? new Date(contactData.eventDate).toISOString() : null,
            duration: contactData.duration ? parseInt(contactData.duration) : null,
            orderDetails: contactData.total != 0 ? contactData.orderDetails : null,
            totalAmount: contactData.total

        };

        const response = await apiClient.post('/api/business/contact', contactPayload);

        return response.data

    } catch (error) {
        console.error('Erreur formulaire de contact:', error);

        return {
            success: false,
            error: error.message || 'Erreur lors de l\'envoi du message',
            code: error.code || 'CONTACT_ERROR'
        };
    }
};

/**
 * Récupérer toutes les commandes avec pagination
 * @param {number} [page=1] - Numéro de page
 * @param {number} [limit=10] - Nombre d'éléments par page
 * @returns {Promise<Object>} Liste des commandes
 */
export const getOrders = async (page = 1, limit = 10) => {
    try {
        const response = await apiClient.get('/api/business/orders', {
            params: { page, limit }
        });

        return response.data;

    } catch (error) {
        console.error('Erreur récupération commandes:', error);

        return {
            success: false,
            error: error.message || 'Erreur lors de la récupération des commandes'
        };
    }
};

/**
 * Récupérer une commande par ID
 * @param {number} orderId - ID de la commande
 * @returns {Promise<Object>} Données de la commande
 */
export const getOrderById = async (orderId) => {
    try {
        if (!orderId) {
            throw new Error('ID de la commande requis');
        }

        const response = await apiClient.get(`/api/business/orders/${orderId}`);

        return response.data;

    } catch (error) {
        console.error('Erreur récupération commande:', error);

        return {
            success: false,
            error: error.message || 'Commande introuvable'
        };
    }
};

/**
 * Créer une facture à partir d'une commande
 * @param {number} orderId - ID de la commande
 * @returns {Promise<Object>} Données de la facture créée
 */
export const createInvoiceFromOrder = async (orderId) => {
    try {
        if (!orderId) {
            throw new Error('ID de la commande requis');
        }

        const response = await apiClient.post(`/api/business/orders/${orderId}/invoice`);

        return response.data;

    } catch (error) {
        console.error('Erreur création facture:', error);

        return {
            success: false,
            error: error.message || 'Erreur lors de la création de la facture'
        };
    }
};

// Fonction utilitaire pour valider l'email
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
