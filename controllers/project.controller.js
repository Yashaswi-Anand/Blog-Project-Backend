const serverResponce = require("../config/responses");
const prisma = require("../db_config/db_config");
const getCategory = require("../utils/constant");

module.exports = {
    async getAllBlogs(req, res) {
        try {
            const projects = await prisma.post.findMany();
            serverResponce.successResponse(res, 'All projects fetched successfully', projects);
        } catch (error) {
            console.log(error);
            serverResponce.errorMysqlResponse(res, error, 'Internal Server Error');
        }
    },

    async addNewBlog(req, res) {
        try {
            let { title, description, category, link } = req.body;
            category = getCategory(category);
            const project = await prisma.post.create({ data: { title, description, category, image: link } });
            serverResponce.successResponse(res, 'Project added successfully', project);
        } catch (error) {
            console.log(error);
            serverResponce.errorMysqlResponse(res, error, 'Internal Server Error');
        }
    },

    async updateBlog(req, res) {
        try {
            const post_id = req.params.id;
            const { title, description, category } = req.body;
            const project = await prisma.post.update({ where: { id: post_id }, data: { title, description, category } });
            serverResponce.successResponse(res, 'Project updated successfully', project);
        } catch (error) {
            console.log(error);
            serverResponce.errorMysqlResponse(res, error, 'Internal Server Error');
        }
    },

    async getBlogById(req, res) {
        try {
            const post_id = req.params.id;
            const project = await prisma.post.findFirst({ where: { id: +post_id } });
            serverResponce.successResponse(res, 'Project fetched successfully', project);
        } catch (error) {
            console.log(error);
            serverResponce.errorMysqlResponse(res, error, 'Internal Server Error');
        }
    },

    async mostViewedBlogs(req, res) {
        try {
            const projects = await prisma.$queryRaw`SELECT * FROM "Post" ORDER BY views DESC LIMIT 3;`;
            serverResponce.successResponse(res, 'Project fetched successfully', projects);
        } catch (error) {
            console.log(error);
            serverResponce.errorMysqlResponse(res, error, 'Internal Server Error');
        }
    },

    async mostRecentBlogs(req, res) {
        try {
            const projects = await prisma.$queryRaw`SELECT * FROM "Post" ORDER BY date DESC LIMIT 3;`;
            serverResponce.successResponse(res, 'Project fetched successfully', projects);
        } catch (error) {
            console.log(error);
            serverResponce.errorMysqlResponse(res, error, 'Internal Server Error');
        }
    },

    async blogContentByCategory(req, res) {
        try {
            let { category } = req.query;
            category = getCategory(category);
            const projects = await prisma.post.findMany({ where: { category: category.toUpperCase() } });
            serverResponce.successResponse(res, 'Project fetched successfully', projects);
        } catch (error) {
            console.log(error);
            serverResponce.errorMysqlResponse(res, error, 'Internal Server Error');
        }
    }
}

