const getCategory = (category) => {
    const categories = {
        Gadget: 'GADGET',
        Trick: 'TIPS',
        'AI Website': 'AI_WEBSITE',
        Apps: 'APPS',
        gadget: 'GADGET',
        'ai_website': 'AI_WEBSITE',
        tips: 'TIPS',
        apps: 'APPS',
    };
    return categories[category] || 'GADGET';
};

module.exports = getCategory; 