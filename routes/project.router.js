const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');

router.get('/all_blogs', projectController.getAllBlogs);

router.post('/add_new_blog', projectController.addNewBlog);

router.put('/update_blog/:id', projectController.updateBlog);

router.get('/get_blog/:id', projectController.getBlogById);

router.get('/most_viewed_blogs', projectController.mostViewedBlogs);

router.get('/most_recent_blogs', projectController.mostRecentBlogs);

router.get('/blog_content_by_category', projectController.blogContentByCategory);

module.exports = router;

