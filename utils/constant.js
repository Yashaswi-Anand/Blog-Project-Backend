const getCategory = (category) => {
    const categories = {
        gadget: 'GADGET',
        tips: 'TIPS',
        ai_website: 'AI_WEBSITE',
        apps: 'APPS',
    };
    return categories[category] || 'GADGET';
};

module.exports = getCategory; 