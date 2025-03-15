const serverResponce = require("../config/responses");

module.exports = {
    async getAllBlogs(req, res) {
        try {
            serverResponce.successResponse(res, 'All projects fetched successfully', []);
        } catch (error) {
            console.log(error);
        }
    },

    async addNewBlog(req, res) {
        try {
            serverResponce.successResponse(res, 'Project added successfully', []);
        } catch (error) {
            console.log(error);
        }
    },

    async updateBlog(req, res) {
        try {
            serverResponce.successResponse(res, 'Project updated successfully', []);
        } catch (error) {
            console.log(error);
        }
    },

    async getBlogById(req, res) {
        try {
            serverResponce.successResponse(res, 'Project fetched successfully', []);
        } catch (error) {
            console.log(error);
        }
    },

    async mostViewedBlogs(req, res) {
        try {
            serverResponce.successResponse(res, 'Project fetched successfully', []);
        } catch (error) {
            console.log(error);

        }
    },

    async mostRecentBlogs(req, res) {
        try {
            serverResponce.successResponse(res, 'Project fetched successfully', []);
        } catch (error) {
            console.log(error);
        }
    }
}

