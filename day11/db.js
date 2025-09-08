const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5000;

const mongoUrl = 'mongodb://localhost:27017/resumeData';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB via Mongoose'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.use(express.json());

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  techStack: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

const Project = mongoose.model('Project', projectSchema);

app.put('/api/projects/:id', async (req, res) => {
  try {
    const updateData = req.body;
    updateData.updatedAt = new Date();

    const result = await Project.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true
    });

    if (!result) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }

    res.json({
      success: true,
      message: 'Project updated successfully',
      project: result
    });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to update project' });
  }
});

app.delete('/api/projects/:id', async (req, res) => {
  try {
    const result = await Project.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to delete project' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});